import * as dotenv from 'dotenv'
import { Server } from "socket.io";
import { createSqsJobs } from './periodic-jobs'
import { createDefaultQueues } from './sqs'
import { createSubscriptions } from './subscriptions'
import socketioServer from 'fastify-socket.io'
import Fastify from 'fastify'
import { generateErrorMessage } from "zod-error"
import { getConfig } from './config'
import { SQS } from '@aws-sdk/client-sqs'
import { Client } from 'aidbox-sdk'
import { SocketType } from './types';
import cors from '@fastify/cors'


dotenv.config()

const fastify = Fastify({
  logger: true
})

fastify.register(require("fastify-metrics"), { endpoint: '/metrics' });
fastify.register(socketioServer, { cors: { origin: "*" } })



declare module 'fastify' {
  interface FastifyInstance {
    io: Server
  }
}



export const queuesName = [
  'patient-sqs',
  'appointment-sqs',
  'observation-sqs',
  'encounter-sqs',
  'diagnosticreport-sqs'
]


const main = async () => {
  const configData = getConfig();
  if (configData.success) {

    await fastify.register(cors)

    const config = configData.data;

    fastify.log.info("Create SQS client");

    const sqsClient = new SQS({
      endpoint: config.SQS_URL,
      credentials: {
        accessKeyId: config.SQS_ACCESS_KEY_ID,
        secretAccessKey: config.SQS_SECRET_ACCESS_KEY,
      },
      region: config.SQS_REGION
    })


    const aidboxClient = new Client(config.AIDBOX_URL, { username: config.AIDBOX_CLIENT_ID, password: config.AIDBOX_CLIENT_SECRET });

    const handleSocket = (socketType: SocketType, patientId?: string) => {
      fastify.io.emit(socketType, patientId)
    }

    fastify.log.info("Create SQS queues");

    await createDefaultQueues(sqsClient, queuesName)

    fastify.log.info("Create SQS jobs");

    await createSqsJobs({ sqsClient, queues: queuesName, queueBaseUrl: config.SQS_URL, aidboxClient, handleSocket })

    fastify.get('/', async function handler(request, reply) {
      return "Aidbox SDK Examples backend"
    })

    fastify.post("/patient-created", async function (req, reply) {
      const data = req.body as any;
      if (data.type === 'notification') {
        const patient = data.resource
        handleSocket('subs_notification_patient', patient.id)
        const event = 'create-patient'
        await sqsClient.sendMessage({
          DelaySeconds: 0,
          QueueUrl: `${config.SQS_URL}/queue/patient-sqs`,
          MessageBody: patient.id,
          MessageAttributes: {
            Event: {
              DataType: 'String',
              StringValue: event
            }
          }
        })
        handleSocket('push_patient', patient.id)
        aidboxClient.sendLog({
          type: 'sqs',
          message: { event, id: patient.id }
        })
      }
      reply.status(200);
    });

    fastify.post("/observation-created", async function (req, reply) {
      const data = req.body as any;
      if (data.type === 'notification') {
        const observation = data.resource
        const event = 'create-observation'
        await sqsClient.sendMessage({
          DelaySeconds: 0,
          QueueUrl: `${config.SQS_URL}/queue/observation-sqs`,
          MessageBody: observation.id,
          MessageAttributes: {
            Event: {
              DataType: 'String',
              StringValue: event
            }
          }
        })
        aidboxClient.sendLog({
          type: 'sqs',
          message: { event, id: observation.id }
        })
      }
      reply.status(200)
    })
    fastify.post("/encounter-created", async function (req, reply) {
      const data = req.body as any;
      if (data.type === 'notification') {
        const encounter = data.resource
        const event = 'create-encounter'
        await sqsClient.sendMessage({
          DelaySeconds: 0,
          QueueUrl: `${config.SQS_URL}/queue/encounter-sqs`,
          MessageBody: encounter.id,
          MessageAttributes: {
            Event: {
              DataType: 'String',
              StringValue: event
            }
          }
        })
        aidboxClient.sendLog({
          type: 'sqs',
          message: { event, id: encounter.id }
        })

      }

      reply.status(200)
    })
    fastify.post("/diagnosticreport-created", async function (req, reply) {
      const data = req.body as any;
      if (data.type === 'notification') {
        const diagnosticReport = data.resource
        const event = 'create-diagnosticreport'
        await sqsClient.sendMessage({
          DelaySeconds: 0,
          QueueUrl: `${config.SQS_URL}/queue/diagnosticreport-sqs`,
          MessageBody: diagnosticReport.id,
          MessageAttributes: {
            Event: {
              DataType: 'String',
              StringValue: event
            }
          }
        })

        aidboxClient.sendLog({
          type: 'sqs',
          message: { event, id: diagnosticReport.id }
        })
      }

      reply.status(200)
    })
    fastify.post("/appointment-updated", async function (req, reply) {
      const data = req.body as any;
      if (data.type === 'notification') {
        const appointment = data.resource
        handleSocket('subs_notification_appointment', appointment.id)
        const event = 'update-appointment'
        await sqsClient.sendMessage({
          DelaySeconds: 0,
          QueueUrl: `${process.env.SQS_URL}/queue/appointment-sqs`,
          MessageBody: appointment.id,
          MessageAttributes: {
            Event: {
              DataType: 'String',
              StringValue: event
            }
          }
        })
        handleSocket('push_appointment', appointment.id)
        aidboxClient.sendLog({
          type: 'sqs',
          message: { event, id: appointment.id }
        })
      }

      reply.status(200)
    })

    fastify.log.info("Create Aidbox Subscriptions");


    await createSubscriptions(aidboxClient, config.APP_URL)

    fastify.ready(err => {
      if (err) throw err

      fastify.io.on('connect', (socket) => fastify.log.info('Socket connected!', socket.id))
    })

    try {
      await fastify.listen({ port: config.APP_PORT, host: "0.0.0.0" })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  } else {
    console.error("Invalid environment variables, check the errors below!");
    console.error(
      generateErrorMessage(configData.error.issues, {
        delimiter: { error: "\\n" },
      })
    );
    process.exit(-1);
  }


}



main().catch(e => console.error(e))

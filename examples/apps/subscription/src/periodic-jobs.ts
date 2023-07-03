import { SQS } from '@aws-sdk/client-sqs'
import cron from 'node-cron'
import { Client } from "aidbox-sdk"
import { HandleSocket } from './types'

const patientCreateWorker = async (aidboxClient: Client, handleSocket: HandleSocket, patientId: string) => {
  handleSocket('pull_patient', patientId)
  try {
    await aidboxClient.createResource('Task', {
      resourceType: 'Task',
      status: 'received',
      intent: 'order',
      for: {
        reference: `Patient/${patientId}`
      }
    })
    handleSocket('create_task_patient', patientId)
  } catch (error) {
    console.error(error)
  }
}

const observationCreateWorker = async (aidboxClient: Client, _handleSocket: HandleSocket, observationId: string) => {
  try {
    const observation = await aidboxClient.getResource(
      'Observation',
      observationId
    )

    if (observation.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `Observation/${observation.id}`
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const encounterCreateWorker = async (aidboxClient: Client, _handleSocket: HandleSocket, encounterId: string) => {
  try {
    const encounter = await aidboxClient.getResource('Encounter', encounterId)

    if (encounter.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `Encounter/${encounter.id}`
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const diagnosticReportCreateWorker = async (aidboxClient: Client, _handleSocket: HandleSocket, diagnosticReportId: string) => {
  try {
    const diagnosticReport = await aidboxClient.getResource(
      'DiagnosticReport',
      diagnosticReportId
    )

    if (diagnosticReport.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `DiagnosticReport/${diagnosticReport.id}`
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const appointmentUpdateWorker = async (aidboxClient: Client, handleSocket: HandleSocket, appointmentId: string) => {
  handleSocket('pull_appointment', appointmentId)
  try {
    const appointment = await aidboxClient.getResource(
      'Appointment',
      appointmentId
    )

    if (appointment.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `Appointment/${appointment.id}`
        }
      })

      handleSocket('create_task_appointment', appointment.id)
    }
  } catch (error) {
    console.error(error)
  }
}

export const workers = {
  'create-patient': patientCreateWorker,
  'create-observation': observationCreateWorker,
  'create-encounter': encounterCreateWorker,
  'create-diagnosticreport': diagnosticReportCreateWorker,
  'update-appointment': appointmentUpdateWorker
}



export const createSqsJobs = async ({ sqsClient, queues, queueBaseUrl, aidboxClient, handleSocket }:
  { sqsClient: SQS, queues: Array<string>, queueBaseUrl: string, aidboxClient: Client, handleSocket: HandleSocket }) => {
  cron.schedule('* * * * *', async () => {
    for (const queueName of queues) {
      const queueUrl = `${queueBaseUrl}/queue/${queueName}`
      const result = await sqsClient.receiveMessage({
        QueueUrl: queueUrl,
        MessageAttributeNames: ['All'],
        MaxNumberOfMessages: 10
      })

      result.Messages?.map(async (message) => {
        const event = message.MessageAttributes?.Event
          .StringValue as keyof typeof workers
        const handle = message.ReceiptHandle

        if (workers[event] && message.Body) {
          await workers[event](aidboxClient, handleSocket, message.Body)
          await sqsClient.deleteMessage({
            QueueUrl: queueUrl,
            ReceiptHandle: handle
          })
          return
        }
        throw new Error(
          'Event is Got message without "event" attribute, failed to process'
        )
      })
    }
  })
}

import * as dotenv from 'dotenv'
import cron from 'node-cron'

import { sqsClient } from './sqs.js'
import { workers } from './workers.js'
dotenv.config()

export const createSqsJobs = async (queues: Array<string>) => {
  cron.schedule('* * * * *', async () => {
    for (const queueName of queues) {
      const queueUrl = `${process.env.SQS_URL}/queue/${queueName}`
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
          await workers[event](message.Body)
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

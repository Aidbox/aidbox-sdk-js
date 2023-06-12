import { SQS } from '@aws-sdk/client-sqs'
import * as dotenv from 'dotenv'
dotenv.config()

export const sqsClient = new SQS({
  endpoint: process.env.SQS_URL,
  credentials: {
    accessKeyId: process.env.SQS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.SQS_SECRET_ACCESS_KEY as string
  },
  region: process.env.SQS_REGION
})

export const createDefaultQueues = async (queues: Array<string>) => {
  for (const queueName of queues) {
    const deadLetterName = queueName.replace(/-sqs$/, '-DeadLetterQueue-sqs')
    await sqsClient.createQueue({ QueueName: deadLetterName })

    await sqsClient.createQueue({
      QueueName: queueName,
      Attributes: {
        RedrivePolicy: JSON.stringify({
          deadLetterTargetArn: `arn:aws:sqs:elasticmq:000000000000:${deadLetterName}`,
          maxReceiveCount: 3
        })
      }
    })
  }
}

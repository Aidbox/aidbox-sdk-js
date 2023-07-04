import { SQS } from '@aws-sdk/client-sqs'

export const createDefaultQueues = async (sqsClient: SQS, queues: Array<string>) => {
  for (const queueName of queues) {
    console.log('Create queue', queueName)
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

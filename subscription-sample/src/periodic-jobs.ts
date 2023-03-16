import cron from "node-cron";
import { aidboxClient } from "./aidbox-client";
import { sqsClient } from "./sqs";
import * as dotenv from "dotenv";
dotenv.config();

export const createSqsJobs = async (queues: Array<string>) => {
  const workersMap = {
    "create-patient": async (patientId: string) => {
      await aidboxClient.createResource("Task", {
        status: "received",
        intent: "order",
        for: {
          resourceType: "Patient",
          id: patientId,
        },
      });
    },
  };

  cron.schedule("* * * * *", async () => {
    console.log("running a task every minute");
    for (const queueName of queues) {
      const queueUrl = `${process.env.SQS_URL}/queue/${queueName}`;
      const result = await sqsClient.receiveMessage({
        QueueUrl: queueUrl,
        MessageAttributeNames: ["All"],
        MaxNumberOfMessages: 10,
      });

      result.Messages?.map(async (message) => {
        console.log(message, "message");
        const event = message.MessageAttributes?.Event
          .StringValue as keyof typeof workersMap;
        const handle = message.ReceiptHandle;

        if (workersMap[event]) {
          await workersMap[event](message.Body || "");
          await sqsClient.deleteMessage({
            QueueUrl: queueUrl,
            ReceiptHandle: handle,
          });
          return;
        }

        throw new Error(
          'Event is Got message without "event" attribute, failed to process'
        );
      });
    }
  });
};

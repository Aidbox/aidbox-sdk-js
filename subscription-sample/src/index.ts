import * as http from "http";
import * as dotenv from "dotenv";
import { createSqsJobs } from "./periodic-jobs";
import { createDefaultQueues, sqsClient } from "./sqs";
import { createSubscriptions } from "./subscriptions";

dotenv.config();
const port = 8000;

export const queuesName = ["create-patient-sqs", "appointment-sqs"];

const startApp = async () => {
  await createDefaultQueues(queuesName);
  await createSqsJobs(queuesName);
  await createSubscriptions();

  const server = http.createServer((req, res) => {
    try {
      res.setHeader("Content-Type", "application/json");

      switch (req.url) {
        case "/":
          res.writeHead(200);
          res.end("Hello!");
          break;
        case "/patient-created":
          let data = "";
          req.on("data", (chunk) => {
            data += chunk;
          });

          req.on("end", async () => {
            const patient = JSON.parse(data).resource;
            await sqsClient.sendMessage({
              DelaySeconds: 0,
              QueueUrl: `${process.env.SQS_URL}/queue/create-patient-sqs`,
              MessageBody: patient.id,
              MessageAttributes: {
                Event: {
                  DataType: "String",
                  StringValue: "create-patient",
                },
              },
            });
            res.writeHead(200);
            res.end();
          });

        case "/appointment-created":
          res.writeHead(200);
          res.end();

        case "/appointment-updated":
          res.writeHead(200);
          res.end();

          break;
        default:
          res.writeHead(404);
          res.end(JSON.stringify({ error: "Resource not found" }));
      }
    } catch (error: unknown) {
      console.dir(error, { depth: 9 });
      res.end(JSON.stringify({ error }));
      res.writeHead(400);
    }
  });
  server.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
  });
};

startApp();

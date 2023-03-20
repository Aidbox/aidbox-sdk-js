import * as http from "http";
import * as dotenv from "dotenv";
import { createSqsJobs } from "./periodic-jobs";
import { createDefaultQueues, sqsClient } from "./sqs";
import { createSubscriptions } from "./subscriptions";
import { handleEndpoints } from "./endpoints";

dotenv.config();
const port = 8000;

export const queuesName = ["create-patient-sqs", "appointment-sqs"];

const startApp = async () => {
  await createDefaultQueues(queuesName);
  await createSqsJobs(queuesName);
  await createSubscriptions();

  const server = http.createServer(async (req, res) => {
    try {
      res.setHeader("Content-Type", "application/json");

      await handleEndpoints(req, res);
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

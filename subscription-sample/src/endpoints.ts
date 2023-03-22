import { IncomingMessage, ServerResponse } from "node:http";
import client from "prom-client";
import { aidboxClient } from "./aidbox-client";
import { sqsClient } from "./sqs";

const handleCreatePatient = async (data: string) => {
  const patient = JSON.parse(data).resource;
  const event = "create-patient";
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/patient-sqs`,
    MessageBody: patient.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: event,
      },
    },
  });
  aidboxClient.sendLog({
    type: "sqs",
    message: { event, id: patient.id },
  });
};

const handleCreateObservation = async (data: string) => {
  const observation = JSON.parse(data).resource;
  const event = "create-observation";
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/observation-sqs`,
    MessageBody: observation.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: event,
      },
    },
  });
  aidboxClient.sendLog({
    type: "sqs",
    message: { event, id: observation.id },
  });
};

const handleCreateEncounter = async (data: string) => {
  const encounter = JSON.parse(data).resource;
  const event = "create-encounter";
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/encounter-sqs`,
    MessageBody: encounter.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: event,
      },
    },
  });
  aidboxClient.sendLog({
    type: "sqs",
    message: { event, id: encounter.id },
  });
};

const handleCreateDiagnosticReport = async (data: string) => {
  const diagnosticReport = JSON.parse(data).resource;
  const event = "create-diagnosticreport";
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/diagnosticreport-sqs`,
    MessageBody: diagnosticReport.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: event,
      },
    },
  });

  aidboxClient.sendLog({
    type: "sqs",
    message: { event, id: diagnosticReport.id },
  });
};

const handleUpdateAppointment = async (data: string) => {
  const appointment = JSON.parse(data).resource;
  const event = "update-appointment";
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/appointment-sqs`,
    MessageBody: appointment.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: event,
      },
    },
  });

  aidboxClient.sendLog({
    type: "sqs",
    message: { event, id: appointment.id },
  });
};

const register = new client.Registry();
register.setDefaultLabels({
  app: "subscription-sample-app",
});
client.collectDefaultMetrics({ register });

export const handleEndpoints = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end("Hello!");
      break;

    case "/metrics":
      const metrics = await register.metrics();
      res.setHeader("Content-Type", register.contentType);
      res.end(metrics);
      break;

    case "/patient-created":
      req.on("end", async () => {
        await handleCreatePatient(data);
        res.writeHead(200);
        res.end();
      });
      break;

    case "/observation-created":
      req.on("end", async () => {
        await handleCreateObservation(data);
        res.writeHead(200);
        res.end();
      });
      break;

    case "/encounter-created":
      req.on("end", async () => {
        await handleCreateEncounter(data);
        res.writeHead(200);
        res.end();
      });
      break;

    case "/diagnosticreport-created":
      req.on("end", async () => {
        await handleCreateDiagnosticReport(data);
        res.writeHead(200);
        res.end();
      });
      break;

    case "/appointment-updated":
      req.on("end", async () => {
        await handleUpdateAppointment(data);
        res.writeHead(200);
        res.end();
      });
      break;

    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
};

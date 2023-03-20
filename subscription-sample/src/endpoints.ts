import { IncomingMessage, ServerResponse } from "node:http";
import { sqsClient } from "./sqs";

const handleCreatePatient = async (data: string) => {
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
};

const handleCreateAppointment = async (data: string) => {
  const appointment = JSON.parse(data).resource;
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/appointment-sqs`,
    MessageBody: appointment.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: "create-appointment",
      },
    },
  });
};

const handleUpdateAppointment = async (data: string) => {
  const appointment = JSON.parse(data).resource;
  await sqsClient.sendMessage({
    DelaySeconds: 0,
    QueueUrl: `${process.env.SQS_URL}/queue/appointment-sqs`,
    MessageBody: appointment.id,
    MessageAttributes: {
      Event: {
        DataType: "String",
        StringValue: "update-appointment",
      },
    },
  });
};

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

    case "/patient-created":
      req.on("end", async () => {
        await handleCreatePatient(data);
        res.writeHead(200);
        res.end();
      });
      break;

    case "/appointment-created":
      req.on("end", async () => {
        await handleCreateAppointment(data);
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

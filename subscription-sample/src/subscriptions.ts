import { aidboxClient } from "./aidbox-client";
import * as dotenv from "dotenv";
dotenv.config();

export const createSubscriptions = async () => {
  const subscriptions = [
    aidboxClient.subscriptionEntry({
      id: "patient-created",
      status: "active",
      trigger: { Patient: { event: ["create"] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/patient-created` },
    }),
    aidboxClient.subscriptionEntry({
      id: "appointment-created",
      status: "active",
      trigger: { Appointment: { event: ["create"] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/appointment-created` },
    }),
    aidboxClient.subscriptionEntry({
      id: "appointment-updated",
      status: "active",
      trigger: { Appointment: { event: ["update"] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/appointment-updated` },
    }),
  ];

  await aidboxClient.bundleRequest(
    subscriptions.map(aidboxClient.bundleEntryPut as any)
  );
};

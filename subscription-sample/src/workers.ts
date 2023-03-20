import { aidboxClient } from "./aidbox-client";

const patientCreateWorker = async (patientId: string) => {
  try {
    await aidboxClient.createResource("Task", {
      resourceType: "Task",
      status: "received",
      intent: "order",
      for: {
        resourceType: "Patient",
        id: patientId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const appointmentCreateWorker = async (appointmentId: string) => {
  try {
    const appointment = await aidboxClient.getResource(
      "Appointment",
      appointmentId
    );

    if (!(appointment instanceof Error) && appointment.id) {
      await aidboxClient.createResource("Task", {
        resourceType: "Task",
        status: "received",
        intent: "order",
        for: {
          resourceType: "Appointment",
          id: appointment.id,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const appointmentUpdateWorker = async (appointmentId: string) => {
  try {
    const appointment = await aidboxClient.getResource(
      "Appointment",
      appointmentId
    );

    if (!(appointment instanceof Error) && appointment.id) {
      await aidboxClient.createResource("Task", {
        resourceType: "Task",
        status: "received",
        intent: "order",
        for: {
          resourceType: "Appointment",
          id: appointment.id,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const workers = {
  "create-patient": patientCreateWorker,
  "create-appointment": appointmentCreateWorker,
  "update-appointment": appointmentUpdateWorker,
};

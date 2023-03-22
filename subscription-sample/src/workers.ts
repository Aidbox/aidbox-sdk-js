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

const observationCreateWorker = async (observationId: string) => {
  try {
    const observation = await aidboxClient.getResource(
      "Observation",
      observationId
    );

    if (!(observation instanceof Error) && observation.id) {
      await aidboxClient.createResource("Task", {
        resourceType: "Task",
        status: "received",
        intent: "order",
        for: {
          resourceType: "Observation",
          id: observation.id,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const encounterCreateWorker = async (encounterId: string) => {
  try {
    const encounter = await aidboxClient.getResource("Encounter", encounterId);

    if (!(encounter instanceof Error) && encounter.id) {
      await aidboxClient.createResource("Task", {
        resourceType: "Task",
        status: "received",
        intent: "order",
        for: {
          resourceType: "Encounter",
          id: encounter.id,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const diagnosticReportCreateWorker = async (diagnosticReportId: string) => {
  try {
    const diagnosticReport = await aidboxClient.getResource(
      "DiagnosticReport",
      diagnosticReportId
    );

    if (!(diagnosticReport instanceof Error) && diagnosticReport.id) {
      await aidboxClient.createResource("Task", {
        resourceType: "Task",
        status: "received",
        intent: "order",
        for: {
          resourceType: "DiagnosticReport",
          id: diagnosticReport.id,
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
  "create-observation": observationCreateWorker,
  "create-encounter": encounterCreateWorker,
  "create-diagnosticreport": diagnosticReportCreateWorker,
  "update-appointment": appointmentUpdateWorker,
};

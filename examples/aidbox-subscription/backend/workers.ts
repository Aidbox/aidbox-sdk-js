import { aidboxClient } from './aidbox-client.js'
import { handleSocket } from './socket.js'

const patientCreateWorker = async (patientId: string) => {
  handleSocket('pull_patient', patientId)
  try {
    await aidboxClient.createResource('Task', {
      resourceType: 'Task',
      status: 'received',
      intent: 'order',
      for: {
        reference: `Patient/${patientId}`
      }
    })
    handleSocket('create_task_patient', patientId)
  } catch (error) {
    console.error(error)
  }
}

const observationCreateWorker = async (observationId: string) => {
  try {
    const observation = await aidboxClient.getResource(
      'Observation',
      observationId
    )

    if (observation.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `Observation/${observation.id}`
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const encounterCreateWorker = async (encounterId: string) => {
  try {
    const encounter = await aidboxClient.getResource('Encounter', encounterId)

    if (encounter.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `Encounter/${encounter.id}`
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const diagnosticReportCreateWorker = async (diagnosticReportId: string) => {
  try {
    const diagnosticReport = await aidboxClient.getResource(
      'DiagnosticReport',
      diagnosticReportId
    )

    if (diagnosticReport.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `DiagnosticReport/${diagnosticReport.id}`
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const appointmentUpdateWorker = async (appointmentId: string) => {
  handleSocket('pull_appointment', appointmentId)
  try {
    const appointment = await aidboxClient.getResource(
      'Appointment',
      appointmentId
    )

    if (appointment.id) {
      await aidboxClient.createResource('Task', {
        resourceType: 'Task',
        status: 'received',
        intent: 'order',
        for: {
          reference: `Appointment/${appointment.id}`
        }
      })

      handleSocket('create_task_appointment', appointment.id)
    }
  } catch (error) {
    console.error(error)
  }
}

export const workers = {
  'create-patient': patientCreateWorker,
  'create-observation': observationCreateWorker,
  'create-encounter': encounterCreateWorker,
  'create-diagnosticreport': diagnosticReportCreateWorker,
  'update-appointment': appointmentUpdateWorker
}

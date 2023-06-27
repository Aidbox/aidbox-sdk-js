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
        resourceType: 'Patient',
        id: patientId
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
          resourceType: 'Observation',
          id: observation.id
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
          resourceType: 'Encounter',
          id: encounter.id
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
          resourceType: 'DiagnosticReport',
          id: diagnosticReport.id
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const appointmentUpdateWorker = async (appointmentId: string) => {
  handleSocket('pull_appointment')
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
          resourceType: 'Appointment',
          id: appointment.id
        }
      })

      handleSocket('create_task_appointment')
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

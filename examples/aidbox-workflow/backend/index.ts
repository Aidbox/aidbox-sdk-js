import assert from 'node:assert'

import { Appointment, Patient } from 'aidbox-sdk/types'

import { aidboxClient as client } from '../../shared/client'

export interface Task {
  definition: string
  id: string
  meta: { lastUpdated: string, createdAt: string, versionId: string }
  params: Record<string, unknown>
  resourceType: 'AidboxTask'
  status: 'ready' | 'in-progress' | 'done'
}

export const getTasksList = async (): Promise<Array<Task>> => {
  // filter: { includeDefinitions: [''], status: 'ready' },
  // sort: { createdAt: 'desc' }

  const response = await client.client.post<{ result: { resources: Array<Task> }}>('/rpc', {
    method: 'awf.task/list',
    params: {}
  })
  return response.data.result.resources
}

export type AppointmentWithParticipant = Omit<Appointment, 'participant'> & { participant: { patient: Patient } }

export const getAppointment = async (id: string): Promise<AppointmentWithParticipant> => {
  const appointment = await client.getResource('Appointment', id)
  console.log(appointment)
  const participant = await getParticipant(appointment.participant)
  console.log(participant)
  // assert(participant, 'patient is missing')

  return { ...appointment, participant: participant! }
}

export const getParticipant = async (participant: Appointment['participant']): Promise<{ patient: Patient } | void> => {
  const patientReference = participant.find((item) => item.actor?.reference)

  if (patientReference?.actor?.reference) {
    const patient = await client.getResource('Patient', patientReference.actor.reference.split('/').pop() as string)
    return { patient }
  }
}

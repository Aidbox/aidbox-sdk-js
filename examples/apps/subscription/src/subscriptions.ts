import { Client } from 'aidbox-sdk'

export const createSubscriptions = async (aidboxClient: Client, url: string) => {
  const subscriptions = [
    aidboxClient.subscriptionEntry({
      id: 'patient-created',
      status: 'active',
      trigger: { Patient: { event: ['create'] } },
      channel: { endpoint: `${url}/patient-created` }
    }),
    aidboxClient.subscriptionEntry({
      id: 'observation-created',
      status: 'active',
      trigger: { Observation: { event: ['create'] } },
      channel: { endpoint: `${url}/observation-created` }
    }),
    aidboxClient.subscriptionEntry({
      id: 'encounter-created',
      status: 'active',
      trigger: { Encounter: { event: ['create'] } },
      channel: { endpoint: `${url}/encounter-created` }
    }),
    aidboxClient.subscriptionEntry({
      id: 'diagnosticreport-created',
      status: 'active',
      trigger: { DiagnosticReport: { event: ['create'] } },
      channel: {
        endpoint: `${url}/diagnosticreport-created`
      }
    }),
    aidboxClient.subscriptionEntry({
      id: 'appointment-updated',
      status: 'active',
      trigger: { Appointment: { event: ['update'] } },
      channel: { endpoint: `${url}/appointment-updated` }
    })
  ]

  await aidboxClient.bundleRequest(
    aidboxClient.transformToBundle(subscriptions, 'PUT')
  )
}

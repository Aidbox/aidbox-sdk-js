import * as dotenv from 'dotenv'

import { aidboxClient } from './aidbox-client'
dotenv.config()

export const createSubscriptions = async () => {
  const subscriptions = [
    aidboxClient.subscriptionEntry({
      id: 'patient-created',
      status: 'active',
      trigger: { Patient: { event: ['create'] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/patient-created` }
    }),
    aidboxClient.subscriptionEntry({
      id: 'observation-created',
      status: 'active',
      trigger: { Observation: { event: ['create'] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/observation-created` }
    }),
    aidboxClient.subscriptionEntry({
      id: 'encounter-created',
      status: 'active',
      trigger: { Encounter: { event: ['create'] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/encounter-created` }
    }),
    aidboxClient.subscriptionEntry({
      id: 'diagnosticreport-created',
      status: 'active',
      trigger: { DiagnosticReport: { event: ['create'] } },
      channel: {
        endpoint: `${process.env.NODE_APP_URL}/diagnosticreport-created`
      }
    }),
    aidboxClient.subscriptionEntry({
      id: 'appointment-updated',
      status: 'active',
      trigger: { Appointment: { event: ['update'] } },
      channel: { endpoint: `${process.env.NODE_APP_URL}/appointment-updated` }
    })
  ]

  await aidboxClient.bundleRequest(
    aidboxClient.transformToBundle(subscriptions, 'PUT')
  )
}

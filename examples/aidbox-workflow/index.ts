import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { isAxiosError } from 'axios'
import dotenv from 'dotenv'
import FormData from 'form-data'
import { DateTime } from 'luxon'
import MailgunClient from 'mailgun.js'

import { aidboxClient as client } from '../shared/client.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const template = readFileSync(resolve(__dirname, 'email.html')).toString()
const domain = process.env.MAILGUN_DOMAIN || ''
const mailgunApiKey = process.env.MAILGUN_API_KEY || ''
const { workflow, task } = client

const mailgun = new MailgunClient.default(FormData).client({ username: 'api', key: mailgunApiKey })

async function generateDepressionForm (patientId?: string, encounterId?: string): Promise<string> {
  try {
    const form = await client.client.post('/rpc', {
      method: 'aidbox.sdc/launch',
      params: {
        form: 'aidbox.forms.phq2phq9/PHQ2PHQ9Form',
        params: { 'encounter-id': encounterId, 'patient-id': patientId }
      }
    })

    const data = await client.client.post<{ result: { link: string } }>('/rpc', {
      method: 'aidbox.sdc/generate-form-link',
      params: { form: { id: form.data.result.document.id, resourceType: 'SDCDocument' } }
    })

    return data.data.result.link
  } catch (error: unknown) {
    if (isAxiosError(error)) console.log(error.response?.data)
    throw (error)
  }
}

async function sendEmail (email: string, text: string) {
  const message = {
    from: `Upcoming appointment <support@${domain}>`,
    to: email,
    subject: 'Mental Health Treatment Center',
    html: `<a>${text}</a>`
  }

  await mailgun.messages.create(domain, message)
}

function findTargetDate (date: string | undefined, daysOut: number, targetHour = 10) {
  if (date === undefined) return undefined

  const zone = 'America/New_York'
  const now = DateTime.now().setZone(zone)
  const eventDate = DateTime.fromISO(date).setZone(zone)
  const targetDate = eventDate
    .minus({ days: daysOut })
    .set({ hour: targetHour, minute: 0, second: 0, millisecond: 0 })

  if ((targetDate.diff(now, 'days').days || 0) > 0) {
    return targetDate.toISO() || undefined
  }
}

task.implement('notification/send-email', async ({ params }) => {
  const appointment = await client.getResource('Appointment', params.id)
  const participant = appointment.participant.find(({ actor }) => actor?.reference?.includes('Patient'))
  const patientId = participant?.actor?.reference?.split('/').pop()

  if (!patientId) throw new Error('Error: Patient is missing')

  const patient = await client.getResource('Patient', patientId)
  const contact = patient.telecom?.find(contact => contact.system === 'email')

  if (!contact) throw new Error('Error: Email is missing')

  const patientName = patient.name?.pop()

  const encounter = await client.createResource('Encounter', {
    status: 'in-progress',
    appointment: [{ reference: `Appointment/${appointment.id}` }],
    type: [{ coding: [{ code: 'optionsOnly', system: 'https://hl7.org/fhir/questionnaire-answer-constraint', display: 'options only' }] }],
    priority: { coding: [{ code: 'EL', system: 'https://terminology.hl7.org/CodeSystem/v3-ActPriority', display: 'elective' }] },
    class: { code: 'VR', system: 'https://terminology.hl7.org/ValueSet/encounter-class', display: 'virtual' },
    subject: { reference: `Patient/${patient.id}` },
    resourceType: 'Encounter'
  })

  await client.createResource('Communication', {
    status: 'completed',
    basedOn: [{ reference: `Encounter/${encounter.id}` }],
    recipient: [{ reference: `Patient/${patient.id}` }],
    resourceType: 'Communication'
  })

  const link = await generateDepressionForm(patient.id, encounter.id)
  const message = template
    .replace('{name}', (patientName?.given?.join(' ') || '') + ' ' + patientName?.family)
    .replace('{link}', link)

  await sendEmail(contact?.value || '', message)

  return { status: true }
})

workflow.implement('notification/appointment-created', async ({ params: { event }, requester }, { execute, complete }) => {
  if (event === 'awf.workflow.event/workflow-init') {
    const { data: workflow } = await client.client.get(`/AidboxWorkflow/${requester.id}`)
    const appointment = await client.getResource('Appointment', workflow.params.id)
    const targetDate = findTargetDate(appointment.start, 2)

    return [targetDate ? execute({ definition: 'awf.task/wait', params: { until: targetDate } }) : complete({})]
  }

  if (event === 'awf.workflow.event/task-completed') {
    const { data: workflow } = await client.client.get(`/AidboxWorkflow/${requester.id}`)
    const communications = await client.getResources('Encounter')
      .where('appointment', `Appointment/${workflow.params.id}`)
      .where('class', 'VR')
      .count(0)

    return [
      communications.total === 0
        ? execute({ definition: 'notification/send-email', params: { id: workflow.params.id } })
        : complete({})
    ]
  }

  return [complete({})]
})

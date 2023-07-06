import { readFileSync } from 'fs'
import * as path from 'path'
import cors from '@fastify/cors'
import { Client } from 'aidbox-sdk'
import { isAxiosError } from 'axios'
import dotenv from 'dotenv'
import FormData from 'form-data'
import { DateTime } from 'luxon'
import MailgunClient from 'mailgun.js'
import { generateErrorMessage } from 'zod-error'
import { Config, getConfig } from './config'
import { FastifyInstance } from 'fastify'

const template = readFileSync(path.resolve(__dirname, 'email.html')).toString()


async function generateDepressionForm(client: Client, patientId?: string, encounterId?: string): Promise<string> {
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

async function sendEmail(config: Config, email: string, text: string) {
  if (config.MAILGUN_API_KEY && config.MAILGUN_DOMAIN) {
    const message = {
      from: `Upcoming appointment <support@${config.MAILGUN_DOMAIN}>`,
      to: email,
      subject: 'Mental Health Treatment Center',
      html: text
    }

    const mailgun = new MailgunClient.default(FormData).client({ username: 'api', key: config.MAILGUN_API_KEY })


    await mailgun.messages.create(config.MAILGUN_DOMAIN, message)
  } else {
    console.log("Mailgun creds not configured")
  }
}

function findTargetDate(date: string | undefined, daysOut: number, targetHour = 10) {
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

const initWorkflowActions = (aidboxClient: Client, fastify: FastifyInstance, config: Config) => {
  const { task, workflow } = aidboxClient;

  task.implement('notification/send-email', async ({ params }) => {
    fastify.io.emit('worker', 3)
    const appointment = await aidboxClient.getResource('Appointment', params.id)
    const participant = appointment.participant.find(({ actor }) => actor?.reference?.includes('Patient'))
    const patientId = participant?.actor?.reference?.split('/').pop()

    if (!patientId) throw new Error('Error: Patient is missing')

    const patient = await aidboxClient.getResource('Patient', patientId)
    const contact = patient.telecom?.find(contact => contact.system === 'email')

    if (!contact) throw new Error('Error: Email is missing')

    const patientName = patient.name?.pop()

    const encounter = await aidboxClient.createResource('Encounter', {
      status: 'in-progress',
      appointment: [{ reference: `Appointment/${appointment.id}` }],
      type: [{ coding: [{ code: 'optionsOnly', system: 'https://hl7.org/fhir/questionnaire-answer-constraint', display: 'options only' }] }],
      priority: { coding: [{ code: 'EL', system: 'https://terminology.hl7.org/CodeSystem/v3-ActPriority', display: 'elective' }] },
      class: { code: 'VR', system: 'https://terminology.hl7.org/ValueSet/encounter-class', display: 'virtual' },
      subject: { reference: `Patient/${patient.id}` },
      resourceType: 'Encounter'
    })

    await aidboxClient.createResource('Communication', {
      status: 'completed',
      basedOn: [{ reference: `Encounter/${encounter.id}` }],
      recipient: [{ reference: `Patient/${patient.id}` }],
      resourceType: 'Communication'
    })

    const link = await generateDepressionForm(aidboxClient, patient.id, encounter.id)
    const message = template
      .replace('{name}', (patientName?.given?.join(' ') || '') + ' ' + patientName?.family)
      .replace('{link}', link)

    await sendEmail(config, contact?.value || '', message)

    fastify.io.emit('sent_email')
    return { status: true }
  })

  workflow.implement('notification/appointment-created', async ({ params: { event }, requester }, { execute, complete }) => {
    if (event === 'awf.workflow.event/workflow-init') {
      fastify.io.emit('worker', 1)
      const { data: workflow } = await aidboxClient.client.get(`/AidboxWorkflow/${requester.id}`)
      const appointment = await aidboxClient.getResource('Appointment', workflow.params.id)
      const targetDate = findTargetDate(appointment.start, 2)
      fastify.io.emit('start_task', requester.id)

      return [targetDate ? execute({ definition: 'awf.task/wait', params: { until: targetDate } }) : complete({})]
    }

    if (event === 'awf.workflow.event/task-completed') {
      fastify.io.emit('worker', 2)
      const { data: workflow } = await aidboxClient.client.get(`/AidboxWorkflow/${requester.id}`)
      const communications = await aidboxClient.getResources('Encounter')
        .where('appointment', `Appointment/${workflow.params.id}`)
        .where('class', 'VR')
        .count(0)
      fastify.io.emit('start_task', requester.id)

      return [
        communications.total === 0
          ? execute({ definition: 'notification/send-email', params: { id: workflow.params.id } })
          : complete({})
      ]
    }

    return [complete({})]
  })

}

export const createApp = async (fastify: FastifyInstance) => {
  dotenv.config()

  const configData = getConfig()
  if (configData.success) {
    await fastify.register(cors)
    const config = configData.data
    const aidboxClient = new Client(config.AIDBOX_URL, { username: config.AIDBOX_CLIENT_ID, password: config.AIDBOX_CLIENT_SECRET })
    initWorkflowActions(aidboxClient, fastify, config)
    return { app: fastify, config }
  } else {
    console.error('Invalid environment variables, check the errors below!')
    console.error(
      generateErrorMessage(configData.error.issues, {
        delimiter: { error: '\\n' }
      })
    )
    process.exit(-1)
  }
}

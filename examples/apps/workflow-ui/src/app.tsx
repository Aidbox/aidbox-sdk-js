import { Container, Link, Text } from '@nextui-org/react'
import { Client } from 'aidbox-sdk'
import { useCallback, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

import { aidboxClient, socketIo } from './client'
import { AppContext } from './context'
import { SampleDesc } from './SampleDesc'
import { Tasks } from './Tasks'
import { WorkflowSchema } from './WorkflowSchema'

const appointmentData = {
  resourceType: 'Appointment',
  status: 'booked',
  description: 'Discussion on the results of your recent MRI',
  start: '2030-12-10T09:00:00Z',
  end: '2030-12-10T11:00:00Z',
  created: '2023-10-10',
  participant: [
    {
      actor: {
        reference: 'Patient/03cb8799-bfbd-40fa-9ea8-96114cf1fec1',
        display: 'Peter James Chalmers'
      },
      status: 'accepted'
    }
  ]
}

const patientData = {
  name: [
    {
      given: ['Peter', 'James'],
      family: 'Chalmers'
    }
  ],
  telecom: [
    {
      value: '',
      system: 'email'
    }
  ],
  id: '03cb8799-bfbd-40fa-9ea8-96114cf1fec1',
  resourceType: 'Patient'
}

export function App ({
  config
}: {
  config: {
    app_url: string;
    aidbox_url: string;
    aidbox_client: string;
    aidbox_secret: string;
  };
}) {
  const [appointmentId, setAppointmentId] = useState<string | null>(null)

  const createAppointment = useCallback(async (email: string) => {
    const patient = {
      ...patientData,
      telecom: [
        {
          value: email,
          system: 'email'
        }
      ]
    }

      await aidboxClient.client.put(`/Patient/${patient.id}`, patient)
      const data = await aidboxClient.createResource( // TODO: put appointment id in query params
        'Appointment',
        appointmentData
      )

      if (data.id) {
        setAppointmentId(data.id)
      }
  }, [])
console.log(1)

  return (
    <AppContext.Provider value={{ client: aidboxClient, socketIo }}>
      <Container
        display='flex'
        direction='column'
        alignContent='center'
      >
        <Text
          h1
          css={{ 'text-align': 'center' }}
        >
          Aidbox Workflow Engine
        </Text>
        <Text
          css={{ 'text-align': 'center', 'px': '60px' }}
          size='$xl'
        >
          Workflow allows orchestrating a series of&nbsp;
          <Link
            href='https://docs.aidbox.app/modules-1/workflow-engine/task'
            target='_blank'
          >
            tasks
          </Link>
          . Workflow in Aidbox is implemented through a special&nbsp;
          <Link
            href='https://docs.aidbox.app/modules-1/workflow-engine/task/aidbox-predefined-tasks#awf.workflow-decision-task'
            target='_blank'
          >
            decision
          </Link>{' '}
          task, an instance of which is created on every event of workflow, thus
          a logic behind workflow could be implemented as an executor for this
          task.
        </Text>
        <SampleDesc
          appointmentData={appointmentData}
          createAppointment={createAppointment}
          appointmentId={appointmentId}
        />
        {appointmentId && (
          <>
            <WorkflowSchema />
            <Tasks
              appointmentId={appointmentId}
              config={config}
            />
          </>
        )}
      </Container>
    </AppContext.Provider>
  )
}

import './css.css'

import { Container, Grid, Link, Text } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { aidboxClient } from '../../shared/client'
import { getTasksList, getAppointment, Task, AppointmentWithParticipant } from '../backend'

import { SampleDesc } from './SampleDesc'
import { Tasks } from './Tasks'
import { Workers } from './Workers'

const appointmentData = {
  resourceType: 'Appointment',
  status: 'booked',
  description: 'Discussion on the results of your recent MRI',
  start: '2030-12-10T09:00:00Z',
  end: '2030-12-10T11:00:00Z',
  created: '2023-10-10',
  participant: [{
    actor: {
      reference: 'Patient/03cb8799-bfbd-40fa-9ea8-96114cf1fec1',
      display: 'Peter James Chalmers'
    },
    status: 'accepted'
  }]
}

export const socketIo = io('http://localhost:8000', {
  auth: {
    token: 'json-web-token'
  }
})

export function WorkflowEngine () {
  const [items, updateTasks] = useState<Array<{ task: Task, appointment: AppointmentWithParticipant }>>([])
  const [appointmentId, setAppointmentId] = useState<string | null>(null)

  useEffect(() => {
    getTasksList()
      .then((tasks) => Promise.all(tasks
        .filter((task) => {
          return task.status === 'ready'
        })
        .map(async (task) => {
          console.log(task, 111)
          return ({ task, appointment: await getAppointment(task.params?.id as string) })
        })
      ))
      .then((tasks) => {
        updateTasks(tasks)
      })
  }, [])

  const createAppointment = async () => {
    const data = await aidboxClient.createResource('Appointment', appointmentData)

    if (data.id) {
      setAppointmentId(data.id)
    }
  }

  return <Container
    display='flex'
    direction='column'
    alignContent='center'
         >
    <Text h1 css={{ 'text-align': 'center' }}>
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
      >tasks</Link>.
      Workflow in Aidbox is implemented through a special&nbsp;
      <Link
        href='https://docs.aidbox.app/modules-1/workflow-engine/task/aidbox-predefined-tasks#awf.workflow-decision-task'
        target='_blank'
      >decision</Link> task, an instance of which is created on every event of workflow,
      thus a logic behind workflow could be implemented as an executor for this task.
    </Text>
    <SampleDesc
      appointmentData={appointmentData}
      createAppointment={createAppointment}
      appointmentId={appointmentId}
    />
    <Grid.Container
      gap={2}
      justify='center'
    >
      <Grid
        xs={12}
        md={6}
        direction='column'
        css={{ pl: 0 }}
      >
        <Tasks appointmentId={appointmentId} />
      </Grid>
      <Grid
        xs={6}
        md={6}
        css={{ pr: 0 }}
      >
        <Workers appointmentId={appointmentId} />
      </Grid>
    </Grid.Container>
  </Container>
}

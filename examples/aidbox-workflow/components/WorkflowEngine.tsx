import './css.css'

import { memo, useEffect, useState } from 'react'

import { getTasksList, getAppointment, Task, AppointmentWithParticipant } from '../backend'

import Image from './polling.svg'
import { QueueComponent } from './Queue'
import { WorkerSpawn } from './Worker'

export function WorkflowEngine () {
  const [items, updateTasks] = useState<Array<{ task: Task, appointment: AppointmentWithParticipant }>>([])

  useEffect(() => {
    getTasksList()
      .then((tasks) => Promise.all(tasks
        .filter((task) => task.status === 'ready')
        .map(async (task) => ({ task, appointment: await getAppointment(task.params?.id as string) }))
      ))
      .then((tasks) => updateTasks(tasks))
  }, [])

  console.log('hello: ', items)

  return <div className='background'>
    <section className='section'>
      <QueueComponent tasks={items} />
      <Image />
      <WorkerSpawn />
    </section>
  </div>
}

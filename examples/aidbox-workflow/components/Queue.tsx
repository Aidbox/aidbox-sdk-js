import { useState } from 'react'
import './css.css'

import { AppointmentWithParticipant, Task } from '../backend'

interface Props {
  tasks: Array<{ task: Task, appointment: AppointmentWithParticipant }>
}

const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout))

export function QueueComponent ({ tasks }: Props) {
  const shown_tasks = tasks.slice(0, 3)
  // const [isLoading, updateLoadingState] = useState(true)
  //
  // if (isLoading) {
  //   return <div className='queue-container'>
  //     <Placeholder />
  //     <Placeholder />
  //     <Placeholder />
  //   </div>
  // }

  return <div className='queue-container'>
    {shown_tasks.map((task) => <TaskComponent task={task} key={task.task.id} />)}
    {tasks.length - shown_tasks.length > 0 && <div style={{ border: '1px solid black', width: 175 }} />}
  </div>
}

function TaskComponent ({ task }: { task: { task: Task, appointment: AppointmentWithParticipant } }) {
  console.log(task.appointment)
  console.log(task.appointment.participant.patient.name)
  const humanName = task.appointment.participant.patient.name?.[0]
  const patientName = humanName?.given?.join(' ') + ' ' + (humanName?.family || '')

  return <div style={{ border: '1px solid red', padding: '3px 6px', color: 'black', width: 175 }}>
    Appointment: <br />
    {patientName}
  </div>
}

function AppointmentSection () {

}

function LocationSection () {

}

function PractitionerSection () {

}

function PatientSection () {

}

function Placeholder () {
  return <div className='placeholder-glow' >
    <div className='placeholder' />
  </div>
}

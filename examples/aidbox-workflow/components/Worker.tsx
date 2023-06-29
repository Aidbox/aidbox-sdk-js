import { useState } from 'react'
import './css.css'

import { AppointmentWithParticipant, Task } from '../backend'

interface Props {
  tasks: Array<{ task: Task, appointment: AppointmentWithParticipant }>
}

const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout))

export function WorkerSpawn () {
  const count = 2

  return <div style={{ border: '1px solid red', padding: 6, gap: 6, display: 'flex' }}>
    <WorkerComponent index={1} />
    <WorkerComponent index={2} />
    <WorkerComponent index={3} />
  </div>
}

export function WorkerComponent ({ index }: { index: number }) {
  // const [isLoading, updateLoadingState] = useState(true)
  //
  // if (isLoading) {
  //   return <div className='queue-container'>
  //     <Placeholder />
  //     <Placeholder />
  //     <Placeholder />
  //   </div>
  // }

  return <div style={{ width: 175, height: 75, border: '1px solid black' }}>
    Worker {index}
  </div>
}

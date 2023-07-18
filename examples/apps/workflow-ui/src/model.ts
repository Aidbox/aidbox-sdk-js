import { Client } from 'aidbox-sdk'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { Socket } from 'socket.io-client'

export const green = '#17C964'
export const gray = '#889096'
export interface Task {
  id: string;
  params: {
    event?: string;
    until?: string;
  };
  status:
    | 'created'
    | 'ready'
    | 'requested'
    | 'in-progress'
    | 'done'
    | 'waiting';
  requester: {
    id: string;
    resourceType: 'AidboxWorkflow';
  };
  definition:
    | 'awf.workflow/decision-task'
    | 'awf.task/wait'
    | 'notification/send-email';
  'workflow-definition': 'notification/appointment-created';
}

export interface TaskData {
  title: 'workflow-init' | 'wait' | 'send-email';
  color: typeof green | typeof gray;
  body: any;
  id?: string;
  params?: Task['params'];
}

interface Workflow {
  params: {
    id: string;
  };
  status: 'created' | 'in-progress' | 'done';
  definition: 'notification/appointment-created';
  id: string;
  resourceType: 'AidboxWorkflow';
  meta: {
    lastUpdated: string;
    createdAt: string;
    versionId: string;
  };
}

export const $tasks = createStore<TaskData[]>([])
export const $workflow = createStore<Workflow | null>(null)

export const emailSent = createEvent()
export const $emailSent = createStore<boolean>(false).on(emailSent, () => true)
// export const $client = createStore<Client | null>(null)
// export const $socketIo = createStore<Socket | null>(null)

const getTasksFx = createEffect<string, TaskData[]>((workflowId) => {
  console.log(workflowId)
  return []
})

export const getTasks = createEvent<string>()

sample({ clock: getTasks, target: getTasksFx })

sample({ clock: getTasksFx.doneData, target: $tasks })

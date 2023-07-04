import { Button, Card, Grid, Link, Row, Text } from '@nextui-org/react'
import { Client } from 'aidbox-sdk'
import { useEffect, useState } from 'react'

import { socketIo } from './app'

interface TasksProps {
  appointmentId: string | null;
  config: {
    app_url: string;
    aidbox_url: string;
    aidbox_client: string;
    aidbox_secret: string;
  };
}

const task = {
  id: '51011594-107a-4673-9f4f-34dd2e0fcd94',
  txid: 10567,
  cts: '2023-07-03T08:49:47.662119+00:00',
  ts: '2023-07-03T08:49:47.662119+00:00',
  resource_type: 'AidboxTask',
  status: 'updated',
  resource: {
      'params': {
          event: 'awf.workflow.event/workflow-init'
      },
      'status': 'ready',
      'requester': {
          id: 'd92c3d26-81ea-44db-8aa9-7308fdf42e30',
          resourceType: 'AidboxWorkflow'
      },
      'definition': 'awf.workflow/decision-task',
      'workflow-definition': 'notification/appointment-created'
  }
}

interface Task {
  id: string;
  params: {
      event: string;
  },
  status: 'created' | 'ready' | 'requested' | 'in-progress' | 'done' | 'waiting';
  requester: {
      id: string;
      resourceType: 'AidboxWorkflow'
  },
  definition: 'awf.workflow/decision-task' | 'awf.task/wait' | 'notification/send-email';
  'workflow-definition': 'notification/appointment-created'
}

const WorkflowData = {
          params: {
              id: '910bfa00-d668-4a88-9955-d7bc4abbfed1'
          },
          status: 'in-progress',
          definition: 'notification/appointment-created',
          id: '4150821f-d0fc-4a91-a939-75c0f94aa4ae',
          resourceType: 'AidboxWorkflow',
          meta: {
              lastUpdated: '2023-07-03T10:21:14.199939Z',
              createdAt: '2023-07-03T10:21:14.199939Z',
              versionId: '10777'
          }
      }

interface Workflow {
  params: {
      id: string;
  },
  status: 'created' | 'in-progress' | 'done',
  definition: 'notification/appointment-created',
  id: string,
  resourceType: 'AidboxWorkflow',
  meta: {
      lastUpdated: string;
      createdAt: string;
      versionId: string;
  }
}

const green = '#17C964'
const gray = '#889096'

interface TaskData {
    title: 'workflow-init' | 'wait' | 'send-email',
    color: typeof green | typeof gray,
    body: any,
    id?: string;
}

const InitBody = () => {
  return (
    <Text>
      Aidbox &nbsp;
      <Link
        href='https://docs.aidbox.app/modules-1/workflow-engine/task/aidbox-predefined-tasks#awf.workflow-decision-task'
        target='_blank'
      >
        predefined decision task
      </Link> which is executed first in the context of the current workflow instance.
    </Text>
  )
}

const WaitBody = () => {
  return (
    <>
      <Text>
        Task that will wait for the indicated duration or until the indicated datetime. Used in workflow when need to be paused for some purposes.
      </Text>
      <Text css={{ m: 0 }}>
        <Link
          href='https://github.com/Aidbox/aidbox-sdk-js/blob/4c6d512588f57232a6d6faeabb0a682fede7bccf/examples/aidbox-workflow/index.ts#L116'
          target='_blank'
        >
          In our case
        </Link>, we wait till 2 days before the appointment.
      </Text>
      <Text weight='bold'>You can press the skip wait button to run the workflow further.</Text>
    </>
  )
}

const SendBody = () => {
  return (
    <Text>
      This task is configured by ourselves in&nbsp;
      <Link
        href='https://github.com/Aidbox/aidbox-sdk-js/blob/4c6d512588f57232a6d6faeabb0a682fede7bccf/examples/zen-project/zrc/notification.edn#L4'
        target='_blank'
      >
        the zen-project.
      </Link>
    </Text>
  )
}

const taskList = [
  {
    title: 'workflow-init',
    color: gray
  },
  {
    title: 'wait',
    body: '',
    color: gray
  },
  {
    title: 'send-email',
    body: '',
    color: gray
  }
] as Array<TaskData>

const greenStatuses = ['in-progress', 'done', 'ready']

const taskNameMap = {
  'awf.workflow/decision-task': 'workflow-init',
  'awf.task/wait': 'wait',
  'notification/send-email': 'send-email'
}

export const Tasks = ({ appointmentId, config }: TasksProps) => {
  const [tasksData, setTasks] = useState<TaskData[]>(taskList)
  const [workflowData, setWorkflow] = useState<Workflow | null>(null)

  const aidboxClient = new Client(config.aidbox_url, {
    username: config.aidbox_client,
    password: config.aidbox_secret
  })

  const getTasks = async (workflowId: string) => {
      const { data } = await aidboxClient.client.get<{entry: Array<{resource: Task}>}>(`AidboxTask?.requester.id=${workflowId}`)
      const updatedTasks = tasksData.map((item) => {
        const curTask = data.entry.find(({ resource }) => taskNameMap[resource.definition] === item.title)
        if (curTask) {
          const curColor: TaskData['color'] = greenStatuses.includes(curTask.resource.status) ? green : gray
          if (taskNameMap[curTask.resource.definition] === item.title) {
            return { ...item, color: curColor, id: curTask.resource?.id }
          }
        }

        return item
      })

      setTasks(updatedTasks)
  }

  useEffect(() => {
    if (appointmentId) {
      const fetchData = async () => {
        const { data } = await aidboxClient.client.get<{entry: Array<{resource: Workflow}>}>(`AidboxWorkflow?.params.id=${appointmentId}`)

        const workflow = data.entry[0]?.resource
        setWorkflow(workflow)
        getTasks(workflow.id)
      }
      fetchData().catch(console.error)
    }
  }, [appointmentId])

  useEffect(() => {
    socketIo.on('start_task', function (data) {
      setTimeout(() => getTasks(data), 1700)
    })

    return () => {
      socketIo.off()
    }
}, [])

const skipWaitTask = async (taskId: string) => {
  await aidboxClient.task.cancel(taskId)
}

return (
    workflowData && <Card>
      <Card.Body
        css={{ width: 'auto' }}
      >
        <Text
          h2
          css={{ 'width': 'auto', 'text-align': 'center' }}
        >Workflow
        </Text>
        <Grid.Container
          gap={2}
          wrap='wrap'
          alignItems='center'
          direction='column'
        >
          {tasksData.map((item, index) => (
            <Grid
              key={index}
              css={{ width: '95%' }}
            >
              <Card css={{ border: 'solid', borderColor: item.color, borderWidth: '2px' }}>
                <Card.Header css={{ justifyItems: 'flex-start', backgroundColor: item.color, width: 'auto' }}>
                  <Row
                    wrap='wrap'
                    justify='space-between'
                    align='center'
                  >
                    <Text b>{item.title + ' task'}</Text>
                    {item.title === 'wait' && item.color === green && <Button
                      onPress={() => {
                      if (item.id) {
                        skipWaitTask(item.id)
                      }
                      }}
                                                                      >Skip wait
                                                                      </Button>}
                  </Row>
                </Card.Header>
                <Card.Body css={{ py: '15px', width: 'auto' }}>
                  {item.title === 'workflow-init' && <InitBody />}
                  {item.title === 'wait' && <WaitBody />}
                  {item.title === 'send-email' && <SendBody />}
                </Card.Body>
              </Card>
            </Grid>
    ))}
        </Grid.Container>
      </Card.Body>
                    </Card>
  )
}

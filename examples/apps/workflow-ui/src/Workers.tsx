import { Card, Grid, Link, Row, Text } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { socketIo } from './app'

const green = '#17C964'
const gray = '#889096'

interface WorkerData {
  title: string,
  color: typeof green | typeof gray,
}

interface WorkersProps {
  appointmentId: string | null;
}

const FirstWorker = () => {
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

const SecondWorker = () => {
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

const ThirdWorker = () => {
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

const workerList = [
  {
    title: 'Worker 1',
    color: gray
  },
  {
    title: 'Worker 2',
    color: gray
  },
  {
    title: 'Worker 3',
    color: gray
  }
] as Array<WorkerData>

export const Workers = ({ appointmentId }: WorkersProps) => {
  const [workersData, setWorkersData] = useState<WorkerData[]>(workerList)

  const updateWorkerData = (data: number) => {
    const undatedWorkerData = workersData.map((item, index): WorkerData => {
      if (data > index) {
        return { ...item, color: green }
      }
      return item
    })

    setTimeout(() => setWorkersData(undatedWorkerData), 800)
  }

  useEffect(() => {
    socketIo.on('worker', function (data) {
      updateWorkerData(data)
    })

    return () => {
      socketIo.off()
    }
}, [])
console.log(workersData, 'workersData')
  return (
    appointmentId && <Card>
      <Card.Body
        css={{ width: 'auto' }}
      >
        <Text
          h2
          css={{ 'width': 'auto', 'text-align': 'center' }}
        >Workers
        </Text>
        <Grid.Container
          gap={2}
          wrap='wrap'
          alignItems='center'
          direction='column'
        >
          {workersData.map((item, index) => (
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
                    <Text b>{item.title}</Text>
                  </Row>
                </Card.Header>
                <Card.Body css={{ py: '15px', width: 'auto' }} >
                  {item.title === 'Worker 1' && <FirstWorker />}
                  {item.title === 'Worker 2' && <SecondWorker />}
                  {item.title === 'Worker 3' && <ThirdWorker />}
                </Card.Body>
              </Card>
            </Grid>
  ))}
        </Grid.Container>
      </Card.Body>
                     </Card>
  )
}

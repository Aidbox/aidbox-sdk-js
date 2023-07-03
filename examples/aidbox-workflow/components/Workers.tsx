import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { socketIo } from './WorkflowEngine'

const green = '#17C964'
const gray = '#889096'

interface WorkerData {
  title: string,
  color: typeof green | typeof gray,
}

interface WorkersProps {
  appointmentId: string | null;
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
        <Text h2 css={{ 'width': 'auto', 'text-align': 'center' }}>Workers</Text>
        <Grid.Container
          gap={2}
          wrap='wrap'
          alignItems='center'
          direction='column'
        >
          {workersData.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card>
                <Card.Body css={{ p: 0, height: '140px', width: '175px', backgroundColor: item.color }} />
                <Card.Footer css={{ justifyItems: 'flex-start' }}>
                  <Row wrap='wrap' justify='space-between' align='center'>
                    <Text b>{item.title}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
  ))}
        </Grid.Container>
      </Card.Body>
    </Card>
  )
}

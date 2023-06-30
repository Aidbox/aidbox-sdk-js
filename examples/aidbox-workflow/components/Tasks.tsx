import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { aidboxClient } from '../../shared/client'

interface TasksProps {
  appointmentId: string | null;
}

const taskList = [
  {
    title: 'Task 1',
    color: '#17C964'
  },
  {
    title: 'Task 2',
    color: '#889096'
  },
  {
    title: 'Task 3',
    color: '#889096'
  }
]

export const Tasks = ({ appointmentId }: TasksProps) => {
  const [tasksData, setTasks] = useState<Array<any>>([])
  const [workflowData, setWorkflow] = useState<any>(null)

  useEffect(() => {
    if (appointmentId) {
      const fetchData = async () => {
        const { data }: any = await aidboxClient.executeQuery('appointment-workflow', { appointmentId })
        const { tasks, workflow } = data.data[0].data
        console.log(data, 'tasks1111')
        setTasks(tasks)
        setWorkflow(workflow)
      }
      setTimeout(() => fetchData().catch(console.error), 200)
    }
  }, [appointmentId])
console.log(workflowData, 'workflow')
console.log(tasksData, 'tasks')
  return (
    workflowData && <Card>
      <Card.Body
        css={{ width: 'auto' }}
      >
        <Text h2 css={{ 'width': 'auto', 'text-align': 'center' }}>Workflow appointment-created</Text>
        <Grid.Container
          gap={2}
          wrap='wrap'
          alignItems='center'
          direction='column'
        >
          {tasksData.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable>
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

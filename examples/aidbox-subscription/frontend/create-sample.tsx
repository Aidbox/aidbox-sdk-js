import { Button, Card, Grid, Progress, Text } from '@nextui-org/react'
import { useState } from 'react'
import { Plus, TickSquare } from 'react-iconly'

import { aidboxClient } from '../backend/aidbox-client.js'

import { socketIo } from './app.js'

const Patient = {
  resourceType: 'Patient',
  active: true,
  name: [{
    use: 'official',
    family: 'Chalmers',
    given: ['Peter',
      'James']
  }],
  telecom: [{
    use: 'home'
  },
  {
    system: 'phone',
    value: '(03) 5555 6473',
    use: 'work',
    rank: 1
  },
  {
    system: 'phone',
    value: '(03) 3410 5613',
    use: 'mobile',
    rank: 2
  }],
  gender: 'male',
  birthDate: '1974-12-25',
  address: [{
    use: 'home',
    type: 'both',
    text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
    line: ['534 Erewhon St'],
    city: 'PleasantVille',
    district: 'Rainbow',
    state: 'Vic',
    postalCode: '3999',
    period: {
      start: '1974-12-25'
    }
  }]
}

const countProgressPercent = (arr: Array<string>) => arr.length / 10 * 100

export const CreateSample = () => {
  const [patientsCreated, setPatientsCreated] = useState(false)
  const [subsNotifications, setSubsNotifications] = useState<string[]>([])
  const [pushedPatients, setPushedPatients] = useState<string[]>([])
  const [pulledPatients, setPulledPatients] = useState<string[]>([])
  const [createdTasks, setCreatedTasks] = useState<string[]>([])

  const createPatients = async () => {
    await aidboxClient.bundleRequest(
      aidboxClient.transformToBundle(Array(10).fill(Patient), 'POST')
    )

    setPatientsCreated(true)
  }

  socketIo.on('subs_notification_patient', function (data) {
    if (!subsNotifications.includes(data)) {
      setSubsNotifications([...subsNotifications, data])
    }
  })

  socketIo.on('push_patient', function (data) {
    if (!pushedPatients.includes(data)) {
      setPushedPatients([...pushedPatients, data])
    }
  })

  socketIo.on('pull_patient', function (data) {
    if (!pulledPatients.includes(data)) {
      setPulledPatients([...pulledPatients, data])
    }
  })

  socketIo.on('create_task_patient', function (data) {
    if (!createdTasks.includes(data)) {
      setCreatedTasks([...createdTasks, data])
    }
  })

  return (
    <>
      <Text h2>Create Patient Subscription</Text>
      <Card>
        <Card.Body css={{ width: 'auto' }}>
          <Text css={{ 'text-align': 'center', 'margin-top': 0 }}>
            Create new patients to trigger subscriptions.
          </Text>
          {patientsCreated
            ? <>
              <Button
                color='success'
                icon={<TickSquare set='light' />}
              >Patients Created
              </Button>
              <Grid.Container
                gap={2}
                direction='column'
              >
                <Grid>
                  <Text>Subscriptions triggered</Text>
                  <Progress
                    color='primary'
                    value={countProgressPercent(subsNotifications)}
                  />
                </Grid>
                <Grid>
                  <Text>Events pushed to the queue</Text>
                  <Progress
                    color='primary'
                    value={countProgressPercent(pushedPatients)}
                  />
                </Grid>
                <Grid>
                  <Text>Events pulled from the queue</Text>
                  <Progress
                    color='primary'
                    value={countProgressPercent(pulledPatients)}
                  />
                </Grid>
                <Grid>
                  <Text>Task resources created</Text>
                  <Progress
                    color='primary'
                    value={countProgressPercent(createdTasks)}
                  />
                </Grid>
              </Grid.Container>
              </>
            : <Button
                onPress={createPatients}
                icon={<Plus set='light' />}
              >Create 10 patients
              </Button>
          }
        </Card.Body>
      </Card>
    </>
  )
}

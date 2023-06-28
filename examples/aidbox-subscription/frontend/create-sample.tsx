import { Button, Card, Container, Grid, Link, Progress, Text } from '@nextui-org/react'
import { Timeline } from 'antd'
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
      setSubsNotifications(subsNotifications => [...subsNotifications, data])
    }
  })

  socketIo.on('push_patient', function (data) {
    console.log(data)
    if (!pushedPatients.includes(data)) {
      setPushedPatients(pushedPatients => [...pushedPatients, data])
    }
  })

  socketIo.on('pull_patient', function (data) {
    if (!pulledPatients.includes(data)) {
      setPulledPatients(pulledPatients => [...pulledPatients, data])
    }
  })

  socketIo.on('create_task_patient', function (data) {
    if (!createdTasks.includes(data)) {
      setCreatedTasks(createdTasks => [...createdTasks, data])
    }
  })
console.log(pushedPatients, 'pushedPatients')
  return (
    <>
      <Text h2>Create Patient Subscription</Text>
      <Card>
        <Card.Body css={{ width: 'auto', display: 'block' }}>
          <Container
            css={{ width: 'auto' }}
            display='flex'
            wrap='wrap'
            direction='column'
          >
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
              {<Timeline
                style={{ marginTop: 30 }}
                items={[
                {
                  color: subsNotifications ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Subscriptions triggered</p>
                      <Progress
                        color='primary'
                        value={countProgressPercent(subsNotifications)}
                        striped
                      />
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/endpoints.ts#L137'
                        target='_blank'
                      >
                        See the code
                      </Link>
                    </>
                  )
                },
                {
                  color: pushedPatients ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Event pushed to the queue</p>
                      <Progress
                        color='primary'
                        value={countProgressPercent(pushedPatients)}
                        striped
                      />
                      <Link
                        block
                        href='http://localhost:9325/'
                        target='_blank'
                      >
                        Check the queue UI
                      </Link>
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/endpoints.ts#L11C3-L11C3'
                        target='_blank'
                      >
                        See the code
                      </Link>
                    </>
                  )
                },
                {
                  color: pulledPatients ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Events pulled from the queue</p>
                      <Progress
                        color='primary'
                        value={countProgressPercent(pulledPatients)}
                        striped
                      />
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/periodic-jobs.ts#L12'
                        target='_blank'
                      >
                        See the code
                      </Link>
                    </>
                  )
                },
                {
                  color: createdTasks ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Task resource created</p>
                      <p>In the end, we've created a Task resource as a simple example of business logic.</p>
                      <Progress
                        color='primary'
                        value={countProgressPercent(createdTasks)}
                        striped
                      />
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/workers.ts#L5'
                        target='_blank'
                      >
                        See the code
                      </Link>
                    </>
                  )
                },
                {
                  color: createdTasks ? 'green' : 'gray',
                  dot: <TickSquare set='light' />
                }
                ]}
              />}
            </>
            : <Button
                onPress={createPatients}
                icon={<Plus set='light' />}
              >
              Create 10 patients
            </Button>
          }
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}

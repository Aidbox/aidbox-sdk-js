import { Container, Text, Grid, Link } from '@nextui-org/react'
import { io } from 'socket.io-client'

import { CreateSample } from './create-sample.js'
import { UpdateSample } from './update-sample.js'

export const socketIo = io('http://localhost:8000', {
  auth: {
    token: 'json-web-token'
  }
})

export function App () {
  return (
    <Container
      display='flex'
      direction='column'
      alignContent='center'
    >
      <Text
        h1
        css={{ 'text-align': 'center' }}
      >Subscription sample
      </Text>
      <Text
        css={{ 'text-align': 'center', 'margin': 0 }}
        size='$xl'
      >
        Explore the integration of&nbsp;
        <Link
          href='https://docs.aidbox.app/api-1/reactive-api-and-subscriptions/subscriptions-1'
          target='_blank'
        >
          Aidbox subscriptions&nbsp;
        </Link>
        and queues.
      </Text>
      <Text
        css={{ 'text-align': 'center', 'mt': 5 }}
        size='$xl'
      >
        We've created some subscriptions on&nbsp;
        <Link
          href='https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/subscriptions.ts#L6'
          target='_blank'
        >
          our backend
        </Link>.
        Let's try to interact with two of them.
      </Text>
      <Grid.Container
        gap={2}
        justify='center'
        css={{ 'text-align': 'center' }}
      >
        <Grid
          xs={12}
          md={6}
          direction='column'
        >
          <CreateSample />
        </Grid>
        <Grid
          xs={6}
          md={6}
          direction='column'
        >
          <UpdateSample />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

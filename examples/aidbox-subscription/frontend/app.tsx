import { Container, Text, Grid } from '@nextui-org/react'
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
      <Text css={{ 'text-align': 'center' }}>
        Here you can see how Aidbox subscriptions work in conjunction with queues.
      </Text>
      <Text css={{ 'text-align': 'center' }}>
        We've created some subscriptions on our backend. Let's try to interact with two of them.
        Subscription on appointment updates and on patient create.
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

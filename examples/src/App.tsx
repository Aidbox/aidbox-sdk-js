import { Container, Grid, NextUIProvider, Text } from '@nextui-org/react'

import { SampleCard } from './components/SampleCard'

const sampleCardsInfo = [
  {
    title: 'Personal Health Record',
    body: 'It is a record of a patient\'s health information that you, as a patient, keep track of. It includes data about your health and other important details related to your care.',
    sampleLink: '/phr',
    readmeLink:
      'https://github.com/Aidbox/aidbox-sdk-js/tree/main/examples/personal-health-record/README.md'
  },
  {
    title: 'Complex Query',
    body: 'It is an example of how you can store complex queries in Aidbox.',
    sampleLink: '/complex-query',
    readmeLink:
      'https://github.com/Aidbox/aidbox-sdk-js/tree/main/examples/aidbox-querying/README.md'
  },
  {
    title: 'Aidbox Subscriptions',
    body: 'This example shows the complete flow of using Aidbox subscriptions in integration with a queue, starting from creating a subscription and ending with the implementation of the final business logic.',
    sampleLink: '/subscriptions',
    readmeLink:
      'https://github.com/Aidbox/aidbox-sdk-js/tree/main/examples/aidbox-subscription/README.md'
  }
]

export const App = () => {
  return (
    <NextUIProvider>
      <Container
        fluid
        display='flex'
        justify='center'
        css={{ mt: 40 }}
      >
        <Container
          css={{ 'text-align': 'center', 'max-width': '60%' }}
          display='flex'
        >
          <Text
            h3
            display='inline-block'
          ><span style={{ color: '#0072F5' }}>Hello!</span>&nbsp;Here, we have compiled examples that showcase the key features of Aidbox
            and provide guidance on how to utilize them effectively with our SDK.
          </Text>
        </Container>
        <Grid.Container
          gap={2}
          justify='center'
        >
          {sampleCardsInfo.map((item, index) => (
            <SampleCard
              {...item}
              key={index}
            />))}
        </Grid.Container>
      </Container>
    </NextUIProvider>
  )
}

export default App

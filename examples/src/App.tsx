import { Container, Grid, Text } from '@nextui-org/react'

import { SampleCard } from './components/SampleCard'

const sampleCardsInfo = [
  {
    title: 'Personal Health Record',
    body: 'Some PHR description Some PHR description Some PHR description Some PHR description Some PHR description',
    sampleLink: '/phr',
    readmeLink: 'https://github.com/Aidbox/aidbox-sdk-js/tree/main/personal-health-record'
  },
  {
    title: 'Complex Query',
    body: 'Some PHR description Some PHR description Some PHR description Some PHR description Some PHR description',
    sampleLink: '/complex-query',
    readmeLink: 'https://github.com/Aidbox/aidbox-sdk-js/tree/main/examples/how-to-make-aidbox-complex-query'
  },
  {
    title: 'Aidbox Subscriptions',
    body: 'Some PHR description Some PHR description Some PHR description Some PHR description Some PHR description',
    sampleLink: '/subscriptions',
    readmeLink: 'https://github.com/Aidbox/aidbox-sdk-js/tree/main/examples/how-to-react-on-aidbox-data-changes'
  }
]

export const App = () => {
  return (
    <Container
      fluid
      justify='center'
      css={{ mt: 40 }}
    >
      <Text
        h1
        size={40}
        css={{ 'm': 0, 'text-align': 'center' }}
      >
        Aidbox SDK Samples
      </Text>
      <Grid.Container
        gap={2}
        justify='center'
      >
        { sampleCardsInfo.map((item) => {
          return SampleCard(item)
        })}
      </Grid.Container>
    </Container>
  )
}

export default App

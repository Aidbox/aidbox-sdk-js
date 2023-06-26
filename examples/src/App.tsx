import { Container, Grid, NextUIProvider, Text } from '@nextui-org/react'

import { SampleCard } from './components/SampleCard'

const sampleCardsInfo = [
  {
    title: 'Personal Health Record',
    body: 'Some PHR description Some PHR description Some PHR description Some PHR description Some PHR description',
    sampleLink: '/phr',
    readmeLink:
      'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/personal-health-record/README.md'
  },
  {
    title: 'Complex Query',
    body: 'Some PHR description Some PHR description Some PHR description Some PHR description Some PHR description',
    sampleLink: '/complex-query',
    readmeLink:
      'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/how-to-make-aidbox-complex-query/README.md'
  },
  {
    title: 'Aidbox Subscriptions',
    body: 'Some PHR description Some PHR description Some PHR description Some PHR description Some PHR description',
    sampleLink: '/subscriptions',
    readmeLink:
      'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/how-to-react-on-aidbox-data-changes/README.md'
  }
]

export const App = () => {
  return (
    <NextUIProvider>
      <Container
        fluid
        justify='center'
        css={{ mt: 40 }}
      >
        <Grid.Container
          gap={2}
          justify='center'
        >
          {sampleCardsInfo.map((item, index) => (
            <SampleCard
              {...item}
              key={index}
            />
          ))}
        </Grid.Container>
      </Container>
    </NextUIProvider>
  )
}

export default App

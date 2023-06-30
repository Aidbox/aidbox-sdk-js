import { Card, Grid, Row, Text } from '@nextui-org/react'

const workerList = [
  {
    title: 'Worker  1',
    color: '#17C964'
  },
  {
    title: 'Worker  2',
    color: '#889096'
  },
  {
    title: 'Worker 3',
    color: '#889096'
  }
]

export const Workers = () => {
  return (
    <Card>
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
          {workerList.map((item, index) => (
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

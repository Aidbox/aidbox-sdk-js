import { Card, Text } from '@nextui-org/react'

import { MermaidChart } from './mermaid'

const mermaidDefinition = `
flowchart LR
    A[Init workflow] 
    -->|Get appointment<br>Find target date<br>Execute wait task| B[Wait till 2 days before appointment]
    B --> |Get Encouter<br>Execute send-email task|C[Task send email]
    C --> D[fa:fa-at Get patient's telecom]
    C --> E[fa:fa-info-circle Create Encounter<br>and Communication]
    C --> F[fa:fa-poll-h Generate depression form]
    D --> G[fa:fa-envelope-open-text Send email to the patient]
    E --> G
    F --> G`

export const WorkflowSchema = () => {
  return (
    <Card css={{ my: '20px' }}>
      <Card.Body
        css={{ width: 'auto' }}

      >
        <Text
          h2
          css={{ textAlign: 'center' }}
        >Workflow Schema
        </Text>
        <MermaidChart chartDefinition={mermaidDefinition} />
      </Card.Body>
    </Card>
  )
}

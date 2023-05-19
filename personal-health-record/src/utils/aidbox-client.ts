import { Client } from 'aidbox-sdk'

export const client = new Client('https://genaproject.aidbox.app', {
  username: import.meta.env.VITE_APP_CLIENT,
  password: import.meta.env.VITE_APP_SECRET
})

client.client.post('/fhir/$import', {
  "id": "synthea",
  "contentEncoding": "gzip",
  "inputs": [
    {
      "resourceType": "Encounter",
      "url": "https://storage.googleapis.com/aidbox-public/synthea/100/Encounter.ndjson.gz"
    },
    {
      "resourceType": "Organization",
      "url": "https://storage.googleapis.com/aidbox-public/synthea/100/Organization.ndjson.gz"
    },
    {
      "resourceType": "Patient",
      "url": "https://storage.googleapis.com/aidbox-public/synthea/100/Patient.ndjson.gz"
    },
    {
      "resourceType": "Condition",
      "url": "https://storage.googleapis.com/aidbox-public/synthea/100/Condition.ndjson.gz"
    },
    {
      "resourceType": "Immunization",
      "url": "https://storage.googleapis.com/aidbox-public/synthea/100/Immunization.ndjson.gz"
    },
    {
      "resourceType": "Observation",
      "url": "https://storage.googleapis.com/aidbox-public/synthea/100/Observation.ndjson.gz"
    }
  ]
})
import { readFile } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import { aidboxClient } from '../shared/client.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const data = [
  {
    resourceType: 'Encounter',
    url: 'https://storage.googleapis.com/aidbox-public/synthea/100/Encounter.ndjson.gz'
  },
  {
    resourceType: 'Organization',
    url: 'https://storage.googleapis.com/aidbox-public/synthea/100/Organization.ndjson.gz'
  },
  {
    resourceType: 'Patient',
    url: 'https://storage.googleapis.com/aidbox-public/synthea/100/Patient.ndjson.gz'
  },
  {
    resourceType: 'Condition',
    url: 'https://storage.googleapis.com/aidbox-public/synthea/100/Condition.ndjson.gz'
  },
  {
    resourceType: 'Immunization',
    url: 'https://storage.googleapis.com/aidbox-public/synthea/100/Immunization.ndjson.gz'
  },
  {
    resourceType: 'Observation',
    url: 'https://storage.googleapis.com/aidbox-public/synthea/100/Observation.ndjson.gz'
  }
]

const main = async () => {
  const env: Record<string, string> = {}
  await readFile(resolve(__dirname, '..', '.env'))
    .then((b) => {
      b.toString().replace(/(\w+)=(.+)/g, ($0, $1, $2) => { env[$1] = $2; return $0 })
    }).catch(() => null)
  if (!env.AIDBOX_BASE_URL) {
    console.error('Please run `npm run setup` and check that .env file exist in /examples folder')
    return
  }
  const ids = data.map((item, index) => ({ resource: item.resourceType, id: 'synthea_' + index }))
  console.log('Clean up resources...')
  const deleteResult = await aidboxClient.rawSQL('truncate encounter; truncate organization; truncate patient; truncate condition; truncate immunization; truncate observation').catch(e => e.response.data)
  if (deleteResult.message) {
    console.log('Successfully clean up')
  } else {
    console.dir(deleteResult)
    return
  }
  await Promise.all(
    data.map((item, index) =>
      aidboxClient.client.post('/fhir/$import', {
        id: 'synthea_' + index,
        contentEncoding: 'gzip',
        inputs: [item]
      })
    )
  )
  let notFinished = [...ids]

  while (notFinished.length > 0) {
    for (const item of notFinished) {
      const result = await aidboxClient.client.get(`/BulkImportStatus/${item.id}`)
      if (result.data.status === 'finished') {
        notFinished = notFinished.filter(({ id }) => id !== item.id)
        console.log(`${item.resource} loading finished`)
      }
    }
  }
  console.log('All resources loaded')
  console.log('Create indexes for Aidbox Complex Query Example')

  const APPOINTMENT_START_INDEX =
        "create index if not exists appointment_start on appointment ((appointment.resource #>> '{ start }'));"

  const APPOINTMENT_PRACTITIONER_ID_INDEX = `
  create index if not exists appointment_actor_practitioner on appointment (
      (jsonb_path_query_first(
          appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")'
      ) #>> '{ actor, id }')
  );`

  const QUERY = `
  select practitioner.resource as practitioner,
  (select percentile_disc(0.5) within group
      (order by (select count(appointment)
      from appointment
          where jsonb_path_query_first(appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")') #>> '{ actor, id }' = practitioner.id
          and date_part('week', (appointment.resource #>> '{ start }')::timestamp) = date_part('week',interval_date)
      ))
  from generate_series(now() - interval '3 months' , now(), interval '1 week') as interval_date
  ) as appointments_for_three_month,
  (select count(appointment) from appointment
      where (appointment.resource #>> '{ start }') between date_trunc('week', now() + '1 week')::text and date_trunc('week', now() + '2 week')::text
      and jsonb_path_query_first(appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")') #>> '{ actor, id }' = practitioner.id
  ) as next_week_appointments
  from practitioner limit 10 offset {{params.offset}};`
  const COUNT_QUERY = 'select count(*) from practitioner'

  const queryOptions = {
    'params': {
      offset: {
        default: 0,
        type: 'number',
        isRequired: false
      }
    },
    'query': QUERY,
    'count-query': COUNT_QUERY
  }
  await Promise.all([
    // Creating index on field "start"
    aidboxClient.rawSQL(APPOINTMENT_START_INDEX),

    // Creating index on practitioner id
    aidboxClient.rawSQL(APPOINTMENT_PRACTITIONER_ID_INDEX),

    // Saving query as resource to call it later
    aidboxClient.createQuery('dashboard-query', queryOptions)
  ]).catch(e => console.log(e.response.data))
}

main()

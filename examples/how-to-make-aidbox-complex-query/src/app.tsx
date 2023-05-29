import { Loading, Pagination, Table } from '@nextui-org/react'
import { ExecuteQueryResponseWrapper } from 'aidbox-sdk'
import { Practitioner } from 'aidbox-sdk/aidbox-types'
import { useCallback, useEffect, useState } from 'react'

import { aidboxClient } from './aidbox-client'

import './app.css'

const columns: { key: keyof Item, label: string }[] = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'next_week_appointments',
    label: 'Appointments Next Week'
  },
  {
    key: 'appointments_for_three_month',
    label: 'Three Month Average'
  }
]

type Item = {
  id: string
  name?: string
  next_week_appointments?: number,
  appointments_for_three_month?: number,
}

interface ResponseItem {
  practitioner: Practitioner,
  appointments_for_three_month: number,
  next_week_appointments: number
}

type Response = ResponseItem[]

const APPOINTMENT_START_INDEX = 'create index on appointment ((appointment.resource #>> \'{ start }\'));'

const APPOINTMENT_PRACTITIONER_ID_INDEX = `
    create index on appointment (
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

export function App () {
  const [rows, setRows] = useState<Item[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>()
  const [page, setPage] = useState<number>(1)
  const [initialized, setInitialized] = useState(false)

  const initializeQuery = useCallback(() => {
    return Promise.all([

      // Creating index on field "start"
      aidboxClient.rawSQL(APPOINTMENT_START_INDEX),

      // Creating index on practitioner id
      aidboxClient.rawSQL(APPOINTMENT_PRACTITIONER_ID_INDEX),

      // Saving query as resource to call it later
      aidboxClient.createQuery('dashboard-query', queryOptions)
    ])
  }, [])

  const setData = useCallback((rawData: ExecuteQueryResponseWrapper<Response>) => {
    const mappedData = rawData.data.map((resource) => ({
      id: resource.practitioner.id ?? '',
      name: resource.practitioner?.name?.[0].family + ' ' + (resource.practitioner?.name?.[0]?.given?.[0] ?? ''),
      appointments_for_three_month: resource.appointments_for_three_month,
      next_week_appointments: resource.next_week_appointments
    }))
    setTotal(rawData.total)
    setRows(mappedData)
    setLoading(false)
  }, [])

  const getData = useCallback(async () => {
    setLoading(true)
    const response = await aidboxClient.executeQuery<Response>('dashboard-query', { offset: 10 * (page - 1) })
    setData(response.data)
  }, [page, setData])

  useEffect(() => {
    if (!initialized) {
      initializeQuery()
        .finally(() => setInitialized(true))

      return
    }

    getData()
      .catch((e) => {
        console.error(e)
      })
  }, [getData, initializeQuery, initialized])

  if (!initialized) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Loading>Loading...</Loading>
      </div>
    )
  }

  return (
    <div className='container'>
      <Table
        aria-label='Doctor Employment Table'
        css={{
          height: 'auto',
          minHeight: '10rem',
          minWidth: '100%'
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              align='start'
              key={column.key}
            >{column.label}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body
          items={rows ?? []}
          loadingState={loading ? 'loading' : undefined }
        >
          {(row) => (
            <Table.Row key={row.id}>
              {(columnKey) => <Table.Cell>{row?.[columnKey as keyof Item] ?? ''}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      {total && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            total={Math.ceil(total / 10)}
            initialPage={1}
            onChange={setPage}
          />
        </div>
      )}
    </div>
  )
}

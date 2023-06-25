import { Loading, Pagination, Table } from '@nextui-org/react'
import { ExecuteQueryResponseWrapper } from 'aidbox-sdk'
import { Practitioner } from 'aidbox-sdk/types'
import { useCallback, useEffect, useState } from 'react'

import { aidboxClient } from './aidbox-client.js'

const columns: { key: keyof Item; label: string }[] = [
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
  id: string;
  name?: string;
  next_week_appointments?: number;
  appointments_for_three_month?: number;
};

interface ResponseItem {
  practitioner: Practitioner;
  appointments_for_three_month: number;
  next_week_appointments: number;
}

type Response = ResponseItem[];

export function App () {
  const [rows, setRows] = useState<Item[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>()
  const [page, setPage] = useState<number>(1)

  const setData = useCallback(
    (rawData: ExecuteQueryResponseWrapper<Response>) => {
      const mappedData = rawData.data.map((resource) => ({
        id: resource.practitioner.id ?? '',
        name:
          resource.practitioner?.name?.[0].family +
          ' ' +
          (resource.practitioner?.name?.[0]?.given?.[0] ?? ''),
        appointments_for_three_month: resource.appointments_for_three_month,
        next_week_appointments: resource.next_week_appointments
      }))
      setTotal(rawData.total)
      setRows(mappedData)
      setLoading(false)
    },
    []
  )

  const getData = useCallback(async () => {
    setLoading(true)
    const response = await aidboxClient.executeQuery<Response>(
      'dashboard-query',
      { offset: 10 * (page - 1) }
    )
    setData(response.data)
  }, [page, setData])

  useEffect(() => {
    getData().catch((e) => {
      console.error(e)
    })
  }, [getData])

  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Loading>Loading...</Loading>
      </div>
    )
  }

  return (
    <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
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
            >
              {column.label}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body
          items={rows ?? []}
          loadingState={loading ? 'loading' : undefined}
        >
          {(row) => (
            <Table.Row key={row.id}>
              {(columnKey) => (
                <Table.Cell>{row?.[columnKey as keyof Item] ?? ''}</Table.Cell>
              )}
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

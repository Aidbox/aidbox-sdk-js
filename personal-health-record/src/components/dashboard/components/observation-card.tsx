import { Observation } from 'aidbox-sdk/aidbox-types'
import { useEffect, useMemo, useState } from 'react'

import { CardWrapper } from '../../../shared/card'
import { Divider } from '../../../shared/divider/divider'
import { client } from '../../../utils/aidbox-client'
import { formatDate } from '../../../utils/format-date'

import styles from './workspace.module.css'

export function ObservationsCard (): JSX.Element {
  const searchParams = new URLSearchParams(document.location.search)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const patient_id = searchParams.get('id')
  const [observations, setObservations] = useState<Observation[]>()

  const codes = useMemo(() => [
    '8302-2',
    '55284-4',
    '3141-9',
    '8287-5',
    '39156-5',
    '9279-1',
    '8310-5',
    '9291-6',
    '8867-4',
    '2710-2',
    '3140-1',
    '15430-2',
    '15199-3',
    '26478-8'
  ], [])

  useEffect(() => {
    client
      .getResources('Observation')
      .where('patient', `Patient/${patient_id}`)
      .where('code', codes)
      .count(3)
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTotal(response.total)
        setObservations(response.entry.map((i) => i.resource))
        setLoading(false)
      })
  }, [codes, patient_id])

  const action = {
    label: 'Show more',
    onClick: () => ({})
  }

  const bottomActions = total > 3 ? action : undefined
  const title = 'Observation' + (total > 0 ? `(${total})` : '')

  return (
    <CardWrapper
      title={title}
      loading={loading}
      empty={observations?.length === 0}
      bottomActions={bottomActions}
    >
      {observations?.map((observation, index) => (
        <>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            key={observation.id}
          >
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '500', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{observation.code.text}</p>
              <p className={styles.cardSmallText}>{formatDate(observation.meta?.lastUpdated ?? '')}</p>
            </div>
            <p style={{ textTransform: 'capitalize', fontSize: '0.8rem', fontWeight: '600', display: 'flex', justifyContent: 'flex-end' }}>
              {observation.value && Object.entries(observation.value).map(([, element], key) => (
                <span key={key}>{element.value}{element.code}</span>
              ))}
            </p>
          </div>

          {index !== (observations?.length ?? 0) - 1 && <Divider verticalMargin={'0.5rem'} />}
        </>

      ))}
    </CardWrapper>

  )
}

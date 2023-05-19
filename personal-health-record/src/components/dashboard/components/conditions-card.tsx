import { Condition } from 'aidbox-sdk/aidbox-types'
import { useEffect, useState } from 'react'

import { CardWrapper } from '../../../shared/card'
import { Divider } from '../../../shared/divider/divider'
import { client } from '../../../utils/aidbox-client'
import { formatDate } from '../../../utils/format-date'

import styles from './workspace.module.css'

export function ConditionsCard (): JSX.Element {
  const [conditions, setConditions] = useState<Condition[]>([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState<number>(0)
  const searchParams = new URLSearchParams(document.location.search)
  const patient_id = searchParams.get('id')

  useEffect(() => {
    client.getResources('Condition')
      .where('patient', `Patient/${patient_id}`)
      .count(3)
      .then((response) => {
        setConditions(response.entry.map((condition) => condition.resource))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTotal(response.total)
        setLoading(false)
      })
  }, [patient_id])

  if (loading) {
    return <div>Loading</div>
  }

  const action = {
    label: 'Show more',
    onClick: () => ({})
  }

  const bottomActions = total > 3 ? action : undefined
  const title = 'Diagnosis' + (total > 0 ? `(${total})` : '')

  return (
    <CardWrapper
      title={title}
      empty={total === 0}
      loading={loading}
      bottomActions={bottomActions}
    >
      {conditions.map((condition, index) => (
        <>
          <div
            key={condition.id}
            style={{ display: 'grid', gridTemplateColumns: '5fr 1fr', alignItems: 'center' }}
          >
            <p style={{ fontSize: '1rem', fontWeight: '500', maxWidth: '90%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{condition.code?.text}</p>
            <p style={{ textTransform: 'capitalize', fontSize: '0.8rem', fontWeight: '500' }}>{condition.clinicalStatus?.coding?.[0].code}</p>
            <p className={styles.cardSmallText}>{formatDate(condition.recordedDate ?? '')}</p>
            <p className={styles.cardSmallText}>{condition.severity?.coding?.[0].display}</p>
          </div>

          {index !== conditions.length - 1 && <Divider verticalMargin={'0.5rem'} />}
        </>
      ))}
    </CardWrapper>
  )
}

import { AllergyIntolerance } from 'aidbox-sdk/types'
import cx from 'classnames'
import { useContext, useEffect, useState } from 'react'

import { ClientContext } from '../context'
import { CardWrapper } from '../shared/card'
import { Divider } from '../shared/divider/divider'
import { formatDate, kebabToFriendlyString } from '../utils'

import styles from './workspace.module.css'

export function AllergiesIntoleranceCard ({ id: patient_id }: { id: string }) {
  const { client } = useContext(ClientContext)
  const [allergies, setAllergies] = useState<AllergyIntolerance[]>([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    client
      .getResources('AllergyIntolerance')
      .where('patient', `Patient/${patient_id}`)
      .count(3)
      .then((response) => {
        if (response.entry?.length > 0) {
          setAllergies(response.entry?.map((allergy) => allergy.resource))
          setTotal(response.total)
        }
        setLoading(false)
      })
  }, [patient_id])

  const title = 'Allergy' + (total > 3 ? `(${total})` : '')
  const action = {
    label: 'Show more',
    onClick: () => ({})
  }

  const bottomActions = total > 3 ? action : undefined

  return (
    <CardWrapper
      title={title}
      bottomActions={bottomActions}
      loading={loading}
      empty={total === 0}
    >
      {allergies.map((allergy, index) => (
        <div key={allergy.id}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 1fr',
              alignItems: 'center'
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                maxWidth: '90%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                letterSpacing: '-0.05em'
              }}
            >
              {allergy.code?.text}
            </p>

            <p
              className={cx(styles.cardSmallText, {
                [styles.capitalize]: true
              })}
            >
              {kebabToFriendlyString(
                allergy.clinicalStatus?.coding?.[0].code ?? ''
              )}
            </p>

            <p className={styles.cardSmallText}>
              {formatDate(allergy.recordedDate ?? '')}
            </p>

            <p
              className={cx(styles.cardSmallText, {
                [styles.capitalize]: true,
                [styles.allergyCriticalityHigh]: allergy.criticality === 'high',
                [styles.allergyCriticalityLow]: allergy.criticality === 'low'
              })}
            >
              {allergy.criticality}
            </p>
          </div>

          {index !== allergies?.length - 1 && (
            <Divider verticalMargin={'0.5rem'} />
          )}
        </div>
      ))}
    </CardWrapper>
  )
}

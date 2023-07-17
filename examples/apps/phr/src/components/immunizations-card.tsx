import { Immunization } from 'aidbox-sdk/types'
import cx from 'classnames'
import { useContext, useEffect, useState } from 'react'

import { ClientContext } from '../context'
import { CardWrapper } from '../shared/card'
import { Divider } from '../shared/divider/divider'
import { formatDate, kebabToFriendlyString } from '../utils'

import styles from './workspace.module.css'

export function ImmunizationsCard ({ id: patient_id }: { id: string }) {
  const { client } = useContext(ClientContext)

  const [immunizations, setImmunizations] = useState<Immunization[]>([])
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .getResources('Immunization')
      .where('patient', `Patient/${patient_id}`)
      .count(3)
      .then((response) => {
        setImmunizations(
          response.entry?.map((allergy) => allergy.resource) || []
        )
        setTotal(response.total)
        setLoading(false)
      })
  }, [patient_id])

  const title = 'Immunizations' + (total > 3 ? `(${total})` : '')
  const action = {
    label: 'Show more',
    onClick: () => ({})
  }

  const bottomActions = total > 3 ? action : undefined

  return (
    <CardWrapper
      title={title}
      empty={total === 0}
      loading={loading}
      bottomActions={bottomActions}
    >
      {immunizations.map((immunization, index) => (
        <div key={immunization.id}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 1fr',
              alignItems: 'center'
            }}
          >
            <p
              title={immunization.vaccineCode?.text}
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
              {immunization.vaccineCode?.text}
            </p>

            <p
              className={cx(styles.cardSmallText, {
                [styles.capitalize]: true
              })}
            >
              {kebabToFriendlyString(immunization.status)}
            </p>

            <p className={styles.cardSmallText}>
              {formatDate(immunization.meta?.lastUpdated ?? '')}
            </p>
          </div>

          {index !== immunizations.length - 1 && (
            <Divider verticalMargin={'0.5rem'} />
          )}
        </div>
      ))}
    </CardWrapper>
  )
}

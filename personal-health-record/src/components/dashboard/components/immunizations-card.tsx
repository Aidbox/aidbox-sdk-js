import { Immunization } from 'aidbox-sdk/aidbox-types'
import cx from 'classnames'
import { useEffect, useState } from 'react'

import { CardWrapper } from '../../../shared/card'
import { Divider } from '../../../shared/divider/divider'
import { client } from '../../../utils/aidbox-client'
import { formatDate } from '../../../utils/format-date'
import { kebabToFriendlyString } from '../../../utils/kebab-to-friendly-string'

import styles from './workspace.module.css'

export function ImmunizationsCard () {
  const [immunizations, setImmunizations] = useState<Immunization[]>([])
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const searchParams = new URLSearchParams(document.location.search)
  const patient_id = searchParams.get('id')

  useEffect(() => {
    client.getResources('Immunization')
      .where('patient', `Patient/${patient_id}`)
      .count(3)
      .then((response) => {
        setImmunizations(response.entry.map((allergy) => allergy.resource))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
        <>
          <div
            key={immunization.id}
            style={{ display: 'grid', gridTemplateColumns: '5fr 1fr', alignItems: 'center' }}
          >
            <p
              title={immunization.vaccineCode?.text}
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                maxWidth: '90%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
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

            <p className={styles.cardSmallText}>{formatDate(immunization.meta?.lastUpdated ?? '')}</p>
          </div>

          {index !== immunizations.length - 1 && <Divider verticalMargin={'0.5rem'} />}
        </>
      ))}
    </CardWrapper>
  )
}

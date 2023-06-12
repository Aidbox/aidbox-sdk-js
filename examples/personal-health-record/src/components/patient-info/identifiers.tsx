import { Patient } from 'aidbox-sdk/aidbox-types'

import styles from './patient-info.module.css'

interface Props {
  identifiers: Patient['identifier']
}

export function Identifiers ({ identifiers }: Props) {
  return (
    <div>
      <p className={styles.sectionTitle}>
        Identifiers
      </p>

      <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {identifiers?.map((identifier: any, index: number) => (
          <div key={index}>
            {identifier.type?.coding?.map((code: any, index: number) => (
              <div key={index}>
                <p style={{ fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.1rem' }}>
                  {code.display}
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.2rem' }}>
                  {identifier.value}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

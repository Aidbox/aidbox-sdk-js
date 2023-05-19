import { Patient } from 'aidbox-sdk/aidbox-types'

import styles from './layout.module.css'

interface Props {
  patient: Patient
}

export function Contacts ({ patient }: Props) {
  return (
    <div>
      <p className={styles.sectionTitle}>
        Contacts
      </p>

      <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {patient.telecom?.map((telecom, index) => (
          <div
            key={index}
          >
            <p style={{ fontSize: '0.9rem', fontWeight: '500', textTransform: 'capitalize', lineHeight: '1.1rem' }}>{telecom.system}</p>
            <p style={{ fontSize: '0.9rem' }}>{telecom.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

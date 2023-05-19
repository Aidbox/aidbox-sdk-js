import { Patient } from 'aidbox-sdk/aidbox-types'

import { formatDate } from '../../utils/format-date'
import { transformAddress } from '../../utils/transform-address'
import { transformName } from '../../utils/transform-name'

import styles from './layout.module.css'

interface Props {
  patient: Patient
}

export function PatientInfo ({ patient }: Props) {
  return (
    <div className={styles.patientGeneralInfo}>
      <p className={styles.sectionTitle}>{transformName(patient.name)}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '0.5rem' }}>
        {patient.birthDate && <p className={styles.birthDate}>{formatDate(patient.birthDate)}</p>}
        {patient.gender && <p className={styles.gender}>{patient.gender}</p>}
      </div>

      {patient.address && <p className={styles.address}>{transformAddress(patient.address)}</p>}
    </div>
  )
}

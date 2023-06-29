import { Loading } from '@nextui-org/react'
import { Patient } from 'aidbox-sdk/types'

import Logo from '../../assets/logo.svg'
import { Divider } from '../../shared/divider/divider'
import { formatDate, transformName, transformAddress } from '../../utils'

import { Contacts } from './contacts'
import { Identifiers } from './identifiers'
import styles from './patient-info.module.css'

function View ({ patient }: { patient: Patient }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className={styles.patientGeneralInfo}>
        <p className={styles.sectionTitle}>{transformName(patient.name)}</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            marginTop: '0.5rem'
          }}
        >
          {patient.birthDate && (
            <p className={styles.birthDate}>{formatDate(patient.birthDate)}</p>
          )}
          {patient.gender && <p className={styles.gender}>{patient.gender}</p>}
        </div>

        {patient.address && (
          <p className={styles.address}>{transformAddress(patient.address)}</p>
        )}
      </div>
      <Divider />
      <Contacts patient={patient} />
      <Divider />
      <Identifiers identifiers={patient.identifier} />
    </div>
  )
}

interface PatientInfoProps {
  patient?: Patient;
}

export const PatientInfo = ({ patient }: PatientInfoProps) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <Logo />
    </div>
    {!patient?.id ? <Loading /> : <View patient={patient} />}
  </div>
)

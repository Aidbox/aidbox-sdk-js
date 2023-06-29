import { Patient } from 'aidbox-sdk/types'

import { AllergiesIntoleranceCard } from './allergies-intolerance-card'
import { AppointmentsCard } from './appointments-card'
import { ClinicalVitals } from './clinical-vitals'
import { ConditionsCard } from './conditions-card'
import { ImmunizationsCard } from './immunizations-card'
import { ObservationsCard } from './observation-card'

interface Props {
  patient: Patient;
}

export function Workspace ({ patient }: Props) {
  return (
    <>
      <h3 style={{ padding: '2rem 3rem', fontSize: '1.8rem' }}>
        Welcome, {patient?.name?.[0]?.given?.[0]}
      </h3>

      <div style={{ flexDirection: 'column', gap: '1rem', display: 'flex' }}>
        <div
          style={{
            display: 'grid',
            gridColumnGap: '3rem',
            gridRowGap: '2rem',
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: '0 3rem'
          }}
        >
          <ConditionsCard id={patient.id!} />
          <AppointmentsCard id={patient.id!} />
          <ObservationsCard id={patient.id!} />
          <AllergiesIntoleranceCard id={patient.id!} />
          <ImmunizationsCard id={patient.id!} />
        </div>
        <div style={{ padding: '0 3rem' }}>
          <ClinicalVitals id={patient.id!} />
        </div>
      </div>
    </>
  )
}

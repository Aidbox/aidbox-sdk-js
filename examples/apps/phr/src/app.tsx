import { Client } from 'aidbox-sdk'
import { Patient } from 'aidbox-sdk/types'
import { useEffect, useState } from 'react'

import { PatientInfo } from './components/patient-info'
import { Workspace } from './components/workspace'
import { ClientContext } from './context'

import './index.css'

export function App ({ client }: { client: Client }) {
  const [patient, setPatient] = useState<Patient>({})

  const searchParams = new URLSearchParams(document.location.search)
  const patient_id =
    searchParams.get('id') || 'fd22f7f8-70a6-4d45-b818-8be4eb2ed0ea'

  useEffect(() => {
    if (patient_id) {
      client.getResource('Patient', patient_id).then((response) => {
        if (response?.id) {
          setPatient(response)
        }
      })
    }
  }, [patient_id])

  return (
    <ClientContext.Provider value={{ client }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <PatientInfo patient={patient} />
        <div
          style={{
            padding: '2rem 0',
            background: '#FAFBFD',
            width: 'calc(100% - 300px)'
          }}
        >
          <Workspace patient={patient} />
        </div>
      </div>
    </ClientContext.Provider>
  )
}

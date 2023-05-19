import { Patient } from 'aidbox-sdk/aidbox-types'
import { useEffect, useState } from 'react'

import { client } from '../../utils/aidbox-client'
import { Layout } from '../layout'

import { Workspace } from './components'

export function Dashboard () {
  const [patient, setPatient] = useState<Patient>({ id: 'fd22f7f8-70a6-4d45-b818-8be4eb2ed0ea' })

  const searchParams = new URLSearchParams(document.location.search)
  const patient_id = searchParams.get('id') || 'fd22f7f8-70a6-4d45-b818-8be4eb2ed0ea'

  useEffect(() => {
    if (!patient_id) {
      return
    }

    client.getResource('Patient', patient_id).then((response) => {
      if ((response instanceof Error)) return

      setPatient(response)
    })
  }, [patient_id])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Layout patient={patient} />
      <div style={{ padding: '2rem 0', background: '#FAFBFD', width: 'calc(100% - 300px)' }}>
        <Workspace patient={patient} />
      </div>
    </div>
  )
}

import { Client } from 'aidbox-sdk'

const aidbox = new Client(
  'https://genaproject.aidbox.app/',
  { username: 'client-name', password: 'secret' }
)

const patient = await aidbox.getResources('Patient')

console.log(patient)

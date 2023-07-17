import { Client } from 'aidbox-sdk'

const aidbox = new Client(
  'https://genaproject.aidbox.app/',
  { username: 'client-name', password: 'secret' }
)

const patient = await aidbox.getResource('Patient', '03cb8799-bfbd-40fa-9ea8-96114cf1fec1')

console.log(patient)

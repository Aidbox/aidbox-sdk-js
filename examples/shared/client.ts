import { Client } from 'aidbox-sdk'

import { config } from './config.js'

export const aidboxClient = new Client(`${config.url}`, {
  username: config.client,
  password: config.secret
})

import { Client } from 'aidbox-sdk'
import { io } from 'socket.io-client'

import config from './config.json'

export const aidboxClient = new Client(config.aidbox_url, {
  username: config.aidbox_client,
  password: config.aidbox_secret
})

export const socketIo = io(config.app_url, {
  auth: {
    token: 'json-web-token'
  }
})

socketIo.on('start_task', function (data) {
  setTimeout(() => getTasks(data), 1000)
})

socketIo.on('sent_email', function () {
  setTimeout(() => setEmailSent(true), 1700)
})

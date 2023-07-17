import { NextUIProvider } from '@nextui-org/react'
import { Client } from 'aidbox-sdk'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import Config from './config.json'

const client = new Client(Config.aidbox_url, {
  username: Config.aidbox_client,
  password: Config.aidbox_secret
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <App client={client} />
    </NextUIProvider>
  </React.StrictMode>
)

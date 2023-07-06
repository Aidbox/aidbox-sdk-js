import { App as Phr } from 'phr/src/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App as SubsSample } from 'subscription-ui/src/app'
import { App as WorkSample } from 'workflow-ui/src/app'

import { App as QuerySample } from '../../../aidbox-querying/src/app'

import App from './App'
import './index.css'
import Config from './config.json'
import { Layout } from './Layout'

import { Client } from 'aidbox-sdk'

const client = new Client(Config.aidbox_url, {
  username: Config.aidbox_client,
  password: Config.aidbox_secret
})

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    )
  },
  {
    path: 'phr',
    element: (
      <Layout>
        <Phr client={client} />
      </Layout>
    )
  },
  // {
  //   path: 'complex-query',
  //   element: (
  //     <Layout>
  //       <QuerySample />
  //     </Layout>
  //   )
  // },
  {
    path: 'subscriptions',
    element: (
      <Layout>
        <SubsSample config={Config} />
      </Layout>
    )
  },
  {
    path: 'workflow',
    element: (
      <Layout>
        <WorkSample config={Config} />
      </Layout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

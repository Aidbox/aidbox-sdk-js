import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App as QuerySample } from '../aidbox-querying/src/app'
import { App as SubsSample } from '../aidbox-subscription/frontend/app'
import { WorkflowEngine } from '../aidbox-workflow/components/WorkflowEngine'
import { App as Phr } from '../personal-health-record/src/app'

import App from './App'
import './index.css'
import { Layout } from './Layout'

const router = createBrowserRouter([
  {
    path: '',
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
        <Phr />
      </Layout>
    )
  },
  {
    path: 'complex-query',
    element: (
      <Layout>
        <QuerySample />
      </Layout>
    )
  },
  {
    path: 'subscriptions',
    element: (
      <Layout>
        <SubsSample />
      </Layout>
    )
  },
  {
    path: 'workflow-engine',
    element: (
      <Layout>
        <WorkflowEngine />
      </Layout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)

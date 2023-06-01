import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { App as QuerySample } from '../how-to-make-aidbox-complex-query/src/app.tsx'
import { App as SubsSample } from '../how-to-react-on-aidbox-data-changes/frontend/app.tsx'
import { App as Phr } from '../personal-health-record/src/app.tsx'

import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'phr',
    element: <Phr />
  },
  {
    path: 'complex-query',
    element: <QuerySample />
  },
  {
    path: 'subscriptions',
    element: <SubsSample />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

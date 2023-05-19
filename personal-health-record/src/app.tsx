import './app.css'
import { NextUIProvider } from '@nextui-org/react'

import { Dashboard } from './components/dashboard/dashboard'

function App () {
  return (
    <NextUIProvider>
      <Dashboard />
    </NextUIProvider>
  )
}

export default App

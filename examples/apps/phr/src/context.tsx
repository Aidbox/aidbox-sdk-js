import { Client } from 'aidbox-sdk'
import { createContext } from 'react'

export const ClientContext = createContext<{ client: Client }>(
  {} as { client: Client }
)

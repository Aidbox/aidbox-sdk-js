import { Client } from 'aidbox-sdk'

export const client = new Client('https://genaproject.aidbox.app', {
  username: import.meta.env.VITE_APP_CLIENT,
  password: import.meta.env.VITE_APP_SECRET
})

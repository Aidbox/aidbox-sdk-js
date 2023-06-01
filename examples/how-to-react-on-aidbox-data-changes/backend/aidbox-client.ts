import { Client } from 'aidbox-sdk'
import * as dotenv from 'dotenv'
dotenv.config()

export const aidboxClient = new Client(process.env.AIDBOX_BASE_URL as string, {
  username: process.env.AIDBOX_CLIENT_ID as string,
  password: process.env.AIDBOX_CLIENT_SECRET as string
})

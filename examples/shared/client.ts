import { Client } from 'aidbox-sdk'
import { config } from "./config";


export const aidboxClient = new Client(`${config.url}`, {
    username: config.client,
    password: config.secret
})

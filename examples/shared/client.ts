import { Client, Engine } from 'aidbox-sdk'
import { config } from "./config";


export const aidboxClient = new Client(`${config.url}`, {
    username: config.client,
    password: config.secret
})

export const engineClient = new Engine(`${config.url}`, {
    username: config.client,
    password: config.secret
})
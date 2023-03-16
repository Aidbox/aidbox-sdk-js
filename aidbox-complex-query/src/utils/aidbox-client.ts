import {Client} from "aidbox-sdk";

console.log(import.meta)

export const aidboxClient = new Client(import.meta.env.VITE_AIDBOX_URL, {
    username: import.meta.env.VITE_AIDBOX_USERNAME,
    password: import.meta.env.VITE_AIDBOX_SECRET
})





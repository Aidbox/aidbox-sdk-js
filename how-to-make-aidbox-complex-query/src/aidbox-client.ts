import {Client} from "aidbox-sdk";

export const aidboxClient = new Client(import.meta.env.VITE_AIDBOX_URL, {
    username: import.meta.env.VITE_AIDBOX_USERNAME,
    password: import.meta.env.VITE_AIDBOX_SECRET
})





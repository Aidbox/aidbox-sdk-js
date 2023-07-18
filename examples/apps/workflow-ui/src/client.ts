import { Client } from "aidbox-sdk";

import config from "./config.json";

export const aidboxClient = new Client(config.aidbox_url, {
  username: config.aidbox_client,
  password: config.aidbox_secret,
});

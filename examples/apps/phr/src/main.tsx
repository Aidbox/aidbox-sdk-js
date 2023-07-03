import React from "react";
import ReactDOM from "react-dom/client";
import Config from "./config.json";
import { App } from "./app";
import "./index.css";
import { Client } from "aidbox-sdk";
import { NextUIProvider } from "@nextui-org/react";

const client = new Client(Config.aidbox_url, {
  username: Config.aidbox_client,
  password: Config.aidbox_secret,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <App client={client} />
    </NextUIProvider>
  </React.StrictMode>
);

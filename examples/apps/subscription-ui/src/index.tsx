import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { NextUIProvider } from "@nextui-org/react";
import Config from "./config.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <App config={Config} />
    </NextUIProvider>
  </React.StrictMode>
);

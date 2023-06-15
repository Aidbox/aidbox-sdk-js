import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App as QuerySample } from "../aidbox-querying/src/app";
import { App as SubsSample } from "../aidbox-subscription/frontend/app";
import { App as Phr } from "../personal-health-record/src/app";

import App from "./App";
import "./index.css";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "phr",
    element: (
      <Layout>
        <Phr />
      </Layout>
    ),
  },
  {
    path: "complex-query",
    element: (
      <Layout>
        <QuerySample />
      </Layout>
    ),
  },
  {
    path: "subscriptions",
    element: (
      <Layout>
        <SubsSample />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

# React Quickstart

## Step 1: Create a React app
Create a React app using a [Vite](https://vitejs.dev/guide/) template.

```shell
npm create vite@latest aidbox-quickstart -- --template react
```

## Step 2: Install the Aidbox Client package
The fastest way to get started is to use the `@aidbox/r4-sdk` client library which provides a convenient interface 
for working with Aidbox FHIR server from a React app.

Navigate to the React app and install `@aidbox/r4-sdk`.

```shell
cd aidbox-quickstart && npm install @aidbox/r4-sdk
```

## Step 3: Create the Aidbox Client
Create a `/src/lib` directory in your Vue app, create a file called `aidbox.js` and add the following code to initialize 
the Aidbox client with your instance **HOST_URL**, **CLIENT_ID** and **CLIENT_SECRET** from [auth client](https://docs.aidbox.app/modules-1/security-and-access-control/auth/basic-auth#register-client).

```javascript
import { Client } from "@aidbox/sdk-r4";

export const aidbox = new Client("<HOST_URL>", {
  username: "<CLIENT_ID>",
  password: "<CLIENT_SECRET>",
});
```

## Step 4: Retrieve data from the React Application
Replace the existing content in your `App.jsx` file with the following code.

```javascript jsx
import { useEffect, useState } from 'react';
import { aidbox } from './lib/aidbox';

function App() {
  const [patients, setPatients] = useState([]);

  async function getPatients() {
    const { data } = await aidbox.getResources("Patient").count(10);
    setPatients(data);
  }

  useEffect(() => { getPatients() }, []);

  return (
    <ul>
      {patients.map(({ id, name }) => (
        <li key={id}>{ name[0].family }</li>
      ))}
    </ul>
  );
}

export default App;
```

## Step 5: Start the Application
Start the app, go to `http://localhost:5173` in a browser, and open the browser console 
then you should see the list of countries.

```shell
npm run dev
```
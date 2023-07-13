## Create a React app
Create a React app using a Vite template.

```shell
npm create vite@latest my-app -- --template react
```

## Install the Aidbox client library
The fastest way to get started is to use the @aidbox/aidbox-sdk client library which provides a convenient interface for working with Aidbox from a React app.

Navigate to the React app and install @aidbox/aidbox-sdk.

```shell
cd my-app && npm install @aidbox/aidbox-sdk
```

## Retrieve data from the Aidbox instance
In App.jsx, create a client using your Aidbox URL, client id and secret.

Add a getResources function to fetch the data and display the request result to the page.

```typescript jsx
// line-numbers is enabled
import { useEffect, useState } from "react";
import { Client } from "@aidbox/aidbox-sdk";

export const aidbox = new Client("<HOST_URL>", {
    username: "<CLIENT_ID>",
    password: "<CLIENT_SECRET>",
});

function App() {
    const [patients, setPatients] = useState([]);
    
    useEffect(() => { getPatients() }, []);
    
    async function getPatients() {
      const { data } = await aidbox.getResources("Patient").count(10);
      setPatients(data);
    }
    
    return (
      <ul>
        {patients.map(({ id, name: [{ family }]}) => (
          <li key={id}>{family}</li>
        ))}
      </ul>
    );
}

export default App;
```
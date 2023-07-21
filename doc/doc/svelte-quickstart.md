# Svelte Quickstart

## Step 1: Create a Svelte app
Create a Svelte app using the npm create command.

```shell
npm create svelte@latest aidbox-quickstart
```

## Step 2: Install the Aidbox Client package
The fastest way to get started is to use the `@aidbox/r4-sdk` client library which provides a convenient interface
for working with Aidbox FHIR server from a Svelte app.

Navigate to the Svelte app and install `@aidbox/r4-sdk`.

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

## Step 4: Retrieve data from the Svelte Application
Use load method to fetch the data server-side and display the query results as a simple list.
Create `+page.server.js` file in the routes directory with the following code.

```javascript
import { aidbox } from './lib/aidbox';

export async function load() {
  const { data } = await aidbox.getResources("Patient").count(10);

  return { patients: data || [] };
}
```

Replace the existing content in your `+page.svelte` file in the routes directory with the following code.

```vue
<script>
  export let data;
</script>

<ul>
  {#each data.patients as patient}
    <li>{ patient.name }</li>
  {/each}
</ul>
```

## Step 5: Start the Application
Start the app, go to `http://localhost:5173` in a browser, and open the browser console
then you should see the list of countries.

```shell
npm run dev
```

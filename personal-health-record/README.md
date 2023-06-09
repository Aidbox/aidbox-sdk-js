# Installation guide

## Create client in Aidbox and access policies
In Aidbox REST console we have to create our client that SDK will use.

```http request
POST /Client
content-type: text/yaml
accept: text/yaml

id: <client-name>
secret: <client-secret>
grant_types: ["basic"]
```

For client that we created we need to provide access control record that allows
our client to get all information from Aidbox.
```http request
POST /AccessPolicy
content-type: text/yaml
accept: text/yaml

link: [{ id: <client-name>, resourceType: Client }]
engine: allow
```

## Add client credentials to .env
Put `<client-name>`, `<client-secret>` and aidbox URL to `.env` file.
Example in `.env.tpl`

## Install dependencies and run
```bash
npm install
```

```bash
npm run dev
```
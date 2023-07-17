# Run locally

## Requirements

- [NodeJS](https://nodejs.org/en/download)
- [PNPM package manager](https://pnpm.io/)
- [Docker](https://docs.docker.com/get-docker/)

## Install deps

```bash
pnpm install
```

## Init .env file

```bash
pnpm run setup
```

It will ask you to provide your Aidbox license. You can obtain it [here](https://aidbox.app)

## Run docker compose

```bash
docker compose up
```

or in detach mode

```bash
docker compose up -d
```

## Check Aidbox ready to use

Open <http://localhost:8888> and login into Aidbox Console. UserID you can find in `zen-project/zrc/system.edn` file in `admin-user-seed` symbol. Password will be exist in `.env` file `AIDBOX_ADMIN_PASSWORD`

## Seed data

```bash
pnpm run seed
```

Tis script will be upload all needed sample data into Aidbox.

## Run examples

These commands run all examples in one application. Also, you can run every sample [separately](https://github.com/Aidbox/aidbox-sdk-js/tree/main/examples/apps/README.md).

Will run backend applications

```bash
pnpm run backend
```

Will run frontend application

```bash
pnpm run app
```

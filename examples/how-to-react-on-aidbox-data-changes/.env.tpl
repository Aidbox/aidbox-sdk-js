### Postgres configuration ###

## Postgres image to run
# Used in docker-compose.yaml
PGIMAGE=healthsamurai/aidboxdb:14.5

## DB connection params
# Used by Postgres
# Used in 'system/db-config
PGHOSTPORT=5437
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=aidbox


### Aidbox configuration ###

## Aidbox image to run
# Used in docker-compose.yaml
AIDBOX_IMAGE=healthsamurai/aidboxone:latest

# Aidbox configuraiton project path and entrypoint
# Used by Aidbox on startup time
# Used in docker-compose.yaml
BOX_PROJECT_GIT_TARGET__PATH=/zen-project
AIDBOX_ZEN_ENTRYPOINT=system/box
AIDBOX_FHIR_VERSION=4.0.1
AIDBOX_ZEN_DEV_MODE=true

## Aidbox license key
# Used in 'system/zen-config
AIDBOX_LICENSE=

## Web server params
# Used in 'system/web-config
AIDBOX_BASE_URL=http://localhost:8888
AIDBOX_PORT=8888

# Super admin Client to create on start up
# Used in 'system/admin-seed.
# Remove from the seed if super admin is not needed.
AIDBOX_CLIENT_ID=
AIDBOX_CLIENT_SECRET=

# Node app env
NODE_APP_URL=http://host.docker.internal:8000

# SQS env
SQS_URL=http://localhost:9324
SQS_ACCESS_KEY_ID=accessKeyId
SQS_SECRET_ACCESS_KEY=secretAccessKey
SQS_REGION=eu-central-1

FROM node:18-slim as builder

RUN apt-get update && apt-get upgrade -y && apt-get autoclean -y && apt-get autoremove -y

WORKDIR /app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

ENV NPM_CONFIG_LOGLEVEL=warn
COPY . .

RUN corepack enable

RUN pnpm install && pnpm run build
RUN cp ./src/email.html ./build/email.html


EXPOSE 8080

# HEALTHCHECK CMD curl --fail http://localhost:8000/health || exit 1
CMD [ "node", "./build/index.js" ]

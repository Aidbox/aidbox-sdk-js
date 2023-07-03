FROM node:18 AS builder
ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq
RUN corepack enable
WORKDIR /app
COPY . .
RUN cat ./src/config.json
RUN jq 'to_entries | map_values({ (.key) : ("$" + .key | ascii_upcase) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json
RUN pnpm install && pnpm run build

FROM nginx:1.25
ENV DEBIAN_FRONTEND=noninteractive
ENV JSFOLDER=/usr/share/nginx/html/assets/*.js
COPY start-nginx.sh /usr/bin/start-nginx.sh
RUN apt update && apt-get install moreutils -y
RUN chmod +x /usr/bin/start-nginx.sh
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
ENTRYPOINT ["start-nginx.sh"]
FROM node:14
WORKDIR /

COPY package.json .
COPY yarn.lock .
COPY subschemas/substrate-api-proxy ./subschemas/substrate-api-proxy
COPY api-gateway ./api-gateway

RUN yarn install --pure-lockfile --non-interactive

WORKDIR /subschemas/substrate-api-proxy
RUN yarn build

WORKDIR /api-gateway
RUN yarn build
ENV PORT=5000
EXPOSE 5000
CMD [ "yarn", "run", "start" ]
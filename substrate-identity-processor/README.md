# Substrate Identity Processor

A Node JS application to process substrate chain data from the identity pallet.

## Requirements

- [yarn](https://yarnpkg.com/getting-started/install)

- `MongoDB` ([Atlas](https://www.mongodb.com/atlas/database) is recommended)

- [pm2](https://pm2.keymetrics.io/) (optional)

## Environment Variables

- `WS_PROVIDER`: web socket address for the Polkadot network you want to index.

- `MONGO_PASSWORD`, `MONGO_USERNAME`, `MONGO_CLUSTER_URL`, and `MONGO_DATABASE_NAME`: MongoDB credentials (see `src/mongoUri.ts`).

## Getting Started

- Run `yarn` to install dependencies

- Run `cp .env.example .env` and update the environment variables

- To run in development mode (and reload on file change): `yarn dev:start`

- To run the compiled JS: `yarn start`

## Performance

Currently this only processed `IdentitySet` events, it can process the entire chain history in a couple of seconds.

## TODO

- `const chainData = await api.query.identity.identityOf.multi(accounts)` is used to hydrate identities, consider batching this else we may run into resource issues as the chain grows

- consider exposing event data on the API gateway to avoid creating a web of database dependencies

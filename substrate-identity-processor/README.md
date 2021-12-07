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

Currently this only processes `IdentitySet` events, it can process the entire chain history in a couple of minutes.

## TODO

- consider exposing event data on the API gateway to avoid creating a web of database dependencies

- consider adding event filters and batch handlers, this can run in under 3 seconds if we don't process one event at a time and focus only on the data we care about

For example:

```
Get all IdentitySet events
Get all unique accounts from data[0]
Run query.multi on all unique accounts and map data
Then collection.insertMany
```

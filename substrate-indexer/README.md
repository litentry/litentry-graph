# Substrate Indexer

A Node JS application to extract event & extrinsic data from substrate chains and save it to to mongoDB.

## Requirements

- [yarn](https://yarnpkg.com/getting-started/install)
- `mongodb` ([Atlas](https://www.mongodb.com/atlas/database) is recommended)
- [pm2](https://pm2.keymetrics.io/) (optional)

## Getting Started

- Run `yarn` to install dependencies

- Run `cp .env.example .env` and update the environment variables

- To run in development mode (and reload on file change): `yarn dev:start`

- To run the compiled JS: `yarn start`

## Validating Indexed Data

Set `START_BLOCK` (defaults to 0), `END_BLOCK` (required), and `TOTAL_BLOCKS_TO_VALIDATE` (defaults to 10000) then run `yarn validate` or `yarn dev:validate`.

Errors will be logged to `./log/validationErrors.log` and every checked block number will be logged to the console.

## Deleting Indexed Blocks

In case you need to purge indexed blocks from mongodb, set `START_BLOCK` (defaults to 0) and `END_BLOCK` (required) then run `yarn delete-range` or `yarn dev:delete-range`.

## Performance

It takes about 2 days to index 500,000 blocks. To index the entire Polkadot chain with a single innstance of this application is very slow. To speed it up run multiple instances with fixed block ranges. Also, use a process manager like [pm2](https://pm2.keymetrics.io/) to ensure that the indexer can recover automatically from errors such as a socket disconnection.

# Substrate Indexer

A Node JS application to extract event & extrinsic data from substrate chains and save it to to MongoDB.

## Requirements

- [yarn](https://yarnpkg.com/getting-started/install)

- `MongoDB` ([Atlas](https://www.mongodb.com/atlas/database) is recommended)

- [pm2](https://pm2.keymetrics.io/) (optional)

## Environment Variables

- `WS_PROVIDER`: web socket address for the Polkadot network you want to index.

- `MONGO_PASSWORD`, `MONGO_USERNAME`, `MONGO_CLUSTER_URL`, and `MONGO_DATABASE_NAME`: MongoDB credentials (see `src/mongoUri.ts`).

- `START_BLOCK`: the block to start indexing, validating or deleting from (defaults to 0 in `src/config.ts`).

- `END_BLOCK`: the block to stop indexing, validating or deleting from. This is required for validating or deleting blocks. When indexing it is optional.

- `TOTAL_BLOCKS_TO_VALIDATE`: number of blocks you want to validate (defaults to 10000). Ignored for indexing and deleting.

## Getting Started

- Run `yarn` to install dependencies

- Run `cp .env.example .env` and update the environment variables

- To run in development mode (and reload on file change): `yarn dev:start`

- To run the compiled JS: `yarn start`

## Performance

It takes about 2 days to index 500,000 blocks. To index the entire Polkadot chain with a single instance of this application is very slow. To speed it up run multiple instances with fixed block ranges. Also, use a process manager like [pm2](https://pm2.keymetrics.io/) to ensure that the indexer can recover automatically from errors such as a socket disconnection.

## Running the Application

### Indexing a Fixed Block Range

Run the commands in the "Getting Started" section with `END_BLOCK` set in `.env`. Blocks including and between `START_BLOCK` (defaults to 0) and `END_BLOCK` will be indexed.

### Running the Indexer Continuously

Run the commands in the "Getting Started" section without setting `END_BLOCK` in `.env`. The application will subscribe to new blocks on the chain and index them as they are produced. As soon as the first new block in the chain is produced it will also begin indexing the blocks between `START_BLOCK` and the first block received in the subscription.

### Validating Indexed Data

Set `START_BLOCK` (defaults to 0), `END_BLOCK` (required), and `TOTAL_BLOCKS_TO_VALIDATE` (defaults to 10000) then run `yarn validate` or `yarn dev:validate`.

Errors will be logged to `./log/validationErrors.log` and every checked block number will be logged to the console.

### Deleting Indexed Blocks

In case you need to purge indexed blocks from MongoDB, set `START_BLOCK` (defaults to 0) and `END_BLOCK` (required) then run `yarn delete-range` or `yarn dev:delete-range`.

## Recovering from errors

When indexing a block range the database is checked for already indexed data before fetching it from the chain, this means that fatal errors are automatically recovered from when the application is restarted. Take the following 2 examples:

- When indexing a block range from 1000 to 2000, the websocket connection times out and crashes the application half way through. When the application restarts it loops back through blocks 1000 to 2000, indexing any that are missing data and skipping those that have data.

- When indexing the whole block chain continuously the latst block on startup is 2000, the application crashes on block 3000. By the time it restarts the latest block is 3010, so it indexes all new blocks from 3010, as well as 0 to 3009, skipping any that have already been indexed.

# Chain Listener

A Node JS application to extract event data from the block chain.

## Getting Started

```sh
yarn
yarn start
```

## Overview

`src/index.ts`

Runs the application.

`src/api-types.ts`

The types to add to the API.

`src/block-listener.ts`

Subscribes to new blocks on the chain, fetches the block data and event records and passes them to the callback. See [Polkadot JS docs](https://polkadot.js.org/docs/api/examples/promise/listen-to-blocks).

`src/create-api.ts`

Creates the API.

`src/parse-events.ts`

Extracts the event data from the block, if a resolver is found it runs it. See [Polkadot JS docs](https://polkadot.js.org/docs/api/cookbook/blocks).

`src/types.ts`

Types for the application.

`src/resolvers/{section}/{method}.ts`

If you want to do something with the data of an event following an extrinsic on the chain add a file here. The casing is important, the section name and method name are used to find the extrinsic and relevant event in the chain data.

The default export must be a object with an `eventName` property and a handler function that takes `ApiPromise` from `@polkadot/api` and the event data (the type is specific to the event).

_We're not using `ApiRx` for this as the resolvers are designed to be fired once per event. `RxJS` just adds complexity with no benefit here._

The example resolver at `src/nft/createClass.ts` responds to events triggered by `api.tx.nft.createClass`. This one hydrates the class data by querying the chain, then fetches the metadata from IPFS and console logs the output.

_A real world resolver would store this in a database._

## TODO

- Add a method to run on specific blocks so we can backfill historic events

- Turn this into a package rather than an application which you run like this:

```js
import chainListener from '@litenry/chain-listener';

(async () => {
  await chainListener(provider, types, resolvers);
})();
```

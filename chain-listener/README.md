# Chain Listener

A Node JS application to extract event data from the block chain.

## Getting Started

```sh
yarn
yarn build
```

```js
import chainListener from '@litenry/chain-listener';

(async () => {
  await chainListener(provider, types, resolvers);
})();
```

_The package is currently only available in the workspaces in this repository (it's not published), so the import is actually:_

```js
import chainListener from 'chain-listener';
```

_The nft-indexer application is currently using it - and specifies it as a dependency in the package.json file._

## Overview

`src/index.ts`

Exports the package.

`src/chain-listener.ts`

Creates the API and runs the block-listener.

`src/block-listener.ts`

Subscribes to new blocks on the chain, fetches the event records and passes them to the callback. See [Polkadot JS docs](https://polkadot.js.org/docs/api/examples/promise/listen-to-blocks).

`src/create-api.ts`

Creates the API.

`src/parse-events.ts`

Loops the events, if a resolver is found it runs it. See [Polkadot JS docs](https://polkadot.js.org/docs/api/cookbook/blocks).

`src/types.ts`

Types for the application.

## TODO

- Add a method to run on specific blocks so we can backfill historic events

# Event Data POC

This repository is a collection of applications to demonstrate how we see the middle layer between the chain and the webapp working.

The database layer is using `mongodb` and `mongoose` (for conveience with schemas & connections). It can be hosted anywhere, but [MongoDB's Atlas](https://www.mongodb.com/cloud/atlas) is recommended. It has a free tier to get up and running, and saves the hassle of managing the database.

## Getting Started

Add environment variables (replace example values with real ones):

```sh
cp nft-indexer/.env.example nft-indexer/.env
```

Install dependencies:

```sh
yarn
```

_There is a `postinstall` script in the chain listener and the nft-models that transpiles the typescript to JS so we can import the libs_

Run the NFT indexer:

```sh
cd nft-indexer && yarn start
```

TODO: add API startup commands

## Contents

### `polkadot-chain-listener`

A Node JS application to extract event data from the block chain.

```js
import polkadotChainListener from "@litenry/polkadot-chain-listener";

(async () => {
  await polkadotChainListener(provider, types, handlers);
})();
```

- `provider` is the chain websocket address you want to subscribe to
- `types` are `RegistryTypes` from `@Polkadot/api`
- `handlers` is an object keyed on `section` and `EventName`. When an event is detected on chain (e.g. `nft.CreatedClass`) the handler will receive the data, at which point it can do whatever it wants with it.

### `nft-indexer`

A Node JS application that runs the chain listener and listens to events from the NFT pallet. The handlers parse (and sometimes expand on) the data from the event and saves it to `mongodb`.

### `nft-models`

A collection of `mongoose` models shared by the `nft-indexer` and the `api`

### `api`

An `express` application to allow the webapp to retrieve data from `mongodb`.

## TODO

Add a workflow script to fire it all up in production.

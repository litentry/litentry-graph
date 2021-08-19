# Event Data POC

This repository is a collection of applications to demonstrate how we see the middle layer between the chain and the webapp working.

## Contents

### `chain-listener`

A Node JS application to extract event data from the block chain.

```js
import chainListener from "@litenry/chain-listener";

(async () => {
  await chainListener(provider, types, resolvers);
})();
```

- `provider` is the chain websocket address you want to subscribe to
- `types` are `RegistryTypes` from `@Polkadot/api`
- `resolvers` is an object keyed on `section` and `EventName`. When an event is detected on chain (e.g. `nft.CreatedClass`) the resolver will receive the data, at which point it can do whatever it wants with it.

### `nft-indexer`

A Node JS application that runs the chain listener and listens to events from the NFT pallet. The resolvers parse (and sometimes expand on) the data from the event and saves it to `mongodb`.

### `api`

An `express` application to allow the webapp to retrieve data from `mongodb`.

## TODO

Add a script to fire it all up.

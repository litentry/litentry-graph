# Chain Listener

A Node JS application to run the chain listener and process events from the NFT pallet.

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

`src/config.ts`

Veriifies and loads env into a config object.

`src/db.ts`

Creates the connection with the `mongodb` database.

`src/resolvers/{section}/{eventName}.ts`

If you want to do something with the data of an event add a file here. The casing is important, the section name and event name are used to find the event in the chain data.

The default export must be a handler function that takes `ApiPromise` from `@polkadot/api` and the event data (the type is specific to the event).

_We're not using `ApiRx` for this as the resolvers are designed to be fired once per event. `RxJS` just adds complexity with no benefit here._

The example resolver at `src/nft/CreatedClass.ts` hydrates the class data by querying the chain, then fetches the metadata from IPFS and console logs the output.

_A real world resolver would store this in a database._

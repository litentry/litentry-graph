# web3-indexer

This repository is a collection of applications to demonstrate how we see the middle layer between the chain and the webapp working.

The database layer is using `mongodb` and `mongoose` (for conveience with schemas & connections). It can be hosted anywhere, but [MongoDB's Atlas](https://www.mongodb.com/cloud/atlas) is recommended. It has a free tier to get up and running, and saves the hassle of managing the database.

## Contents

- [Litentry API Gateway](https://github.com/litentry/web3-indexer/blob/main/api/README.md)

- [Substrate Indexer](https://github.com/litentry/web3-indexer/blob/main/substrate-indexer/README.md)

- [packages/demo-schema](https://github.com/litentry/web3-indexer/blob/main/packages/demo-schema/README.md). This is the package with the Polkadot API proxy code. It doesn't interact with indexed data, it's for offloading the Polkadot API work to the server. It feeds into our API gatewat.

- [packages/identity-pallet](https://github.com/litentry/web3-indexer/blob/main/packages/identity-pallet/README.md). This is the mapping layer for the events and extrinsics on the identity pallet. It reads from the data provided by the Substrate Indexer, creates its own data, and feeds that via GraphQL resolvers into our API Gateway. This is [not complete](https://github.com/litentry/web3-indexer/issues/19).

## Getting Started

This is build with `yarn-workspaces`, to install packages and compile the typescript run `yarn`

_There is a `postinstall` script that triggers `yarn build` in all the packages & applications._

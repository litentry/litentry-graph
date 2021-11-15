# Litentry Graph

GraphQL server, initially for Litentry client applications

## Getting Started

- `yarn` (from repo root - it'll build all the packages)
- `yarn dev` (from this directory)

## Packaging Schemas

Take a look at `packages/demo-schema` and `packages/nft-schema` to see how we can bundle resolvers, typeDefs and publishers (_this is a method to run event listeners for subscriptions - see `nft-models` for an example, maybe rename this_).

The schema packages are used in 3 places:

- `./src/schema/resolvers/index.ts`
- `./src/schema/typeDefs.ts`
- `./src/index.ts` (these are the publishers)

## Demo Query

[View Playground](https://web3-indexer.herokuapp.com/graphql)

```graphql
query {
  balance(address: "13RDY9nrJpyTDBSUdBw12dGwhk19sGwsrVZ2bxkzYHBSagP2") {
    nonce
    consumers
    data {
      free
      miscFrozen
      feeFrozen
      reserved
    }
  }
  chainInfo {
    chain
    nodeName
    nodeVersion
  }
  tips {
    id
    who
    deposit
    finder
    reason
    closes
  }
}
```

## Architectural Issues

- The way the packaged schemas are applied isn't very flexible. If people want to run our graph with only the packages they want they'd have to fork and edit the code. Even if we don't want to allow for selectiive package loading, it could still be written better by having a single file that loads the packages and extracts the mapping of `Query`, `typeDefs` etc.

- The subscriptions for NFTs were quite straightforward - we watched the tables for updates then used pubsub to link the table watcher and the subscription resolver. Doing this with data we haven't indexed might be tricky... _although it could just be a case of putting the logic in the subscription resolver which is easy, and actually a lot simpler..._.

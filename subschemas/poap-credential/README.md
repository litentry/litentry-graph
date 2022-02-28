## Substrate Chain (GraphQL API).

## Getting Started

```sh
yarn
yarn start:dev
```

## Generate types for resolvers

1. Make sure server is running with `yarn start:dev`
2. Run the generate command (it will look up the graphql schema and generate the types)

```sh
yarn codegen
```

3. if using [resolver chaining](https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-chains) you need to add the Partial type as a mapper in `codegen.yml`. see examples in the this [blog post](https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen).

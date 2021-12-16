# Litentry API Gateway

This repository contains the GraphQL API Gateway and the subschemas that are exposed via the gateway. We also load remote schemas via the gateway e.g. the one based on our [Subsquid mappings](https://github.com/litentry/subsquid-mappings).

## Contents

- [API Gateway](https://github.com/litentry/api-gateway/blob/main/api-gateway/README.md)

- [Substrate API Proxy](https://github.com/litentry/api-gateway/blob/main/subschemas/substrate-api-proxy/README.md)

## Getting Started

This is built with `yarn-workspaces`, to install packages and compile the typescript run `yarn`.

_There is a `postinstall` script that triggers `yarn build` in all the packages & applications._

To run the API locally run `cd api-gateway && yarn dev`.

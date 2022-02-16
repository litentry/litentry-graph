# Litentry Graph

This repository contains the GraphQL server and the subschemas that are exposed via the graph. We also load remote schemas via the graph e.g. [the one based on Substrate data](https://github.com/litentry/squid).

## Contents

- [GraphQL Server](https://github.com/litentry/litentry-graph/blob/main/graphql-server/README.md)

- [Substrate Chain Wrapper](https://github.com/litentry/litentry-graph/blob/main/subschemas/substrate-chain/README.md)

## Getting Started

Run `yarn && yarn start`

## Deployment

### Initial deployment

- Clone repository
- Run `./init-letsencrypt.sh`
- Run `docker-compose -f docker-compose.prod.yml up -d`

### Subsequent deployments

- Run `make deploy`

Make deploy will: 
- pull the latest code
- build a new container
- reload nginx so that it resolves to the new container
- tear down the old container 
- reload nginx so that it stops resolving to the old container
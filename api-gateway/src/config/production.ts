import Config from './Config';

const config: Config = {
  apiPort: 5000,
  remoteSchemaConfig: [
    { name: 'khala', url: 'http://query-node:4000/graphql' },
    {
      name: 'eth',
      url: 'https://api.thegraph.com/subgraphs/name/litentry/identity-subgraph',
    },
    {
      name: 'bsc',
      url: 'https://api.thegraph.com/subgraphs/name/litentry/identity-subgraph-bsc',
    },
  ],
};

export default config;

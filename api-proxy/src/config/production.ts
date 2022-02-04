import Config from './Config';

const config: Config = {
  apiPort: 5001,
  remoteSchemaConfig: [
    { name: 'khala', url: 'https://subsquid-khala.litentry.io/graphql' },
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

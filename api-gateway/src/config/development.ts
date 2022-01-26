import Config from './Config';

const config: Config = {
  apiPort: 3377,
  remoteSchemaConfig: [
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

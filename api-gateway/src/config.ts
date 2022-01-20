import dotenv from 'dotenv';

dotenv.config({ debug: true });

type Config = {
  remoteSchemaConfig: {
    name: 'eth' | 'bsc' | 'khala';
    url: string;
  }[];
  apiPort: number;
};

let config: Config;

if (process.env.STAGE === 'PRODUCTION') {
  config = {
    apiPort: 4000,
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
} else {
  config = {
    apiPort: 4000,
    remoteSchemaConfig: [
      { name: 'khala', url: 'http://localhost:4000/graphql' },
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
}

export default config;

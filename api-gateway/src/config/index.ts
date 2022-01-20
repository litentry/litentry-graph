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

if (process.env.STAGE) {
  config = require(`./${process.env.STAGE}`);
} else {
  throw new Error('process.env.STAGE not set');
}

export default config;

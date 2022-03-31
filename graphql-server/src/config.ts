import dotenv from 'dotenv';
import remoteSchemas from './remoteSchemas';

dotenv.config({ debug: true });

if (!process.env.ETH_MAINNET_PROVIDER) {
  throw Error('ETH_MAINNET_PROVIDER not set');
}

const config = {
  apiPort: process.env.API_PORT || 5000,
  remoteSchemaConfig: remoteSchemas,
  ethMainnetProvider: process.env.ETH_MAINNET_PROVIDER as string,
  bscProvider: 'https://bsc-dataseed.binance.org/',
};

export default config;

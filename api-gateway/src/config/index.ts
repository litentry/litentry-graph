import dotenv from 'dotenv';
import development from './development';
import production from './production';
import Config from './Config';

dotenv.config({ debug: true });

let config: Config;
switch (process.env.STAGE) {
  case 'production':
    config = production;
    break;
  default:
    config = development;
}

export default config;

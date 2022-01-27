import dotenv from 'dotenv';
import development from './development';
import production from './production';

dotenv.config({ debug: true });

let config: { [key: string]: any };
switch (process.env.STAGE) {
  case 'production':
    config = production;
    break;
  default:
    config = production;
  // config = development;
}

export default config;

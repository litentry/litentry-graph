import dotenv from 'dotenv';

dotenv.config({ debug: true });

const apiPort = process.env.PORT;
if (!apiPort) {
  console.error('process.env.PORT not set');
  process.exit(1);
}

export default {
  apiPort,
};

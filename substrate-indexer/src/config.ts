import dotenv from 'dotenv';

dotenv.config({ debug: true });

const provider = process.env.WS_PROVIDER;
if (!provider) {
  console.error('process.env.WS_PROVIDER not set');
  process.exit(1);
}

const username = process.env.MONGO_USERNAME;
if (!username) {
  console.error('process.env.MONGO_USERNAME not set');
  process.exit(1);
}

const password = process.env.MONGO_PASSWORD;
if (!password) {
  console.error('process.env.MONGO_PASSWORD not set');
  process.exit(1);
}

const clusterUrl = process.env.MONGO_CLUSTER_URL;
if (!clusterUrl) {
  console.error('process.env.MONGO_CLUSTER_URL not set');
  process.exit(1);
}

const databaseName = process.env.MONGO_DATABASE_NAME;
if (!databaseName) {
  console.error('process.env.MONGO_DATABASE_NAME not set');
  process.exit(1);
}

export default {
  provider,
  username,
  password,
  clusterUrl,
  databaseName,
  startBlock: parseInt(process.env.START_BLOCK || '0'),
  endBlock:
    process.env.END_BLOCK === undefined
      ? undefined
      : parseInt(process.env.END_BLOCK),
  totalToValidate: parseInt(process.env.TOTAL_BLOCKS_TO_VALIDATE || '10000'),
};

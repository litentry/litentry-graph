import dotenv from 'dotenv';

dotenv.config({ debug: true });

const apiPort = process.env.PORT;
if (!apiPort) {
  console.error('process.env.PORT not set');
  process.exit(1);
}

const apiHost = process.env.HOST;
if (!apiHost) {
  console.error('process.env.HOST not set');
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
  console.error('process.env.MONGO_CLUSTER_URL not set');
  process.exit(1);
}

export default {
  mongoUri: `mongodb+srv://${username}:${password}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`,
  apiPort,
  graphqlUri: `${apiHost}:${apiPort}/graphql`,
};

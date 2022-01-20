import dotenv from 'dotenv';

dotenv.config({ debug: true });

const apiPort = process.env.PORT;
if (!apiPort) {
  console.error('process.env.PORT not set');
  process.exit(1);
}

const remoteSchemaUrls = process.env.REMOTE_SCHEMA_URLS?.split(',');
if (!Array.isArray(remoteSchemaUrls)) {
  console.error('process.env.REMOTE_SCHEMA_URLS not set');
  process.exit(1);
}

export default {
  apiPort,
  remoteSchemaUrls,
};

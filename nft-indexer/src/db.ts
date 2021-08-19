import type { Db } from 'mongodb';
import { MongoClient } from 'mongodb';
import config from './config';

const uri = `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

export default async function db(): Promise<Db> {
  await client.connect();
  const db = client.db(config.databaseName);

  return db;
}

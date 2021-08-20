import config from './config';
import { connect } from 'mongoose';
import express from 'express';
import cors from 'cors';
import {
  getNFTEvents,
  getNFTClass,
  getNFTClasses,
  getNFTInstance,
  getNFTInstances,
} from './handlers';

const run = async () => {
  try {
    // Try to connect to MongoDB
    const uri = `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;
    await connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }

  // Start Express
  const app = express();
  app.use(cors({ origin: '*' }));
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.get('/api/nft/events', getNFTEvents);
  app.get('/api/nft/classes', getNFTClasses);
  app.get('/api/nft/classes/:id', getNFTClass);
  app.get('/api/nft/instances', getNFTInstances);
  app.get('/api/nft/instances/:id', getNFTInstance);

  app.listen(config.apiPort, () => {
    console.log(`Example api listening at http://localhost:${config.apiPort}`);
  });
};

run();

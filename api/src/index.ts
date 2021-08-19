import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// import {
//   getNFTClass,
//   getNFTClasses,
//   getNFTInstance,
//   getNFTInstances,
// } from './Controllers';

dotenv.config({ debug: true });

if (!process.env.PORT) {
  console.error('process.env.PORT not set');
  process.exit(1);
}

const port = process.env.PORT;

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/nft/class', async (req, res) => {
  try {
    console.log('Get NFT Classes');
    console.log(req);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get('/api/nft/class/:id', async (req, res) => {
  try {
    console.log('Get single NFT Class');
    console.log(req);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get('/api/nft/instances', async (req, res) => {
  try {
    console.log('Get NFT Classes');
    console.log(req);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get('/api/nft/instance/:id', async (req, res) => {
  try {
    console.log('Get single NFT Class');
    console.log(req);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example api listening at http://localhost:${port}`);
});

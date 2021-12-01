import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import { graphqlHTTP } from 'express-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from './schema';

const PORT = process.env.PORT || 3000;
const PATH = 'substrate-proxy-api';

const app = express();

app.use(`/${PATH}`, graphqlHTTP({ schema, graphiql: true }));

const server = http.createServer(app);

server.listen(PORT, () => {
  const wsServer = new WebSocketServer({
    server,
    path: `/${PATH}`,
  });
  useServer({ schema }, wsServer);
  console.info(
    `🚀GraphQL-Server is running on http://localhost:${PORT}/${PATH}`
  );
});

server.on('error', console.error);

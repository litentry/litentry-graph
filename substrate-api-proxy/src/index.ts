import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import { graphqlHTTP } from 'express-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';
import { schema } from './schema';

const PORT = process.env.PORT || 3000;
const PATH = 'substrate-api-proxy';

async function run() {
  const getSubstrateApi = await initSubstrateApi();
  const app = express();

  app.use(
    `/${PATH}`,
    graphqlHTTP((request) => {
      const substrateNetwork = request.headers[
        'substrate-network'
      ] as SubstrateNetwork;
      const api = getSubstrateApi(substrateNetwork);

      return {
        schema,
        graphiql: { headerEditorEnabled: true },
        context: { api },
      };
    }),
  );

  const server = http.createServer(app);

  server.listen(PORT, () => {
    const wsServer = new WebSocketServer({
      server,
      path: `/${PATH}`,
    });
    useServer(
      {
        schema,
        onError: (ctx, msg, errors) => {
          console.error('Error', { ctx, msg, errors });
        },
      },
      wsServer,
    );
    console.info(
      `🚀GraphQL-Server is running on http://localhost:${PORT}/${PATH}`,
    );
  });
}

run().catch(console.error);

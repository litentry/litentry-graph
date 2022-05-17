import {ApiPromise, WsProvider} from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot' | 'litmus' | 'khala';

// TODO: get ws providers from .env
export async function initSubstrateApi() {

  const providers = {
    polkadot: new WsProvider('wss://rpc.polkadot.io'),
    kusama: new WsProvider(
      'wss://kusama.api.onfinality.io/public-ws'
    ),
    khala: new WsProvider(
      'wss://khala.api.onfinality.io/public-ws'
    ),
    litmus: new WsProvider(
      'wss://rpc.litmus-parachain.litentry.io'
    )
  };

  const apiPromises = [];
  const apis = {};

  const reconnect = async (api, network) => {
    if (api.isConnected) {
      console.log(`${network} is connected`);
      return;
    }

    console.log(`${network} is disconnected - reconnecting`);
    await api.connect();

    if (api.isConnected) {
      console.log(`${network} has reconnected`);
    } else {
      console.error(`${network} failed to reconnect`);
    }
  }

  for (const [network, wsProvider] of Object.entries(providers)) {
    apiPromises.push(async () => {
      const api = await ApiPromise.create({provider: wsProvider});
      await api.isReady;

      api.once('error', async error => {
        console.error(`${network}: ${JSON.stringify(error)}`);
        await reconnect(api, network);
      });

      api.once('disconnected', async () => {
        await reconnect(api, network);
      })

      apis[network] = api;
    })
  }

  await Promise.allSettled(apiPromises);
  return (network?: SubstrateNetwork) => apis[network];
}

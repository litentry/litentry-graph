import { ApiPromise, WsProvider } from '@polkadot/api';

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

  for (const [network, wsProvider] of Object.entries(providers)) {
    apiPromises.push(async () => {
      const api = await ApiPromise.create({provider: wsProvider});
      await api.isReady;
      api.once('error', async error => {
        console.error(error);
        if (!api.isConnected) {
          console.log("Disconnected - reconnecting");
          await api.connect();
        }
      });

      api.once('disconnected', () => api.connect())

      apis[network] = api;
    })
  }

  await Promise.allSettled(apiPromises);
  return (network?: SubstrateNetwork) => apis[network];
}

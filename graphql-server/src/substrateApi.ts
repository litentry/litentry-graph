import { ApiPromise, WsProvider } from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot' | 'litmus' | 'khala';

// TODO: get ws providers from .env
const polkadotWsProvider = new WsProvider('ws://rpc.polkadot.io');
const kusamaWsProvider = new WsProvider('ws://kusama.api.onfinality.io/public-ws');
const khalaWsProvider = new WsProvider('ws://khala.api.onfinality.io/public-ws');
const litmusWsProvider = new WsProvider('ws://rpc.litmus-parachain.litentry.io');

export async function initSubstrateApi() {
  const polkadotApi = await ApiPromise.create({ provider: polkadotWsProvider });
  await polkadotApi.isReady;

  const kusamaApi = await ApiPromise.create({ provider: kusamaWsProvider });
  await kusamaApi.isReady;

  const khalaApi = await ApiPromise.create({ provider: khalaWsProvider });
  await khalaApi.isReady;

  const litmusApi = await ApiPromise.create({ provider: litmusWsProvider });
  await litmusApi.isReady;

  return (network?: SubstrateNetwork) => {
    switch (network) {
      case 'kusama':
        return kusamaApi;
      case 'litmus':
        return litmusApi;
      case 'khala':
        return khalaApi;

      default:
        return polkadotApi;
    }
  };
}

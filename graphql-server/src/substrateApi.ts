import { ApiPromise, WsProvider } from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot' | 'litmus' | 'phala';

// TODO: get ws providers from .env
const polkadotWsProvider = new WsProvider('wss://rpc.polkadot.io');
const kusamaWsProvider = new WsProvider(
  'wss://kusama.api.onfinality.io/public-ws',
);
const phalaWsProvider = new WsProvider(
  'wss://khala.api.onfinality.io/public-ws',
);
const litmusWsProvider = new WsProvider(
  'wss://rpc.litmus-parachain.litentry.io',
);

export async function initSubstrateApi() {
  const polkadotApi = await ApiPromise.create({ provider: polkadotWsProvider });
  await polkadotApi.isReady;

  const kusamaApi = await ApiPromise.create({ provider: kusamaWsProvider });
  await kusamaApi.isReady;

  const phalaApi = await ApiPromise.create({ provider: phalaWsProvider });
  await phalaApi.isReady;

  const litmusApi = await ApiPromise.create({ provider: litmusWsProvider });
  await litmusApi.isReady;

  return (network?: SubstrateNetwork) => {
    switch (network) {
      case 'kusama':
        return kusamaApi;
      case 'litmus':
        return litmusApi;
      case 'phala':
        return phalaApi;

      default:
        return polkadotApi;
    }
  };
}

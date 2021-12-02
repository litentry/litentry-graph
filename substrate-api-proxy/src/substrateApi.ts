import { ApiPromise, WsProvider } from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot';

// TODO: get ws providers from .env
const polkadotWsProvider = new WsProvider('wss://rpc.polkadot.io');
const kusamaWsProvider = new WsProvider(
  'wss://kusama.api.onfinality.io/public-ws',
);

export async function initSubstrateApi() {
  const polkadotApi = await ApiPromise.create({ provider: polkadotWsProvider });
  await polkadotApi.isReady;

  const kusamaApi = await ApiPromise.create({ provider: kusamaWsProvider });
  await kusamaApi.isReady;

  return (network?: SubstrateNetwork) => {
    if (network === 'kusama') {
      return kusamaApi;
    }
    return polkadotApi;
  };
}

import { ApiPromise, WsProvider } from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot' | 'litmus';

// TODO: get ws providers from .env
const polkadotWsProvider = new WsProvider('wss://rpc.polkadot.io');
const kusamaWsProvider = new WsProvider(
  'wss://kusama.api.onfinality.io/public-ws'
);
const litmusWsProvider = new WsProvider(
  'wss://rpc.litmus-parachain.litentry.io'
);

export async function initSubstrateApi() {
  const polkadotApi = await ApiPromise.create({ provider: polkadotWsProvider });
  await polkadotApi.isReady;

  const kusamaApi = await ApiPromise.create({ provider: kusamaWsProvider });
  await kusamaApi.isReady;

  const litmusApi = await ApiPromise.create({ provider: litmusWsProvider });
  await litmusApi.isReady;

  return (network?: SubstrateNetwork) => {
    if (network === 'kusama') {
      return kusamaApi;
    } else if (network === 'litmus') {
      return litmusApi;
    }
    return polkadotApi;
  };
}

import { ApiPromise, HttpProvider } from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot' | 'litmus' | 'khala';

// TODO: get ws providers from .env
const polkadotHttpProvider = new HttpProvider('https://rpc.polkadot.io');
const kusamaHttpProvider = new HttpProvider('https://kusama.api.onfinality.io/public');
const khalaHttpProvider = new HttpProvider('https://khala.api.onfinality.io/public');
const litmusHttpProvider = new HttpProvider('https://rpc.litmus-parachain.litentry.io');

export async function initSubstrateApi() {
  const polkadotApi = await ApiPromise.create({ provider: polkadotHttpProvider });
  await polkadotApi.isReady;

  const kusamaApi = await ApiPromise.create({ provider: kusamaHttpProvider });
  await kusamaApi.isReady;

  const khalaApi = await ApiPromise.create({ provider: khalaHttpProvider });
  await khalaApi.isReady;

  const litmusApi = await ApiPromise.create({ provider: litmusHttpProvider });
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

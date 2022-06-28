import { ApiPromise, WsProvider } from '@polkadot/api';

export type SubstrateNetwork = 'kusama' | 'polkadot' | 'litmus' | 'khala';

// TODO: get ws providers from .env
const polkadotWsProvider = new WsProvider('wss://rpc.polkadot.io');
const kusamaWsProvider = new WsProvider('wss://kusama.api.onfinality.io/public-ws');
const khalaWsProvider = new WsProvider('wss://khala.api.onfinality.io/public-ws');
const litmusWsProvider = new WsProvider('wss://rpc.litmus-parachain.litentry.io');

const ONE_HOUR_INTERVAL = 60 * 60 * 1000;
let apiInstanceCount = 1;
let getApiInstance: (network?: SubstrateNetwork) => ApiPromise;

async function createApis() {
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

export async function initSubstrateApi() {
  console.log('::::::: initializing polkadot apis :::::::');
  getApiInstance = await createApis();

  setInterval(async () => {
    getApiInstance = await createApis();
    apiInstanceCount++;
    console.log(`::::::: New polkadot api instances (${apiInstanceCount}). :::::::`);
  }, ONE_HOUR_INTERVAL);

  return getApiInstance;
}

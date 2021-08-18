import { ApiPromise, WsProvider } from '@polkadot/api';
import type { RegistryTypes } from '@polkadot/types/types';

export default async function createApi(
  provider: string,
  types?: RegistryTypes
): Promise<ApiPromise> {
  return await ApiPromise.create({
    // maybe just open up the options entirely?
    provider: new WsProvider(provider),
    types,
  });
}

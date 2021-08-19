import type { RegistryTypes } from '@polkadot/types/types';
import type { Resolvers } from './types';
import createApi from './create-api';
import blockListener from './block-listener';
import parseEvents from './parse-events';

export async function chainListener(
  provider: string,
  types: RegistryTypes,
  resolvers: Resolvers
): Promise<void> {
  const api = await createApi(provider, types);

  await blockListener(api, parseEvents(resolvers));
}

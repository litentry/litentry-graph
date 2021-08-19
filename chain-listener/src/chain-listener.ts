import { RegistryTypes } from '@polkadot/types/types';
import createApi from './create-api';
import blockListener from './block-listener';
import parseEvents from './parse-events';
import { Resolvers } from './types';

export async function chainListener(
  provider: string,
  types: RegistryTypes,
  resolvers: Resolvers
): Promise<void> {
  const api = await createApi(provider, types);

  await blockListener(api, parseEvents(resolvers));
}

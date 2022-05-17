import { LinkOption } from '@polkadot/apps-config/endpoints/types';
import { createWsEndpoints } from '@polkadot/apps-config/endpoints';
import { Context } from '../types';

export function getEndpoints(api: Context['api']): LinkOption[] {
  const genesisHash = api.genesisHash.toHex();
  const wsEndpoints = createWsEndpoints((key: string, value: string | undefined) => value || key);

  return wsEndpoints.filter(({ genesisHashRelay }) => genesisHash === genesisHashRelay);
}

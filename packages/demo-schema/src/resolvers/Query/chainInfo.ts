import type { Text } from '@polkadot/types';
import type { ServerContext } from '../../types';

export default async function chainInfo(
  _: undefined,
  __: undefined,
  { api }: ServerContext
): Promise<{
  chain: Text;
  nodeName: Text;
  nodeVersion: Text;
}> {
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
  ]);
  return { chain, nodeName, nodeVersion };
}

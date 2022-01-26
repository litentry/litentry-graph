import type { Context } from '../../types';
import type {ChainInfo} from '../../generated/resolvers-types'

export default async function chainInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<ChainInfo> {
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
  ]);
  return {
    chain: chain.toString(),
    nodeName: nodeName.toString(),
    nodeVersion: nodeVersion.toString(),
  };
}

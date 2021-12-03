import type { ServerContext } from '../../types';

export default async function chainInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: ServerContext,
) {
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

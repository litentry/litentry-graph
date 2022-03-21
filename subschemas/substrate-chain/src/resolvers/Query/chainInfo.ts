import type {ChainInfo} from '../../generated/resolvers-types';
import {formatBalance} from '../../services/substrateChainService';
import type {Context} from '../../types';

export default async function chainInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<ChainInfo> {
  const [chain, nodeName, nodeVersion, existentialDeposit] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
    api.consts.balances.existentialDeposit,
  ]);
  const registry = api.registry;

  return {
    chain: chain.toString(),
    nodeName: nodeName.toString(),
    nodeVersion: nodeVersion.toString(),
    democracyEnactmentPeriod: api.consts?.democracy?.enactmentPeriod?.toString(),
    crowdloanMinContribution: api.consts?.crowdloan?.minContribution?.toString(),
    auctionsLeasePeriodSlot: api.consts?.auctions?.leasePeriodsPerSlot?.toString(),
    democracyMinimumDeposit: api.consts?.democracy?.minimumDeposit?.toString(),
    slotsLeasePeriod: api.consts?.slots?.leasePeriod?.toString(),
    registry: {
      decimals: registry.chainDecimals[0] ?? 0,
      token: registry.chainTokens[0] ?? '',
    },
    formattedExistentialDeposit: formatBalance(api, existentialDeposit),
  };
}

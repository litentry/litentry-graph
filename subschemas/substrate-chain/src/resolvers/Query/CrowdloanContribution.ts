import type {CrowdloanContribution} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {formatNumber} from '@polkadot/util';

export type PartialCrowdloanContribution = Omit<CrowdloanContribution, 'contributorsCount'>;

export async function crowdloanContribution(
  parent: {paraId?: string},
  args: {paraId?: string},
  {api}: Context,
): Promise<CrowdloanContribution> {
  const paraId = parent?.paraId || args?.paraId;
  if (!paraId) {
    throw new Error('paraId is required');
  }

  const contribution = await api.derive.crowdloan.contributions(paraId);

  return {
    paraId,
    contributorsCount: formatNumber(contribution.contributorsHex.length),
  };
}

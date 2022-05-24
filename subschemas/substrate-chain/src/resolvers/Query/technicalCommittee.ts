import type { TechnicalCommitteeSummary } from '../../generated/resolvers-types';
import type { Context } from '../../types';
import { formatNumber } from '@polkadot/util';
import type { PartialAccountInfo } from './account';

interface PartialTechnicalCommitteeSummary extends Omit<TechnicalCommitteeSummary, 'members'> {
  members: PartialAccountInfo[];
}

const COLLECTIVE_TYPE = 'technicalCommittee';

export async function technicalCommitteeSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<PartialTechnicalCommitteeSummary> {
  const [proposalCount, proposalHashes, members] = await Promise.all([
    api.derive[COLLECTIVE_TYPE].proposalCount(),
    api.derive[COLLECTIVE_TYPE].proposalHashes(),
    api.derive[COLLECTIVE_TYPE]?.members(),
  ]);

  return {
    memberCount: members.length,
    activeProposalCount: proposalHashes.length,
    totalProposalCount: formatNumber(proposalCount),
    members: members.map((accountId) => ({ address: accountId.toString() })),
  };
}

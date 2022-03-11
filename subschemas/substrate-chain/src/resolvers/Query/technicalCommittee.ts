import type {TechnicalCommitteeSummary} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {AccountsService} from '../../services/accountsService';
import {formatNumber} from '@polkadot/util';

const COLLECTIVE_TYPE = 'technicalCommittee';

export async function technicalCommitteeSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<TechnicalCommitteeSummary> {
  const [proposalCount, proposalHashes, members] = await Promise.all([
    api.derive[COLLECTIVE_TYPE].proposalCount(),
    api.derive[COLLECTIVE_TYPE].proposalHashes(),
    api.derive[COLLECTIVE_TYPE]?.members(),
  ]);

  const accountsService = new AccountsService(api);

  const committeeMembers = await Promise.all(
    members.map((accountId) => accountsService.getAccount(accountId.toString())),
  );

  return {
    memberCount: members.length,
    activeProposalCount: proposalHashes.length,
    totalProposalCount: formatNumber(proposalCount),
    members: committeeMembers,
  };
}

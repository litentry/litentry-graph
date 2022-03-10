import type {TechCommitteeSummary} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {AccountsService} from '../../services/accountsService';
import {formatNumber} from '@polkadot/util';

export async function techCommitteeSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<TechCommitteeSummary> {
  const [proposalCount, proposalHashes, members] = await Promise.all([
    api.derive['technicalCommittee'].proposalCount(),
    api.derive['technicalCommittee'].proposalHashes(),
    api.derive['technicalCommittee']?.members(),
  ]);

  const accountsService = new AccountsService(api);

  const committeeMembers = await Promise.all(
    members.map((accountId) => accountsService.getAccount(accountId.toString())),
  );

  return {
    memberCount: members.length,
    activeProposal: proposalHashes.length,
    totalProposal: formatNumber(proposalCount),
    members: committeeMembers,
  };
}

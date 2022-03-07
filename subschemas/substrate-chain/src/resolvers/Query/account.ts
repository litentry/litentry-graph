import type {Account, SubAccount, Voter, CouncilVote} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {AccountsService} from '../../services/accountsService';
import {formatBalance} from '../../services/substrateChainService';

export type PartialSubAccount = Omit<SubAccount, 'account'>;
export type PartialVoter = Omit<Voter, 'account'>;

interface CouncilVoteInfo extends Omit<CouncilVote, 'votes'> {
  votes: PartialVoter[];
}
interface PartialAccount extends Omit<Account, 'subAccounts' | 'councilVote'> {
  subAccounts: PartialSubAccount[];
  councilVote: CouncilVoteInfo;
}

export async function account(
  parent: {address?: string},
  args: {address?: string},
  {api}: Context,
): Promise<PartialAccount> {
  const accountsService = new AccountsService(api);
  const address = parent?.address || args?.address;

  if (!address) {
    throw new Error('address is required');
  }

  const account = await accountsService.getAccount(address);

  const subAccountsData = await api.query.identity.subsOf(address);
  const subAccounts = subAccountsData[1].map((accountId) => ({address: accountId.toString()}));

  const voteData = await api.derive.council.votesOf(address);
  const votes = voteData.votes.map((accountId) => ({address: accountId.toString()}));

  return {
    ...account,
    subAccounts,
    councilVote: {
      stake: voteData.stake.toString(),
      formattedStake: formatBalance(api, voteData.stake),
      votes,
    },
  };
}

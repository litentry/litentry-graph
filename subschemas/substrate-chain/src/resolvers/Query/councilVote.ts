import type {CouncilVote} from '../../generated/resolvers-types';
import {formatBalance} from '../../services/substrateChainService';
import type {Context} from '../../types';
import type {PartialAccountInfo} from './account';
interface CouncilVoteInfo extends Omit<CouncilVote, 'votes'> {
  votes: PartialAccountInfo[];
}

export async function councilVote(
  parent: {address?: string},
  args: {address?: string},
  {api}: Context,
): Promise<CouncilVoteInfo> {
  const address = parent?.address || args?.address;

  if (!address) {
    throw new Error('address is required');
  }

  const voteData = await api.derive.council.votesOf(address);
  const votes = voteData.votes.map((accountId) => ({address: accountId.toString()}));

  return {
    stake: voteData.stake.toString(),
    formattedStake: formatBalance(api, voteData.stake),
    votes,
  };
}

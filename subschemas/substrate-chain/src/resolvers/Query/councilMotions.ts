import type {Context} from '../../types';
import type {CouncilMotion, VotingStatus, MotionVotes} from '../../generated/resolvers-types';
import type {BlockNumber} from '@polkadot/types/interfaces';
import type {Votes} from '@polkadot/types/interfaces';
import {getCallParams} from '../../utils/call';
import {getBlockTime} from '../../services/substrateChainService';
import {AccountsService} from '../../services/accountsService';
import {isFunction} from '@polkadot/util';
import {DeriveCollectiveProposal} from '@polkadot/api-derive/types';
import type {AccountId, Balance} from '@polkadot/types/interfaces';

export async function councilMotions(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CouncilMotion[]> {
  const [motions, electionsInfo, bestNumber] = await Promise.all([
    api.derive.council.proposals(),
    api.derive.elections.info(),
    api.derive.chain.bestNumber(),
  ]);

  const accountService = new AccountsService(api);
  const councilMembers = electionsInfo.members;

  return await Promise.all(
    motions.map((motion) => {
      return getMotionDetails(motion, accountService, api, councilMembers, bestNumber);
    }),
  );
}

export async function councilMotionDetail(
  _: Record<string, never>,
  params: {hash: string},
  {api}: Context,
): Promise<CouncilMotion | null> {
  const [motion, electionsInfo, bestNumber] = await Promise.all([
    api.derive.council.proposal(params.hash),
    api.derive.elections.info(),
    api.derive.chain.bestNumber(),
  ]);

  if (!motion) {
    return null;
  }

  const accountService = new AccountsService(api);
  const councilMembers = electionsInfo.members;

  return getMotionDetails(motion, accountService, api, councilMembers, bestNumber);
}

async function getVotes(votes: Votes, accountsService: AccountsService, api: Context['api']): Promise<MotionVotes> {
  const ayes = votes?.ayes
    ? await Promise.all(votes.ayes.map((account) => accountsService.getAccount(account.toString())))
    : [];
  const nays = votes?.nays
    ? await Promise.all(votes.nays.map((account) => accountsService.getAccount(account.toString())))
    : [];

  return {
    index: votes.index.toNumber(),
    threshold: votes.threshold.toNumber(),
    ayes,
    nays,
    end: votes.end.toString(),
    endTime: getBlockTime(api, votes.end).timeStringParts,
  };
}

function getVotingStatus(
  votes: Votes,
  memberCount: number,
  bestNumber: BlockNumber,
  api: Context['api'],
): VotingStatus {
  if (!votes.end) {
    return {
      hasFailed: false,
      hasPassed: false,
      isCloseable: false,
      isVoteable: true,
      remainingBlocks: undefined,
      remainingBlocksTime: undefined,
      status: 'Voteable',
    };
  }

  const section = 'council';
  const isEnd = bestNumber.gte(votes.end);
  const hasPassed = votes.threshold.lten(votes.ayes.length);
  const hasFailed = votes.threshold.gtn(Math.abs(memberCount - votes.nays.length));
  const isCloseable = isFunction(api.tx[section].close)
    ? api.tx[section].close.meta.args.length === 4 // current-generation
      ? isEnd || hasPassed || hasFailed
      : isEnd
    : false;
  const isVoteable = !isEnd;
  const remainingBlocks = votes.end.sub(bestNumber);
  const remainingBlocksTime = getBlockTime(api, remainingBlocks).timeStringParts;

  const status = isCloseable
    ? 'Closable'
    : isVoteable
    ? 'Voteable'
    : hasFailed
    ? 'Closed'
    : hasPassed
    ? 'Passed'
    : 'Open';

  return {
    hasFailed,
    hasPassed,
    isCloseable,
    isVoteable,
    remainingBlocks: remainingBlocks.toString(),
    remainingBlocksTime,
    status,
  };
}

async function getMotionDetails(
  motion: DeriveCollectiveProposal,
  accountService: AccountsService,
  api: Context['api'],
  councilMembers: [AccountId, Balance][],
  bestNumber: BlockNumber,
): Promise<CouncilMotion> {
  const proposal = {
    hash: String(motion.proposal.hash),
    ...getCallParams(motion.proposal),
  };

  return {
    hash: String(motion.hash),
    proposal,
    votes: motion.votes ? await getVotes(motion.votes, accountService, api) : undefined,
    votingStatus: motion.votes ? getVotingStatus(motion.votes, councilMembers.length, bestNumber, api) : undefined,
  };
}

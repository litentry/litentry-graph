import type { Context } from '../../types';
import type { CouncilMotion, MotionProposal, VotingStatus, ProposalVotes } from '../../generated/resolvers-types';
import type { BlockNumber } from '@polkadot/types/interfaces';
import type { Votes } from '@polkadot/types/interfaces';
import { getCallParams, getMotionProposalTreasuryInfo } from '../../utils/call';
import { getBlockTime } from '../../services/substrateChainService';
import { isFunction } from '@polkadot/util';
import { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces';
import type { PartialAccountInfo } from './account';

interface PartialMotionVotes extends Omit<ProposalVotes, 'ayes' | 'nays'> {
  ayes: PartialAccountInfo[];
  nays: PartialAccountInfo[];
}

interface PartialMotionProposal extends Omit<MotionProposal, 'beneficiary' | 'proposer'> {
  beneficiary?: PartialAccountInfo;
  proposer?: PartialAccountInfo;
}

interface PartialCouncilMotion extends Omit<CouncilMotion, 'proposal' | 'votes'> {
  proposal: PartialMotionProposal;
  votes?: PartialMotionVotes;
}

export async function councilMotions(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<PartialCouncilMotion[]> {
  const [motions, electionsInfo, bestNumber] = await Promise.all([
    api.derive.council.proposals(),
    api.derive.elections.info(),
    api.derive.chain.bestNumber(),
  ]);

  const councilMembers = electionsInfo.members;

  return Promise.all(
    motions.map((motion) => {
      return getMotionDetails(motion, api, councilMembers, bestNumber);
    }),
  );
}

export async function councilMotionDetail(
  _: Record<string, never>,
  params: { hash: string },
  { api }: Context,
): Promise<PartialCouncilMotion | null> {
  const [motion, electionsInfo, bestNumber] = await Promise.all([
    api.derive.council.proposal(params.hash),
    api.derive.elections.info(),
    api.derive.chain.bestNumber(),
  ]);

  if (!motion) {
    return null;
  }

  const councilMembers = electionsInfo.members;

  return getMotionDetails(motion, api, councilMembers, bestNumber);
}

function getVotes(votes: Votes, api: Context['api']): PartialMotionVotes {
  return {
    hash: votes.hash.toString(),
    threshold: votes.threshold.toNumber(),
    ayes: votes.ayes.map((accountId) => ({ address: accountId.toString() })),
    nays: votes.nays.map((accountId) => ({ address: accountId.toString() })),
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
  api: Context['api'],
  councilMembers: [AccountId, Balance][],
  bestNumber: BlockNumber,
): Promise<PartialCouncilMotion> {
  const treasuryInfo = await getMotionProposalTreasuryInfo(motion.proposal, api);

  const proposal = {
    hash: motion.proposal.hash.toString(),
    ...getCallParams(motion.proposal),
    ...treasuryInfo,
    index: motion.votes?.index.toString(),
  };

  return {
    proposal,
    votes: motion.votes ? getVotes(motion.votes, api) : undefined,
    votingStatus: motion.votes ? getVotingStatus(motion.votes, councilMembers.length, bestNumber, api) : undefined,
  };
}

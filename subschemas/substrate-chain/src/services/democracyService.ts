import type {
  SubstrateDemocracyReferenda,
  SubstrateDemocracyProposal,
  SubstrateDemocracyReferendaVote,
} from '../generated/governance-types';
import type { LaunchPeriod, DemocracyReferendum, DemocracyReferendumVote } from '../generated/resolvers-types';
import type { PartialDemocracyProposal } from '../resolvers/Query/democracy';
import { DemocracyReferendumStatus, DemocracyProposalStatus } from '../generated/resolvers-types';
import { AccountsService } from './accountsService';
import { formatBalance } from './substrateChainService';
import { Context } from '../types';
import { bnToBn, BN_ONE, BN_HUNDRED } from '@polkadot/util';
import type { BlockNumber } from '@polkadot/types/interfaces';
import type { u32 } from '@polkadot/types';
import { getBlockTime } from './substrateChainService';

export function getLaunchPeriod(api: Context['api'], launchPeriod: u32, bestNumber: BlockNumber): LaunchPeriod {
  const progress = bestNumber.mod(launchPeriod).iadd(BN_ONE);
  const timeLeft = launchPeriod.sub(progress);
  const { timeStringParts, formattedTime } = getBlockTime(api, timeLeft);

  const progressPercent = progress
    .mul(BN_HUNDRED)
    .div(launchPeriod ?? BN_ONE)
    .toNumber();

  return {
    progressPercent,
    timeLeft: formattedTime,
    timeLeftParts: timeStringParts,
  };
}

function processReferendumVote(
  votes: SubstrateDemocracyReferendaVote[],
  api: Context['api'],
): DemocracyReferendumVote[] {
  return votes.map((vote) => ({
    id: vote.id,
    aye: vote.aye,
    formattedAye: formatBalance(api, vote.aye),
    nay: vote.nay,
    formattedNay: formatBalance(api, vote.nay),
    voter: vote.account.id,
    blockNumber: vote.blockNumber,
    date: vote.date,
  }));
}

function getAyePercent(aye: string, nay: string) {
  const ayeBn = bnToBn(aye);
  const nayBn = bnToBn(nay);
  const total = ayeBn.add(nayBn);
  return ayeBn.mul(BN_HUNDRED).div(total).toNumber();
}

export function processDemocracyReferendum(
  referendum: SubstrateDemocracyReferenda,
  api: Context['api'],
): DemocracyReferendum {
  const status = `${referendum.status.charAt(0).toUpperCase()}${referendum.status.slice(
    1,
  )}` as DemocracyReferendumStatus;
  return {
    id: referendum.id,
    title: referendum.title ?? '',
    description: referendum.description ?? '',
    date: referendum.date,
    aye: referendum.aye,
    formattedAye: formatBalance(api, referendum.aye),
    nay: referendum.nay,
    formattedNay: formatBalance(api, referendum.nay),
    status: DemocracyReferendumStatus[status],
    blockNumber: referendum.blockNumber,
    voteThreshold: referendum.voteThreshold,
    updatedAt: referendum.updatedAt,
    votes: referendum.votes?.length ? processReferendumVote(referendum.votes, api) : [],
    ayePercent: getAyePercent(referendum.aye, referendum.nay),
  };
}

export async function processDemocracyProposal(
  proposal: SubstrateDemocracyProposal,
  accountsService: AccountsService,
  api: Context['api'],
): Promise<PartialDemocracyProposal> {
  const status = `${proposal.status.charAt(0).toUpperCase()}${proposal.status.slice(1)}` as DemocracyProposalStatus;
  const proposer = await accountsService.getAccount(proposal.account.id);

  return {
    id: proposal.id,
    proposer,
    blockNumber: proposal.blockNumber,
    depositAmount: proposal.depositAmount,
    formattedDepositAmount: formatBalance(api, proposal.depositAmount),
    title: proposal.title ?? '',
    description: proposal.description ?? '',
    proposalHash: proposal.proposalHash,
    proposalIndex: proposal.proposalIndex,
    status: DemocracyProposalStatus[status],
    tabledAtBlock: proposal.tabledAtBlock,
    date: proposal.date,
    updatedAt: proposal.updatedAt,
    seconds: proposal.seconds.map((second) => ({ address: second.account.id })),
  };
}

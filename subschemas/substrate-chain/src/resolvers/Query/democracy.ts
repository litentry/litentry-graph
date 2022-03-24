import type {DeriveProposal, DeriveReferendumExt} from '@polkadot/api-derive/types';
import type {u32} from '@polkadot/types';
import type {BlockNumber} from '@polkadot/types/interfaces';
import {BN, BN_HUNDRED, BN_ONE} from '@polkadot/util';
import type {
  DemocracyProposal,
  DemocracyReferendum,
  DemocracySummary,
  LaunchPeriodInfo,
} from '../../generated/resolvers-types';
import {formatBalance, getBlockTime} from '../../services/substrateChainService';
import {Context} from '../../types';
import {getCallParams} from '../../utils/call';
import {notEmpty} from '../../utils/notEmpty';
import type {PartialAccountInfo} from './account';

interface ProposalInfo extends Omit<DemocracyProposal, 'seconds' | 'proposer'> {
  seconds: PartialAccountInfo[];
  proposer: PartialAccountInfo;
}

export async function democracySummary(
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<DemocracySummary> {
  const {api} = context;
  const [referendumIds, activeProposals, publicPropCount, referendumTotal, bestNumber] = await Promise.all([
    api.derive.democracy.referendumIds(),
    api.derive.democracy.proposals(),
    api.query.democracy.publicPropCount(),
    api.query.democracy.referendumCount(),
    api.derive.chain.bestNumber(),
  ]);

  return {
    activeProposals: activeProposals.length,
    proposals: publicPropCount.toString(),
    referendums: referendumTotal.toString(),
    activeReferendums: referendumIds.length,
    launchPeriodInfo: getLaunchPeriodInfo(api, api.consts.democracy.launchPeriod, bestNumber),
  };
}

function getLaunchPeriodInfo(api: Context['api'], launchPeriod: u32, bestNumber: BlockNumber): LaunchPeriodInfo {
  const progress = bestNumber.mod(launchPeriod).iadd(BN_ONE);
  const timeLeft = launchPeriod.sub(progress);
  const {timeStringParts, formattedTime} = getBlockTime(api, timeLeft);

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

function formatProposalData(proposal: DeriveProposal, api: Context['api']): ProposalInfo | null {
  const imageProposal = proposal.image?.proposal;

  return {
    balance: proposal.balance?.toString(),
    formattedBalance: proposal?.balance ? formatBalance(api, proposal.balance) : undefined,
    seconds: proposal.seconds.map((account) => ({
      address: account.toString(),
    })),
    index: proposal.index.toString(),
    proposer: {address: String(proposal.proposer)},
    hash: String(imageProposal?.hash),
    ...(imageProposal ? getCallParams(imageProposal) : {}),
  };
}

export async function democracyProposals(
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<ProposalInfo[]> {
  const {api} = context;
  const activeProposals = await api.derive.democracy.proposals();
  return activeProposals.map((proposal) => formatProposalData(proposal, api)).filter(notEmpty);
}

export async function democracyProposal(
  _: Record<string, never>,
  {index}: {index: string},
  {api}: Context,
): Promise<ProposalInfo | null> {
  const activeProposals = await api.derive.democracy.proposals();
  const proposal = activeProposals.find((proposal) => proposal.index.toString() === index);

  if (proposal) {
    return formatProposalData(proposal, api);
  }

  return null;
}

function formatReferendumData(
  referendum: DeriveReferendumExt,
  api: Context['api'],
  bestNumber: BlockNumber,
): DemocracyReferendum | null {
  const imageProposal = referendum.image?.proposal;
  const remainBlock = bestNumber ? referendum.status.end.sub(bestNumber).isub(BN_ONE) : undefined;
  const {timeStringParts: endPeriod} = getBlockTime(api, remainBlock);

  const enactBlock = bestNumber ? referendum?.status.end.add(referendum.status.delay).sub(bestNumber) : undefined;
  const {timeStringParts: activatePeriod} = getBlockTime(api, enactBlock);

  const ayePercent = !referendum.votedTotal.isZero()
    ? referendum.allAye
        .reduce((total: BN, {balance}) => total.add(balance), new BN(0))
        .muln(10000)
        .div(referendum.votedTotal)
        .toNumber() / 100
    : 0;

  return {
    endPeriod,
    activatePeriod,
    votedAye: referendum.votedAye.toString(),
    formattedVotedAye: formatBalance(api, referendum.votedAye),
    votedNay: referendum.votedNay.toString(),
    formattedVotedNay: formatBalance(api, referendum.votedNay),
    voteCountAye: referendum.voteCountAye.toString(),
    voteCountNay: referendum.voteCountNay.toString(),
    ayePercent,
    index: referendum.index.toString(),
    hash: String(imageProposal?.hash),
    ...(imageProposal ? getCallParams(imageProposal) : {}),
  };
}

export async function democracyReferendums(
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<DemocracyReferendum[]> {
  const {api} = context;
  const [activeReferendums, bestNumber] = await Promise.all([
    api.derive.democracy.referendums(),
    api.derive.chain.bestNumber(),
  ]);

  return activeReferendums.map((referendum) => formatReferendumData(referendum, api, bestNumber)).filter(notEmpty);
}

export async function democracyReferendum(
  _: Record<string, never>,
  {index}: {index: string},
  {api}: Context,
): Promise<DemocracyReferendum | null> {
  const [activeReferendums, bestNumber] = await Promise.all([
    api.derive.democracy.referendums(),
    api.derive.chain.bestNumber(),
  ]);
  const referendum = activeReferendums.find((referendum) => referendum.index.toString() === index);

  if (referendum) {
    return formatReferendumData(referendum, api, bestNumber);
  }

  return null;
}

import type {u32} from '@polkadot/types';
import type {DeriveProposal, DeriveReferendumExt} from '@polkadot/api-derive/types';
import type {BlockNumber} from '@polkadot/types/interfaces';
import type {DemocracySummary, Proposal, Referendum, LaunchPeriodInfo} from '../../generated/resolvers-types';

import {Context} from '../../types';
import {getCallParams, formatCallMeta} from '../../utils/call';
import {notEmpty} from '../../utils/notEmpty';
import {BN_ONE, BN_HUNDRED} from '@polkadot/util';
import {getBlockTime} from '../../services/substrateChainService';

interface ProposalInfo extends Omit<Proposal, 'seconds' | 'proposer'> {
  seconds: PartialProposalSecond[];
  proposer: PartialProposer;
}

export type PartialProposalSecond = {
  address: string;
};

export type PartialProposer = {
  address: string;
};

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

function formatProposalData(proposal: DeriveProposal): ProposalInfo | null {
  const imageProposal = proposal.image?.proposal;

  if (imageProposal) {
    const meta = formatCallMeta(imageProposal.registry.findMetaCall(imageProposal.callIndex).meta);
    return {
      meta,
      balance: proposal.balance?.toString(),
      seconds: proposal.seconds.map((account) => ({
        address: account.toString(),
      })),
      index: proposal.index.toString(),
      proposer: {address: String(proposal.proposer)},
      hash: String(imageProposal.hash),
      ...getCallParams(imageProposal),
    };
  }

  return null;
}

export async function democracyProposals(
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<ProposalInfo[]> {
  const {api} = context;
  const activeProposals = await api.derive.democracy.proposals();
  return activeProposals.map(formatProposalData).filter(notEmpty);
}

export async function democracyProposal(
  _: Record<string, never>,
  {index}: {index: string},
  {api}: Context,
): Promise<ProposalInfo | null> {
  const activeProposals = await api.derive.democracy.proposals();
  const proposal = activeProposals.find((proposal) => proposal.index.toString() === index);

  if (proposal) {
    return formatProposalData(proposal);
  }

  return null;
}

function formatReferendumData(
  referendum: DeriveReferendumExt,
  api: Context['api'],
  bestNumber: BlockNumber,
): Referendum | null {
  const imageProposal = referendum.image?.proposal;
  if (imageProposal) {
    const remainBlock = bestNumber ? referendum.status.end.sub(bestNumber).isub(BN_ONE) : undefined;
    const {timeStringParts: endPeriod} = getBlockTime(api, remainBlock);

    const enactBlock = bestNumber ? referendum?.status.end.add(referendum.status.delay).sub(bestNumber) : undefined;
    const {timeStringParts: activatePeriod} = getBlockTime(api, enactBlock);

    const meta = formatCallMeta(imageProposal.registry.findMetaCall(imageProposal.callIndex).meta);
    return {
      meta,
      endPeriod,
      activatePeriod,
      votedAye: referendum.votedAye.toString(),
      votedNay: referendum.votedNay.toString(),
      voteCountAye: referendum.voteCountAye.toString(),
      voteCountNay: referendum.voteCountNay.toString(),
      index: referendum.index.toString(),
      hash: String(imageProposal.hash),
      ...getCallParams(imageProposal),
    };
  }

  return null;
}

export async function democracyReferendums(
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<Referendum[]> {
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
): Promise<Referendum | null> {
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

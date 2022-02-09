import {BN} from '@polkadot/util';
import type {BountyStatus as BountyStatusType} from '@polkadot/types/interfaces';
import type {Context} from '../../types';
import type {BountiesSummary, Bounty, BountyStatus} from '../../generated/resolvers-types';
import {formatBalance, getBlockTime} from '../../services/substrateChainService';
import {BN_ONE, BN_ZERO, BN_HUNDRED} from '@polkadot/util';
import {DeriveBounty} from '@polkadot/api-derive/types';
import {ApiPromise} from '@polkadot/api';

export async function bountiesSummary(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<BountiesSummary> {
  const bestNumber = await api.derive.chain.bestNumber();
  const deriveBounties = await api.derive.bounties.bounties();
  const bountyCount = await (api.query.bounties || api.query.treasury).bountyCount();
  const activeBounties = deriveBounties.length;
  const pastBounties = bountyCount.subn(activeBounties);
  const totalValue = (deriveBounties || []).reduce((total, {bounty: {value}}) => total.iadd(value), new BN(0));

  const spendPeriod = api.consts.treasury.spendPeriod;
  const progress = spendPeriod && bestNumber ? bestNumber.mod(spendPeriod).iadd(BN_ONE) : BN_ZERO;
  const timeLeft = spendPeriod?.sub(progress);
  const {timeStringParts} = getBlockTime(api, timeLeft);
  const progressPercent = progress
    .mul(BN_HUNDRED)
    .div(spendPeriod ?? BN_ONE)
    .toNumber();

  return {
    bountyCount: bountyCount.toString(),
    activeBounties: activeBounties.toString(),
    pastBounties: pastBounties.toString(),
    totalValue: totalValue.toString(),
    formattedTotalValue: formatBalance(api, totalValue),
    progressPercent,
    timeLeft: timeStringParts,
  };
}

interface BountyInfo extends Omit<Bounty, 'proposer' | 'bountyStatus'> {
  proposer: {address: string};
  bountyStatus: BountyStatusInfo;
}

function extractBountyData({bounty, description, index}: DeriveBounty, api: ApiPromise): BountyInfo {
  return {
    index: index.toString(),
    proposer: {address: bounty.proposer.toString()},
    value: bounty.value.toString(),
    formattedValue: formatBalance(api, bounty.value),
    fee: bounty.fee.toString(),
    formattedFee: formatBalance(api, bounty.fee),
    curatorDeposit: bounty.curatorDeposit.toString(),
    formattedCuratorDeposit: formatBalance(api, bounty.curatorDeposit),
    bond: bounty.bond.toString(),
    formattedBond: formatBalance(api, bounty.bond),
    bountyStatus: getBountyStatus(bounty.status, api),
    description,
  };
}

export async function bounties(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<BountyInfo[]> {
  const deriveBounties = await api.derive.bounties.bounties();
  return deriveBounties.map((bounty) => extractBountyData(bounty, api));
}

export async function bounty(
  _: Record<string, string>,
  {index}: {index: string},
  {api}: Context,
): Promise<BountyInfo | null> {
  const deriveBounties = await api.derive.bounties.bounties();
  const bountyData = deriveBounties.find((bounty) => bounty.index.toString() === index);

  if (bountyData) {
    return extractBountyData(bountyData, api);
  }

  return null;
}

interface BountyStatusInfo extends Omit<BountyStatus, 'curator' | 'beneficiary'> {
  curator?: PartialCurator;
  beneficiary?: PartialBeneficiary;
}

export type PartialCurator = {
  address: string;
};

export type PartialBeneficiary = {
  address: string;
};

const getBountyStatus = (status: BountyStatusType, api: ApiPromise): BountyStatusInfo => {
  let result = {};

  if (status.isCuratorProposed) {
    result = {
      ...result,
      status: 'CuratorProposed',
      curator: {address: status.asCuratorProposed.curator.toString()},
    };
  }

  if (status.isActive) {
    result = {
      ...result,
      status: 'Active',
      curator: {address: status.asActive.curator.toString()},
      updateDue: status.asActive.updateDue.toString(),
      updateDueTime: getBlockTime(api, status.asActive.updateDue).timeStringParts,
    };
  }

  if (status.isPendingPayout) {
    result = {
      ...result,
      beneficiary: {address: status.asPendingPayout.beneficiary.toString()},
      status: 'PendingPayout',
      curator: {address: status.asPendingPayout.curator.toString()},
      unlockAt: status.asPendingPayout.unlockAt.toString(),
      unlockAtTime: getBlockTime(api, status.asPendingPayout.unlockAt),
    };
  }

  return result;
};

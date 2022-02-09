import {BN} from '@polkadot/util';
import type {BountyStatus as BountyStatusType} from '@polkadot/types/interfaces';
import type {Context} from '../../types';
import type {BountiesSummary, Bounty, BountyStatus} from '../../generated/resolvers-types';
import {formatBalance, getBlockTime} from '../../services/substrateChainService';
import {BN_ONE, BN_ZERO, BN_HUNDRED} from '@polkadot/util';

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
  proposer: {address: string}
  bountyStatus: BountyStatusInfo
}

export async function bounties(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<BountyInfo[]> {
  const deriveBounties = await api.derive.bounties.bounties();
  return deriveBounties.map(({bounty, description, index}) => ({
    index: index.toString(),
    proposer: {address: bounty.proposer.toString()},
    value: bounty.value.toString(),
    fee: bounty.fee.toString(),
    curatorDeposit: bounty.curatorDeposit.toString(),
    bond: bounty.bond.toString(),
    bountyStatus: getBountyStatus(bounty.status),
    description,
  }));
}

export async function bounty(
  _: Record<string, string>,
  {index}: {index: string},
  {api}: Context,
): Promise<BountyInfo | null> {
  const deriveBounties = await api.derive.bounties.bounties();
  const bountyData = deriveBounties.find((bounty) => bounty.index.toString() === index);

  if (bountyData) {
    const {bounty, description, index} = bountyData;
    return {
      index: index.toString(),
      proposer: {address: bounty.proposer.toString()},
      value: bounty.value.toString(),
      fee: bounty.fee.toString(),
      curatorDeposit: bounty.curatorDeposit.toString(),
      bond: bounty.bond.toString(),
      bountyStatus: getBountyStatus(bounty.status),
      description,
    };
  }

  return null;
}

interface BountyStatusInfo extends Omit<BountyStatus, 'curator' | 'beneficiary'> {
  curator?: PartialCurator
  beneficiary?: PartialBeneficiary
};

export type PartialCurator = {
  address: string
}

export type PartialBeneficiary = {
  address: string
}

const getBountyStatus = (status: BountyStatusType): BountyStatusInfo => {
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
    };
  }

  if (status.isPendingPayout) {
    result = {
      ...result,
      beneficiary: {address: status.asPendingPayout.beneficiary.toString()},
      status: 'PendingPayout',
      curator: {address: status.asPendingPayout.curator.toString()},
      unlockAt: status.asPendingPayout.unlockAt.toString(),
    };
  }

  return result;
};

import {BN} from '@polkadot/util';
import type {BountyStatus as BountyStatusType, BlockNumber} from '@polkadot/types/interfaces';
import type {Context} from '../../types';
import type {BountiesSummary, Bounty, BountyStatus} from '../../generated/resolvers-types';
import {formatBalance, getBlockTime} from '../../services/substrateChainService';
import {BN_ONE, BN_ZERO, BN_HUNDRED, bnToBn} from '@polkadot/util';
import type {DeriveBounty} from '@polkadot/api-derive/types';
import type {ApiPromise} from '@polkadot/api';
import type {PartialNestedAccount} from './account';

export async function bountiesSummary(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<BountiesSummary> {
  const [bestNumber, deriveBounties, bountyCount] = await Promise.all([
    api.derive.chain.bestNumber(),
    api.derive.bounties.bounties(),
    (api.query.bounties || api.query.treasury).bountyCount(),
  ]);
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

  const bountyConsts = api.consts.bounties || api.consts.treasury;
  const bountyDepositBase = bountyConsts.bountyDepositBase;
  const bountyValueMinimum = bountyConsts.bountyValueMinimum;
  const dataDepositPerByte = bountyConsts.dataDepositPerByte;
  const maximumReasonLength = bountyConsts.maximumReasonLength;

  return {
    bountyCount: bountyCount.toString(),
    activeBounties: activeBounties.toString(),
    pastBounties: pastBounties.toString(),
    totalValue: totalValue.toString(),
    formattedTotalValue: formatBalance(api, totalValue),
    progressPercent,
    timeLeft: timeStringParts,
    bountyDepositBase: bountyDepositBase.toString(),
    bountyValueMinimum: bountyValueMinimum.toString(),
    dataDepositPerByte: dataDepositPerByte.toString(),
    maximumReasonLength: maximumReasonLength.toString(),
  };
}

interface PartialBountyStatus extends Omit<BountyStatus, 'curator' | 'beneficiary'> {
  curator?: PartialNestedAccount;
  beneficiary?: PartialNestedAccount;
}
interface BountyInfo extends Omit<Bounty, 'proposer' | 'bountyStatus'> {
  proposer: PartialNestedAccount;
  bountyStatus: PartialBountyStatus;
}

function extractBountyData(
  {bounty, description, index}: DeriveBounty,
  api: ApiPromise,
  bestNumber: BlockNumber,
): BountyInfo {
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
    bountyStatus: getBountyStatus(bounty.status, api, bestNumber),
    description,
  };
}

export async function bounties(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<BountyInfo[]> {
  const deriveBounties = await api.derive.bounties.bounties();
  const bestNumber = await api.derive.chain.bestNumber();
  return deriveBounties.map((bounty) => extractBountyData(bounty, api, bestNumber));
}

export async function bounty(
  _: Record<string, string>,
  {index}: {index: string},
  {api}: Context,
): Promise<BountyInfo | null> {
  const bestNumber = await api.derive.chain.bestNumber();
  const deriveBounties = await api.derive.bounties.bounties();
  const bountyData = deriveBounties.find((bounty) => bounty.index.toString() === index);

  if (bountyData) {
    return extractBountyData(bountyData, api, bestNumber);
  }

  return null;
}

const getBountyStatus = (status: BountyStatusType, api: ApiPromise, bestNumber: BlockNumber): PartialBountyStatus => {
  let result: PartialBountyStatus = {
    status: status.type,
  };

  if (status.isCuratorProposed) {
    result = {
      ...result,
      status: 'CuratorProposed',
      curator: {address: status.asCuratorProposed.curator.toString()},
    };
  }

  if (status.isActive) {
    const updateDue = status.asActive.updateDue;
    const blocksUntilUpdate = updateDue?.sub(bnToBn(bestNumber));
    const {timeStringParts} = getBlockTime(api, blocksUntilUpdate);

    result = {
      ...result,
      status: 'Active',
      curator: {address: status.asActive.curator.toString()},
      updateDue: status.asActive.updateDue.toString(),
      updateDueTime: timeStringParts,
    };
  }

  if (status.isPendingPayout) {
    const unlockAt = status.asPendingPayout.unlockAt;
    const blocksUntilPayout = unlockAt?.sub(bnToBn(bestNumber));
    const {timeStringParts} = getBlockTime(api, blocksUntilPayout);

    result = {
      ...result,
      beneficiary: {address: status.asPendingPayout.beneficiary.toString()},
      status: 'PendingPayout',
      curator: {address: status.asPendingPayout.curator.toString()},
      unlockAt: status.asPendingPayout.unlockAt.toString(),
      unlockAtTime: timeStringParts,
    };
  }

  return result;
};

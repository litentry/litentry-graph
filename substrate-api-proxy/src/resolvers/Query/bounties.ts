
import {BN} from '@polkadot/util';
import type {BountyStatus} from '@polkadot/types/interfaces';
import type { ServerContext } from '../../types';

type BountiesSummary = {
  activeBounties: number
  bountyCount: number
  pastBounties: number
  totalValue: number
  treasurySpendPeriod: number
}

export async function bountiesSummary(
  _: Record<string, string>,
  __: Record<string, string>,
  { api }: ServerContext
): Promise<BountiesSummary> {
  const deriveBounties = await api.derive.bounties.bounties();
  const bountyCount = await (api.query.bounties || api.query.treasury).bountyCount();
  const activeBounties = deriveBounties.length;
  const pastBounties = bountyCount.subn(activeBounties);
  const totalValue = (deriveBounties || []).reduce((total, {bounty: {value}}) => total.iadd(value), new BN(0));

  return {
    bountyCount: bountyCount.toNumber(),
    activeBounties,
    pastBounties: pastBounties.toNumber(),
    totalValue: totalValue.toNumber(),
    treasurySpendPeriod: api.consts.treasury.spendPeriod.toNumber(),
  };
}


type StatusName = 'Active' | 'Approved' | 'CuratorProposed' | 'Funded' | 'PendingPayout' | 'Proposed';

type BountyStatusInfo = {
  beneficiary?: string;
  status: StatusName;
  curator?: string;
  unlockAt?: number;
  updateDue?: number;
}

type Bounty = {
  index: number;
  proposer: string;
  value: number;
  fee: number;
  curatorDeposit: number;
  bond: number;
  bountyStatus: BountyStatusInfo;
  description: string;
};

export async function bounties(
  _: Record<string, string>,
  __: Record<string, string>,
  { api }: ServerContext
): Promise<Bounty[]> {
  const deriveBounties = await api.derive.bounties.bounties();
  return deriveBounties.map(({bounty, description, index}) => ({
    index: index.toNumber(),
    proposer: bounty.proposer.toString(),
    value: bounty.value.toNumber(),
    fee: bounty.fee.toNumber(),
    curatorDeposit: bounty.curatorDeposit.toNumber(),
    bond: bounty.bond.toNumber(),
    bountyStatus: getBountyStatus(bounty.status),
    description,
  }))
}

export async function bounty(
  _: Record<string, string>,
  { index }: { index: number },
  serverContext: ServerContext,
): Promise<Bounty> {
  const bountiesList = await bounties({}, {}, serverContext)
  return bountiesList.find((bounty) => bounty.index === index) as Bounty
}

const getBountyStatus = (status: BountyStatus): BountyStatusInfo => {
  const statusAsString = status.type as StatusName;

  let result: BountyStatusInfo = {
    beneficiary: undefined,
    status: statusAsString,
    curator: undefined,
    unlockAt: undefined,
    updateDue: undefined,
  };

  if (status.isCuratorProposed) {
    result = {
      ...result,
      status: 'CuratorProposed',
      curator: status.asCuratorProposed.curator.toString(),
    };
  }

  if (status.isActive) {
    result = {
      ...result,
      curator: status.asActive.curator.toString(),
      updateDue: status.asActive.updateDue.toNumber(),
    };
  }

  if (status.isPendingPayout) {
    result = {
      ...result,
      beneficiary: status.asPendingPayout.beneficiary.toString(),
      status: 'PendingPayout',
      curator: status.asPendingPayout.curator.toString(),
      unlockAt: status.asPendingPayout.unlockAt.toNumber(),
    };
  }

  return result;
};

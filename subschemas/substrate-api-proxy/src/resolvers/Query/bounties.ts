
import {BN} from '@polkadot/util';
import type {BountyStatus} from '@polkadot/types/interfaces';
import type { ServerContext } from '../../types';

type BountiesSummary = {
  activeBounties: number
  bountyCount: string
  pastBounties: string
  totalValue: string
  treasurySpendPeriod: string
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
    bountyCount: bountyCount.toString(),
    activeBounties,
    pastBounties: pastBounties.toString(),
    totalValue: totalValue.toString(),
    treasurySpendPeriod: api.consts.treasury.spendPeriod.toString(),
  };
}


type StatusName = 'Active' | 'Approved' | 'CuratorProposed' | 'Funded' | 'PendingPayout' | 'Proposed';

type BountyStatusInfo = {
  beneficiary?: string;
  status: StatusName;
  curator?: string;
  unlockAt?: string;
  updateDue?: string;
}

type Bounty = {
  index: string;
  proposer: string;
  value: string;
  fee: string;
  curatorDeposit: string;
  bond: string;
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
    index: index.toString(),
    proposer: bounty.proposer.toString(),
    value: bounty.value.toString(),
    fee: bounty.fee.toString(),
    curatorDeposit: bounty.curatorDeposit.toString(),
    bond: bounty.bond.toString(),
    bountyStatus: getBountyStatus(bounty.status),
    description,
  }))
}

export async function bounty(
  _: Record<string, string>,
  { index }: { index: string },
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
      updateDue: status.asActive.updateDue.toString(),
    };
  }

  if (status.isPendingPayout) {
    result = {
      ...result,
      beneficiary: status.asPendingPayout.beneficiary.toString(),
      status: 'PendingPayout',
      curator: status.asPendingPayout.curator.toString(),
      unlockAt: status.asPendingPayout.unlockAt.toString(),
    };
  }

  return result;
};
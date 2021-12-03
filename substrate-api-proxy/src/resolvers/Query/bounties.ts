
import {BN} from '@polkadot/util';
import {u32} from '@polkadot/types'
import {BountyStatus, BountyIndex, AccountId, BlockNumber, Balance} from '@polkadot/types/interfaces';
import type { ServerContext } from '../../types';

export async function bountiesSummary(
  _: undefined,
  __: undefined,
  { api }: ServerContext
): Promise<
{
  activeBounties: number
  bountyIndex: u32
  pastBounties: BN
  totalValue: BN
  treasurySpendPeriod: u32
}
> {
  const deriveBounties = await api.derive.bounties.bounties();
  const bountyIndex = await (api.query.bounties || api.query.treasury).bountyCount();
  const activeBounties = deriveBounties.length;
  const pastBounties = bountyIndex.subn(activeBounties);
  const totalValue = (deriveBounties || []).reduce((total, {bounty: {value}}) => total.iadd(value), new BN(0));

  return {
    bountyIndex,
    activeBounties,
    pastBounties,
    totalValue,
    treasurySpendPeriod: api.consts.treasury.spendPeriod,
  };
}


type StatusName = 'Active' | 'Approved' | 'CuratorProposed' | 'Funded' | 'PendingPayout' | 'Proposed';

type BountyStatusInfo = {
  beneficiary?: AccountId;
  status: StatusName;
  curator?: AccountId;
  unlockAt?: BlockNumber;
  updateDue?: BlockNumber;
}

type Bounty = {
  index: BountyIndex;
  proposer: AccountId;
  value: Balance;
  fee: Balance;
  curatorDeposit: Balance;
  bond: Balance;
  bountyStatus: BountyStatusInfo;
  description: string;
};

export async function bounties(
  _: undefined,
  __: undefined,
  { api }: ServerContext
): Promise<Bounty[]> {
  const deriveBounties = await api.derive.bounties.bounties();
  return deriveBounties.map(({bounty, description, index}) => {
    return {
      index,
      proposer: bounty.proposer,
      value: bounty.value,
      fee: bounty.fee,
      curatorDeposit: bounty.curatorDeposit,
      bond: bounty.bond,
      bountyStatus: getBountyStatus(bounty.status),
      description,
    }
  })
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
      curator: status.asCuratorProposed.curator,
    };
  }

  if (status.isActive) {
    result = {
      ...result,
      curator: status.asActive.curator,
      updateDue: status.asActive.updateDue,
    };
  }

  if (status.isPendingPayout) {
    result = {
      ...result,
      beneficiary: status.asPendingPayout.beneficiary,
      status: 'PendingPayout',
      curator: status.asPendingPayout.curator,
      unlockAt: status.asPendingPayout.unlockAt,
    };
  }

  return result;
};
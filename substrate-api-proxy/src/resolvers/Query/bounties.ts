
import {BN} from '@polkadot/util';
import {u32} from '@polkadot/types'
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
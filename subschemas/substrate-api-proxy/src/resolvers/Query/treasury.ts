import type { ServerContext } from '../../types';
import {u8aConcat, BN_MILLION} from '@polkadot/util';
import {AccountId} from '@polkadot/types/interfaces';
import {DeriveTreasuryProposal, DeriveCollectiveProposal} from '@polkadot/api-derive/types'
import type {TreasurySummary, Treasury} from '../../generated/resolvers-types'

const EMPTY_U8A_32 = new Uint8Array(32);

export async function treasurySummary(
  _: Record<string, string>,
  __: Record<string, string>,
  { api }: ServerContext
  ): Promise<TreasurySummary> {
    const proposals = await api.derive.treasury.proposals();

    const treasuryAccount = u8aConcat(
      'modl',
      api.consts.treasury && api.consts.treasury.palletId ? api.consts.treasury.palletId.toU8a(true) : 'py/trsry',
      EMPTY_U8A_32,
    ).subarray(0, 32) as AccountId;

    const treasuryBalance = await api.derive.balances.account(treasuryAccount);

    const burn =
      treasuryBalance?.freeBalance.gtn(0) && !api.consts.treasury.burn.isZero()
        ? api.consts.treasury.burn.mul(treasuryBalance?.freeBalance).div(BN_MILLION)
        : null;

    return {
      activeProposals: proposals.proposals.length,
      proposalCount: proposals.proposalCount.toString(),
      approvedProposals: proposals.approvals.length,
      spendPeriod: api.consts.treasury.spendPeriod.toString(),
      treasuryBalance: {
        accountId: treasuryBalance.accountId.toString(),
        accountNonce: treasuryBalance.accountNonce.toString(),
        freeBalance: treasuryBalance.freeBalance.toString(),
        frozenFee: treasuryBalance.frozenFee.toString(),
        frozenMisc: treasuryBalance.frozenMisc.toString(),
        reservedBalance: treasuryBalance.reservedBalance.toString(),
        votingBalance: treasuryBalance.votingBalance.toString(),
      },
      burn: burn?.toString(),
    };
}

function processTreasuryCouncils(councils: DeriveCollectiveProposal[]) {
  return councils.map((council) => ({
    hash: council.hash.toString(),
    votes: {
      index: council.votes?.index.toString(),
      threshold: council.votes?.threshold.toString(),
      ayes: council.votes?.ayes.map(aye => aye.toString()),
      nays: council.votes?.nays.map(nay => nay.toString()),
      end: council.votes?.end.toString(),
    },
    callIndex: council.proposal.callIndex.toString(),
  }))
}

function processProposals(proposals: DeriveTreasuryProposal[]) {
  return proposals.map((data) => ({
    id: data.id.toString(),
    proposal: {
      proposer: data.proposal.proposer.toString(),
      value: data.proposal.value.toString(),
      beneficiary: data.proposal.beneficiary.toString(),
      bond: data.proposal.bond.toString(),
    },
    councils: processTreasuryCouncils(data.council)
  }))
}


export async function treasury(
  _: Record<string, string>,
  __: Record<string, string>,
  { api }: ServerContext
  ): Promise<Treasury> {
    const proposals = await api.derive.treasury.proposals();

    return {
      approvals: processProposals(proposals.approvals),
      proposals: processProposals(proposals.proposals),
    }
}
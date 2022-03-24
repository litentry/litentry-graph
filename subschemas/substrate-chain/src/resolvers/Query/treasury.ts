import type {Context} from '../../types';
import type {
  TreasurySummary,
  Treasury,
  SpendPeriod,
  TreasuryProposal,
  PalletProposal,
} from '../../generated/resolvers-types';
import {u8aConcat, bnToBn, BN_MILLION, BN_ONE, BN_ZERO} from '@polkadot/util';
import {AccountId, BlockNumber} from '@polkadot/types/interfaces';
import {DeriveTreasuryProposal, DeriveCollectiveProposal} from '@polkadot/api-derive/types';
import {formatBalance, getBlockTime} from '../../services/substrateChainService';
import type {PartialAccountInfo} from './account';

const EMPTY_U8A_32 = new Uint8Array(32);

export async function treasurySummary(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<TreasurySummary> {
  const proposals = await api.derive.treasury.proposals();

  const treasuryAccount = u8aConcat(
    'modl',
    api.consts.treasury && api.consts.treasury.palletId ? api.consts.treasury.palletId.toU8a(true) : 'py/trsry',
    EMPTY_U8A_32,
  ).subarray(0, 32) as AccountId;

  const treasuryBalance = await api.derive.balances.account(treasuryAccount);
  const bestNumber = await api.derive.chain.bestNumber();

  const burn =
    treasuryBalance?.freeBalance.gtn(0) && !api.consts.treasury.burn.isZero()
      ? api.consts.treasury.burn.mul(treasuryBalance?.freeBalance).div(BN_MILLION)
      : null;

  return {
    activeProposals: proposals.proposals.length,
    totalProposals: proposals.proposalCount.toNumber(),
    approvedProposals: proposals.approvals.length,
    spendPeriod: createSpendPeriod(api, bestNumber),
    treasuryBalance: {
      accountId: treasuryBalance.accountId.toString(),
      accountNonce: treasuryBalance.accountNonce.toString(),
      freeBalance: formatBalance(api, treasuryBalance.freeBalance),
      frozenFee: formatBalance(api, treasuryBalance.frozenFee),
      frozenMisc: formatBalance(api, treasuryBalance.frozenMisc),
      reservedBalance: formatBalance(api, treasuryBalance.reservedBalance),
      votingBalance: formatBalance(api, treasuryBalance.votingBalance),
    },
    nextBurn: formatBalance(api, burn ?? BN_ZERO, true),
  };
}

function createSpendPeriod(api: Context['api'], bestNumber: BlockNumber): SpendPeriod {
  const spendPeriod = api.consts.treasury.spendPeriod;
  const {timeStringParts: periodParts} = getBlockTime(api, spendPeriod);
  const total = spendPeriod || BN_ONE;
  const value = bestNumber?.mod(spendPeriod?.toBn() ?? BN_ONE);
  const angle = total.gtn(0)
    ? bnToBn(value || 0)
        .muln(36000)
        .div(total)
        .toNumber() / 100
    : 0;
  const percentage = Math.floor((angle * 100) / 360);
  const {formattedTime: termLeft, timeStringParts: termLeftParts} = getBlockTime(api, total.sub(value || BN_ONE));

  return {
    period: periodParts[0],
    percentage,
    termLeft,
    termLeftParts,
  };
}

function processTreasuryCouncils(councils: DeriveCollectiveProposal[]) {
  return councils.map((council) => ({
    hash: council.hash.toString(),
    votes: {
      index: council.votes?.index.toString(),
      threshold: council.votes?.threshold.toString(),
      ayes: council.votes?.ayes.map((aye) => aye.toString()),
      nays: council.votes?.nays.map((nay) => nay.toString()),
      end: council.votes?.end.toString(),
    },
    callIndex: council.proposal.callIndex.toString(),
  }));
}

function processProposals(api: Context['api'], proposals: DeriveTreasuryProposal[]) {
  return proposals.map((data) => ({
    id: data.id.toString(),
    proposal: {
      proposer: {address: data.proposal.proposer.toString()},
      value: formatBalance(api, data.proposal.value),
      beneficiary: {address: data.proposal.beneficiary.toString()},
      bond: formatBalance(api, data.proposal.bond),
    },
    councils: processTreasuryCouncils(data.council),
  }));
}

interface PartialPalletProposal extends Omit<PalletProposal, 'proposer' | 'beneficiary'> {
  proposer: PartialAccountInfo;
  beneficiary: PartialAccountInfo;
}

interface PartialTreasuryProposal extends Omit<TreasuryProposal, 'proposal'> {
  proposal: PartialPalletProposal;
}

interface PartialTreasury extends Omit<Treasury, 'proposals' | 'approvals'> {
  proposals: PartialTreasuryProposal[];
  approvals: PartialTreasuryProposal[];
}

export async function treasury(
  _: Record<string, string>,
  __: Record<string, string>,
  {api}: Context,
): Promise<PartialTreasury> {
  const treasuryProposals = await api.derive.treasury.proposals();

  const approvals = processProposals(api, treasuryProposals.approvals);
  const proposals = processProposals(api, treasuryProposals.proposals);

  return {
    approvals,
    proposals,
  };
}

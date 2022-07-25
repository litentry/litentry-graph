import type { SubstrateDemocracyReferenda, SubstrateDemocracyProposal } from '../generated/governance-types';
import type { DemocracyReferendum } from '../generated/resolvers-types';
import type { PartialDemocracyProposal } from '../resolvers/Query/democracy';
import { DemocracyReferendumStatus, DemocracyProposalStatus } from '../generated/resolvers-types';
import { AccountsService } from './accountsService';
import { formatBalance } from './substrateChainService';
import { Context } from '../types';

export function processDemocracyReferendum(referendum: SubstrateDemocracyReferenda, api: Context['api']): DemocracyReferendum {
  const status = `${referendum.status.charAt(0).toUpperCase()}${referendum.status.slice(
    1,
  )}` as DemocracyReferendumStatus;
  return {
    id: referendum.id,
    title: referendum.title ?? '',
    description: referendum.description ?? '',
    date: referendum.date,
    aye: referendum.aye,
    formattedAye: formatBalance(api, referendum.aye),
    nay: referendum.nay,
    formattedNay: formatBalance(api, referendum.nay),
    status: DemocracyReferendumStatus[status],
    blockNumber: referendum.blockNumber,
    voteThreshold: referendum.voteThreshold,
    updatedAt: referendum.updatedAt,
  };
}

export async function processDemocracyProposal(
  proposal: SubstrateDemocracyProposal,
  accountsService: AccountsService,
  api: Context['api']
): Promise<PartialDemocracyProposal> {
  const status = `${proposal.status.charAt(0).toUpperCase()}${proposal.status.slice(1)}` as DemocracyProposalStatus;
  const proposer = await accountsService.getAccount(proposal.account.id);

  return {
    id: proposal.id,
    proposer,
    blockNumber: proposal.blockNumber,
    depositAmount: proposal.depositAmount,
    formattedDepositAmount: formatBalance(api, proposal.depositAmount),
    title: proposal.title ?? '',
    description: proposal.description ?? '',
    proposalHash: proposal.proposalHash,
    proposalIndex: proposal.proposalIndex,
    status: DemocracyProposalStatus[status],
    tabledAtBlock: proposal.tabledAtBlock,
    date: proposal.date,
    updatedAt: proposal.updatedAt,
    seconds: proposal.seconds.map((second) => ({ address: second.account.id })),
  };
}

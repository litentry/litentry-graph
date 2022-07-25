import type { Context } from '../../types';
import { gql, request } from 'graphql-request';
import type {
  DemocracySummary,
  LaunchPeriod,
  DemocracyReferendum,
  DemocracyProposal,
} from '../../generated/resolvers-types';
import {
  DemocracyReferendumOrderByInput,
  DemocracyReferendumStatus,
  DemocracyProposalOrderByInput,
  DemocracyProposalStatus,
} from '../../generated/resolvers-types';
import type { SubstrateDemocracyReferenda, SubstrateDemocracyProposal } from '../../generated/governance-types';
import {
  SubstrateNetwork,
  SubstrateDemocracyReferendaStatus,
  SubstrateDemocracyProposalStatus,
} from '../../generated/governance-types';
import { getBlockTime } from '../../services/substrateChainService';
import type { BlockNumber } from '@polkadot/types/interfaces';
import type { u32 } from '@polkadot/types';
import { BN_HUNDRED, BN_ONE } from '@polkadot/util';
import { getChain } from '../../services/substrateChainService';
import { processDemocracyProposal, processDemocracyReferendum } from '../../services/democracyService';
import { AccountsService } from '../../services/accountsService';
import type { PartialAccountInfo } from './account';

export async function democracySummary(
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<DemocracySummary> {
  const { api } = context;
  const [referendumIds, activeProposals, publicPropCount, referendumTotal, bestNumber] = await Promise.all([
    api.derive.democracy.referendumIds(),
    api.derive.democracy.proposals(),
    api.query.democracy.publicPropCount(),
    api.query.democracy.referendumCount(),
    api.derive.chain.bestNumber(),
  ]);

  return {
    activeProposals: activeProposals.length,
    proposals: publicPropCount.toString(),
    referendums: referendumTotal.toString(),
    activeReferendums: referendumIds.length,
    launchPeriod: getLaunchPeriod(api, api.consts.democracy.launchPeriod, bestNumber),
  };
}

function getLaunchPeriod(api: Context['api'], launchPeriod: u32, bestNumber: BlockNumber): LaunchPeriod {
  const progress = bestNumber.mod(launchPeriod).iadd(BN_ONE);
  const timeLeft = launchPeriod.sub(progress);
  const { timeStringParts, formattedTime } = getBlockTime(api, timeLeft);

  const progressPercent = progress
    .mul(BN_HUNDRED)
    .div(launchPeriod ?? BN_ONE)
    .toNumber();

  return {
    progressPercent,
    timeLeft: formattedTime,
    timeLeftParts: timeStringParts,
  };
}

const GOVERNANCE_ENDPOINT = 'https://squid.litentry.io/governance/graphql';

const REFERENDUMS_QUERY = gql`
  query getReferendums(
    $status: [SubstrateDemocracyReferendaStatus!]!
    $network: SubstrateNetwork!
    $limit: Int!
    $offset: Int!
    $orderBy: [SubstrateDemocracyReferendaOrderByInput!]!
  ) {
    substrateDemocracyReferendas(
      where: { status_in: $status, network_eq: $network }
      limit: $limit
      offset: $offset
      orderBy: $orderBy
    ) {
      id
      title
      description
      date
      aye
      nay
      status
      blockNumber
      updatedAt
      voteThreshold
    }
  }
`;

type ReferendumsQueryParams = {
  status?: DemocracyReferendumStatus[] | null;
  limit?: number | null;
  offset?: number | null;
  orderBy?: DemocracyReferendumOrderByInput | null;
};

export async function democracyReferendums(
  _: Record<string, never>,
  { status, limit = 10, offset = 0, orderBy = DemocracyReferendumOrderByInput.DateDesc }: ReferendumsQueryParams,
  { api }: Context,
): Promise<DemocracyReferendum[]> {
  const chain = getChain(api);

  let referendumStatus = [
    SubstrateDemocracyReferendaStatus.Cancelled,
    SubstrateDemocracyReferendaStatus.Executed,
    SubstrateDemocracyReferendaStatus.NotPassed,
    SubstrateDemocracyReferendaStatus.Passed,
    SubstrateDemocracyReferendaStatus.Executed,
  ];
  if (status) {
    referendumStatus = status.map((st) => SubstrateDemocracyReferendaStatus[st]);
  }

  const variables = {
    status: referendumStatus,
    network: chain === 'polkadot' ? SubstrateNetwork.Polkadot : SubstrateNetwork.Kusama,
    limit,
    offset,
    orderBy,
  };

  const { substrateDemocracyReferendas } = await request<{
    substrateDemocracyReferendas: SubstrateDemocracyReferenda[];
  }>(GOVERNANCE_ENDPOINT, REFERENDUMS_QUERY, variables);

  return substrateDemocracyReferendas.map((referendum) => processDemocracyReferendum(referendum, api));
}

const REFERENDUM_QUERY = gql`
  query getReferendum($id: ID!) {
    substrateDemocracyReferendaById(id: $id) {
      id
      title
      description
      date
      aye
      nay
      status
      blockNumber
      updatedAt
      voteThreshold
      votes {
        aye
        nay
        account {
          id
        }
        blockNumber
        date
        id
      }
    }
  }
`;

export async function democracyReferendum(
  _: Record<string, never>,
  { id }: { id: string },
  { api }: Context,
): Promise<DemocracyReferendum> {
  const variables = {
    id,
  };

  const { substrateDemocracyReferendaById } = await request<{
    substrateDemocracyReferendaById: SubstrateDemocracyReferenda;
  }>(GOVERNANCE_ENDPOINT, REFERENDUM_QUERY, variables);
  return processDemocracyReferendum(substrateDemocracyReferendaById, api);
}

const PROPOSALS_QUERY = gql`
  query getProposals(
    $status: [SubstrateDemocracyProposalStatus!]!
    $network: SubstrateNetwork!
    $limit: Int!
    $offset: Int!
    $orderBy: [SubstrateDemocracyProposalOrderByInput!]!
  ) {
    substrateDemocracyProposals(
      where: { status_in: $status, network_eq: $network }
      limit: $limit
      offset: $offset
      orderBy: $orderBy
    ) {
      id
      account {
        id
      }
      blockNumber
      depositAmount
      title
      description
      proposalHash
      proposalIndex
      status
      tabledAtBlock
      date
      updatedAt
      seconds {
        account {
          id
        }
      }
    }
  }
`;

type ProposalsQueryParams = {
  status?: DemocracyProposalStatus[] | null;
  limit?: number | null;
  offset?: number | null;
  orderBy?: DemocracyProposalOrderByInput | null;
};

export interface PartialDemocracyProposal extends Omit<DemocracyProposal, 'seconds'> {
  seconds: PartialAccountInfo[];
}

export async function democracyProposals(
  _: Record<string, never>,
  { status, limit = 10, offset = 0, orderBy = DemocracyProposalOrderByInput.DateDesc }: ProposalsQueryParams,
  { api }: Context,
): Promise<PartialDemocracyProposal[]> {
  const accountsService = new AccountsService(api);
  const chain = getChain(api);

  let proposalStatus = [
    SubstrateDemocracyProposalStatus.Cancelled,
    SubstrateDemocracyProposalStatus.Proposed,
    SubstrateDemocracyProposalStatus.Tabled,
  ];
  if (status) {
    proposalStatus = status.map((st) => SubstrateDemocracyProposalStatus[st]);
  }

  const variables = {
    status: proposalStatus,
    network: chain === 'polkadot' ? SubstrateNetwork.Polkadot : SubstrateNetwork.Kusama,
    limit,
    offset,
    orderBy,
  };

  const { substrateDemocracyProposals } = await request<{
    substrateDemocracyProposals: SubstrateDemocracyProposal[];
  }>(GOVERNANCE_ENDPOINT, PROPOSALS_QUERY, variables);

  return Promise.all(
    substrateDemocracyProposals.map((proposal) => processDemocracyProposal(proposal, accountsService, api)),
  );
}

const PROPOSAL_QUERY = gql`
  query getProposal($id: ID!) {
    substrateDemocracyProposalById(id: $id) {
      id
      account {
        id
      }
      blockNumber
      depositAmount
      title
      description
      proposalHash
      proposalIndex
      status
      tabledAtBlock
      date
      updatedAt
    }
  }
`;

export async function democracyProposal(
  _: Record<string, never>,
  { id }: { id: string },
  { api }: Context,
): Promise<PartialDemocracyProposal> {
  const accountsService = new AccountsService(api);
  const variables = {
    id,
  };

  const { substrateDemocracyProposalById } = await request<{
    substrateDemocracyProposalById: SubstrateDemocracyProposal;
  }>(GOVERNANCE_ENDPOINT, PROPOSAL_QUERY, variables);
  return processDemocracyProposal(substrateDemocracyProposalById, accountsService, api);
}

// import type { DeriveProposal, DeriveReferendumExt } from '@polkadot/api-derive/types';
// import type { u32 } from '@polkadot/types';
// import type { BlockNumber } from '@polkadot/types/interfaces';
// import { BN, BN_HUNDRED, BN_ONE } from '@polkadot/util';
// import type {
//   DemocracyProposal,
//   DemocracyReferendum,
//   DemocracySummary,
//   LaunchPeriodInfo,
// } from '../../generated/resolvers-types';
// import { formatBalance, getBlockTime } from '../../services/substrateChainService';
// import { Context } from '../../types';
// import { getCallParams } from '../../utils/call';
// import { notEmpty } from '../../utils/notEmpty';
// import type { PartialAccountInfo } from './account';

// import type {SubstrateDemocracyProposalStatus, SubstrateDemocracyReferendaStatus, SubstrateDemocracyProposalOrderByInput} from '../../generated/governance-types'

// interface ProposalInfo extends Omit<DemocracyProposal, 'seconds' | 'proposer'> {
//   seconds: PartialAccountInfo[];
//   proposer: PartialAccountInfo;
// }

// export async function democracySummary(
//   _: Record<string, never>,
//   __: Record<string, never>,
//   context: Context,
// ): Promise<DemocracySummary> {
//   const { api } = context;
//   const [referendumIds, activeProposals, publicPropCount, referendumTotal, bestNumber] = await Promise.all([
//     api.derive.democracy.referendumIds(),
//     api.derive.democracy.proposals(),
//     api.query.democracy.publicPropCount(),
//     api.query.democracy.referendumCount(),
//     api.derive.chain.bestNumber(),
//   ]);

//   return {
//     activeProposals: activeProposals.length,
//     proposals: publicPropCount.toString(),
//     referendums: referendumTotal.toString(),
//     activeReferendums: referendumIds.length,
//     launchPeriodInfo: getLaunchPeriodInfo(api, api.consts.democracy.launchPeriod, bestNumber),
//   };
// }

// function getLaunchPeriodInfo(api: Context['api'], launchPeriod: u32, bestNumber: BlockNumber): LaunchPeriodInfo {
//   const progress = bestNumber.mod(launchPeriod).iadd(BN_ONE);
//   const timeLeft = launchPeriod.sub(progress);
//   const { timeStringParts, formattedTime } = getBlockTime(api, timeLeft);

//   const progressPercent = progress
//     .mul(BN_HUNDRED)
//     .div(launchPeriod ?? BN_ONE)
//     .toNumber();

//   return {
//     progressPercent,
//     timeLeft: formattedTime,
//     timeLeftParts: timeStringParts,
//   };
// }

// function formatProposalData(proposal: DeriveProposal, api: Context['api']): ProposalInfo | null {
//   const imageProposal = proposal.image?.proposal;

//   return {
//     balance: proposal.balance?.toString(),
//     formattedBalance: proposal?.balance ? formatBalance(api, proposal.balance) : undefined,
//     seconds: proposal.seconds.map((account) => ({
//       address: account.toString(),
//     })),
//     index: proposal.index.toString(),
//     proposer: { address: proposal.proposer.toString() },
//     hash: imageProposal?.hash.toString() || '',
//     ...(imageProposal ? getCallParams(imageProposal) : {}),
//   };
// }

// export async function democracyProposals(
//   _: Record<string, never>,
//   __: Record<string, never>,
//   context: Context,
// ): Promise<ProposalInfo[]> {
//   const { api } = context;
//   const activeProposals = await api.derive.democracy.proposals();
//   return activeProposals.map((proposal) => formatProposalData(proposal, api)).filter(notEmpty);
// }

// export async function democracyProposal(
//   _: Record<string, never>,
//   { index }: { index: string },
//   { api }: Context,
// ): Promise<ProposalInfo | null> {
//   const activeProposals = await api.derive.democracy.proposals();
//   const proposal = activeProposals.find((proposal) => proposal.index.toString() === index);

//   if (proposal) {
//     return formatProposalData(proposal, api);
//   }

//   return null;
// }

// function formatReferendumData(
//   referendum: DeriveReferendumExt,
//   api: Context['api'],
//   bestNumber: BlockNumber,
// ): DemocracyReferendum | null {
//   const imageProposal = referendum.image?.proposal;
//   const remainBlock = bestNumber ? referendum.status.end.sub(bestNumber).isub(BN_ONE) : undefined;
//   const { timeStringParts: endPeriod } = getBlockTime(api, remainBlock);

//   const enactBlock = bestNumber ? referendum?.status.end.add(referendum.status.delay).sub(bestNumber) : undefined;
//   const { timeStringParts: activatePeriod } = getBlockTime(api, enactBlock);

//   const ayePercent = !referendum.votedTotal.isZero()
//     ? referendum.allAye
//         .reduce((total: BN, { balance }) => total.add(balance), new BN(0))
//         .muln(10000)
//         .div(referendum.votedTotal)
//         .toNumber() / 100
//     : 0;

//   return {
//     endPeriod,
//     activatePeriod,
//     votedAye: referendum.votedAye.toString(),
//     formattedVotedAye: formatBalance(api, referendum.votedAye),
//     votedNay: referendum.votedNay.toString(),
//     formattedVotedNay: formatBalance(api, referendum.votedNay),
//     voteCountAye: referendum.voteCountAye.toString(),
//     voteCountNay: referendum.voteCountNay.toString(),
//     ayePercent,
//     index: referendum.index.toString(),
//     hash: imageProposal?.hash.toString() || '',
//     imageHash: referendum.imageHash.toString(),
//     ...(imageProposal ? getCallParams(imageProposal) : {}),
//   };
// }

// export async function democracyReferendums(
//   _: Record<string, never>,
//   __: Record<string, never>,
//   context: Context,
// ): Promise<DemocracyReferendum[]> {
//   const { api } = context;
//   const [activeReferendums, bestNumber] = await Promise.all([
//     api.derive.democracy.referendums(),
//     api.derive.chain.bestNumber(),
//   ]);

//   return activeReferendums.map((referendum) => formatReferendumData(referendum, api, bestNumber)).filter(notEmpty);
// }

// export async function democracyReferendum(
//   _: Record<string, never>,
//   { index }: { index: string },
//   { api }: Context,
// ): Promise<DemocracyReferendum | null> {
//   const [activeReferendums, bestNumber] = await Promise.all([
//     api.derive.democracy.referendums(),
//     api.derive.chain.bestNumber(),
//   ]);
//   const referendum = activeReferendums.find((referendum) => referendum.index.toString() === index);

//   if (referendum) {
//     return formatReferendumData(referendum, api, bestNumber);
//   }

//   return null;
// }

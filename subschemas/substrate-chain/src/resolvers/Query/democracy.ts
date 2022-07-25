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
import {
  processDemocracyProposal,
  processDemocracyReferendum,
} from '../../services/democracyService';
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

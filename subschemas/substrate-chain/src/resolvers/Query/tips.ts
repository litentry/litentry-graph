import type { SubstrateTip } from '../../generated/tips-types';
import { SubstrateNetwork, SubstrateTipStatus } from '../../generated/tips-types';
import type { Tip, TipStatus } from '../../generated/resolvers-types';
import { TipsOrderByInput } from '../../generated/resolvers-types';
import type { Context } from '../../types';
import { gql, request } from 'graphql-request';
import { AccountsService } from '../../services/accountsService';
import { processTip } from '../../services/tipsService';
import { getChain } from '../../services/substrateChainService';

const TIPS_ENDPOINT = 'https://squid.litentry.io/tips/graphql';

const TIPS_QUERY = gql`
  query getTips(
    $status: [SubstrateTipStatus!]!
    $network: SubstrateNetwork!
    $limit: Int!
    $offset: Int!
    $orderBy: [SubstrateTipOrderByInput!]!
  ) {
    substrateTips(
      where: { status_in: $status, network_eq: $network }
      limit: $limit
      offset: $offset
      orderBy: $orderBy
    ) {
      id
      account
      blockNumber
      closes
      createdAt
      deposit
      finder
      network
      reason
      rootAccount
      status
      tipValue
      updatedAt
      who
      tippers {
        account
        tipValue
      }
    }
  }
`;

type TipsQueryParams = {
  status?: TipStatus[] | null;
  limit?: number | null;
  offset?: number | null;
  orderBy?: TipsOrderByInput | null;
};

export async function tips(
  _: Record<string, never>,
  { status, limit = 10, offset = 0, orderBy = TipsOrderByInput.CreatedAtDesc }: TipsQueryParams,
  { api }: Context,
): Promise<Tip[]> {
  const accountsService = new AccountsService(api);
  const chain = getChain(api);

  let tipStatus = [
    SubstrateTipStatus.Closed,
    SubstrateTipStatus.Opened,
    SubstrateTipStatus.Retracted,
    SubstrateTipStatus.Slashed,
  ];
  if (status) {
    tipStatus = status.map((st) => SubstrateTipStatus[st]);
  }

  const variables = {
    status: tipStatus,
    network: chain === 'polkadot' ? SubstrateNetwork.Polkadot : SubstrateNetwork.Kusama,
    limit,
    offset,
    orderBy,
  };

  const { substrateTips } = await request<{ substrateTips: SubstrateTip[] }>(TIPS_ENDPOINT, TIPS_QUERY, variables);
  return Promise.all(substrateTips.map(async (tip) => processTip(tip, api, accountsService)));
}

const TIP_QUERY = gql`
  query getTip($id: ID!) {
    substrateTipById(id: $id) {
      id
      account
      blockNumber
      closes
      createdAt
      deposit
      finder
      network
      reason
      rootAccount
      status
      tipValue
      updatedAt
      who
      tippers {
        account
        tipValue
      }
    }
  }
`;

export async function tip(_: Record<string, never>, { id }: { id: string }, { api }: Context): Promise<Tip> {
  const accountsService = new AccountsService(api);

  const variables = {
    id,
  };

  const { substrateTipById } = await request<{ substrateTipById: SubstrateTip }>(TIPS_ENDPOINT, TIP_QUERY, variables);
  return processTip(substrateTipById, api, accountsService);
}

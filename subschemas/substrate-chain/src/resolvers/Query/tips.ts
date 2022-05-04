import {SubstrateTip, SubstrateNetwork, SubstrateTipStatus} from '../../generated/tips-types';
import type {Tip} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {gql, request} from 'graphql-request';
import {AccountsService} from '../../services/accountsService';
import {processTip} from '../../services/tipsService';
import {getChain} from '../../services/substrateChainService';

const TIPS_ENDPOINT = 'https://squid.litentry.io/tips/graphql';

const TIPS_QUERY = gql`
  query getTips($status: SubstrateTipStatus!, $network: SubstrateNetwork!) {
    substrateTips(where: {status_eq: $status, network_eq: $network}) {
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

export async function tips(_: Record<string, never>, __: Record<string, never>, {api}: Context): Promise<Tip[]> {
  const accountsService = new AccountsService(api);
  const chain = getChain(api);

  const variables = {
    status: SubstrateTipStatus.Opened,
    network: chain === 'polkadot' ? SubstrateNetwork.Polkadot : SubstrateNetwork.Kusama,
  };

  const {substrateTips} = await request<{substrateTips: SubstrateTip[]}>(TIPS_ENDPOINT, TIPS_QUERY, variables);
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

export async function tip(_: Record<string, never>, {id}: {id: string}, {api}: Context): Promise<Tip> {
  const accountsService = new AccountsService(api);

  const variables = {
    id,
  };

  const {substrateTipById} = await request<{substrateTipById: SubstrateTip}>(TIPS_ENDPOINT, TIP_QUERY, variables);
  return processTip(substrateTipById, api, accountsService);
}

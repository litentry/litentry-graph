import { request, gql } from 'graphql-request';
import { Account } from '../types/interface';

const subgraphEndpoints = [
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap',
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai',
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-sokol',
];

export async function queryPoapGraphQL(address: string, endpoints: string[]) {
  try {
    const result = await Promise.all(
      endpoints.map(async (endpoint) => {
        const graphqlQuery = gql`
          query Account($id: String!) {
            account(id: $id) {
              id
              tokensOwned
              tokens(orderBy: created, orderDirection: desc) {
                id
                event {
                  id
                }
                created
              }
            }
          }
        `;

        const variables = {
          id: address,
        };

        const data = await request(endpoint, graphqlQuery, variables);

        if (!data) {
          throw new Error(`Error calling ${endpoint}`);
        }

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        if (!data.account) {
          return {};
        }

        return data.account;
      }),
    );

    return result as Account[];
  } catch ({ message }) {
    throw new Error(message as string);
  }
}

export function sortPoapData(data: Account[], address: string) {
  const filteredData = data.filter((obj) => Object.keys(obj).length !== 0);

  if (filteredData.length === 0)
    return {
      id: address,
      tokensOwned: 0,
      tokens: [],
    };

  return filteredData.reduce((prev: Account, acc: Account) => {
    return {
      id: acc.id,
      tokensOwned: (parseInt(prev.tokensOwned) + parseInt(acc.tokensOwned)).toString(),
      tokens: [...prev.tokens, ...acc.tokens],
    };
  });
}

/* Query poap and return data */
export async function tokensByAddress(parent: unknown, { address }: { address: string }) {
  try {
    const poapData = await queryPoapGraphQL(address, subgraphEndpoints);
    const result = sortPoapData(poapData, address);

    return result;
  } catch ({ message }) {
    throw new Error(message as string);
  }
}

export default {
  tokensByAddress,
};

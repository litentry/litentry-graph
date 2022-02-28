import {request, gql} from 'graphql-request';
import {Account} from '../types/interface';

const subgraphEndpoints = [
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap',
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai',
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-sokol',
  // 'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-ropsten',
  'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-kovan',
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

        const {data} = await request(endpoint, graphqlQuery, variables);

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
  } catch ({message}) {
    throw new Error(message as string);
  }
}

export function sortPoapData(data: Account[]) {
  const result = data
    .filter((obj) => Object.keys(obj).length !== 0)
    .reduce((prev: Account, acc: Account) => ({
      id: acc.id,
      tokensOwned: (parseInt(prev.tokensOwned) + parseInt(acc.tokensOwned)).toString(),
      tokens: [...prev.tokens, ...acc.tokens],
    }));

  return result;
}

/* Query poap and return data */
export default async function poapToken(address: string) {
  try {
    const poapData = await queryPoapGraphQL(address, subgraphEndpoints);
    return sortPoapData(poapData);
  } catch ({message}) {
    throw new Error(message as string);
  }
}

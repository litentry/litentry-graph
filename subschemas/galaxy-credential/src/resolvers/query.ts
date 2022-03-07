import {request, gql} from 'graphql-request';
import {GalaxyResponse, GalaxyData, Chain} from '../types/interface';

const galaxyEndpoint = 'https://graphigo.prd.galaxy.eco/query';

export async function queryGalaxyGraphQL(address: string, chain: Chain) {
  try {
    const query = gql`
      query Address($id: String!, $chain: Chain!) {
        addressInfo(address: $id) {
          id
          address
          username
          hasEmail
          avatar
          recentParticipation(input: {onlyGasless: false}) {
            totalCount
            list {
              tx
              address {
                id
                email
                twitterUserID
                twitterUserName
              }
              status
              campaign {
                id
                name
                info
                description
                thumbnail
                status
              }
            }
          }
          eligibleCredentials {
            totalCount
            list {
              id
              name
              itemCount
              items {
                list
              }
              description
            }
          }
          nfts(option: {chain: $chain, order: DESC, orderBy: CreateTime}) {
            totalCount
            list {
              id
              name
              image
              ipfsImage
              description
              status
              createdAt
            }
          }
        }
      }
    `;

    const variables = {
      id: address,
      chain,
    };

    const response = (await request(galaxyEndpoint, query, variables)) as GalaxyResponse;

    if (!response) {
      throw new Error(`Error calling ${galaxyEndpoint}`);
    }

    if (response.errors) {
      throw new Error(response.errors[0].message);
    }

    return response.addressInfo as GalaxyData;
  } catch ({message}) {
    throw new Error(message as string);
  }
}

export async function dataByAddress(parent: unknown, {address, chain}: {address: string; chain: Chain}) {
  try {
    const result = await queryGalaxyGraphQL(address, chain);
    return {
      id: result.id,
      address: result.address,
      username: result.username,
      hasEmail: result.hasEmail,
      avatar: result.avatar,
      recentParticipation: result.recentParticipation,
      eligibleCredentials: result.eligibleCredentials,
      nfts: result.nfts,
    } as GalaxyData;
  } catch ({message}) {
    throw new Error(message as string);
  }
}

export default {
  dataByAddress,
};

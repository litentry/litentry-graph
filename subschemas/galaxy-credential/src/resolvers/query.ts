/* eslint-disable @typescript-eslint/no-unused-vars */
import {request, gql} from 'graphql-request';

const galaxyEndpoint = 'https://graphigo.prd.galaxy.eco/query';

export async function queryGalaxyGraphQL(address: string) {
  try {
    const query = gql``;

    const variables = {};

    const response = await request(galaxyEndpoint, query, variables);

    return;
  } catch ({message}) {
    throw new Error(message as string);
  }
}

/* Query poap and return data */
export async function dataByAddress(parent: unknown, {address}: {address: string}) {
  try {
    const addressHash = address;

    return;
  } catch ({message}) {
    throw new Error(message as string);
  }
}

export default {
  dataByAddress,
};

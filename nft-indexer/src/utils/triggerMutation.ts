import { createHttpLink, gql, execute, DocumentNode } from '@apollo/client';
import fetch from 'cross-fetch';
import config from '../config';

const link = createHttpLink({ uri: config.graphqlEndpoint, fetch });

type Mutations = {
  CLASS_UPDATED: DocumentNode;
  TOKEN_UPDATED: DocumentNode;
};

const MUTATIONS: Mutations = {
  TOKEN_UPDATED: gql`
    mutation TokenUpdated($input: TokenInput!) {
      tokenUpdated(token: $input) {
        _id
      }
    }
  `,
  CLASS_UPDATED: gql`
    mutation ClassUpdated($input: ClassInput!) {
      classUpdated(class: $input) {
        _id
      }
    }
  `,
};

export async function triggerMutation(
  name: keyof Mutations,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  input: any
): Promise<void> {
  // when a mutation trigger is preceeded by a mongoose fetch we want to discard these
  delete input.__v;
  delete input.__t;

  execute(link, {
    query: MUTATIONS[name],
    variables: {
      input,
    },
  }).subscribe({
    error: (error) => {
      console.log('Error:', error);
      console.log(error?.result?.errors);
    },
    complete: () => console.log(`Mutation triggered: ${name}`),
  });
}

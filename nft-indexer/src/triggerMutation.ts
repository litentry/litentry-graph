import { createHttpLink, gql, execute, DocumentNode } from '@apollo/client';
import fetch from 'cross-fetch';

const link = createHttpLink({ uri: 'http://localhost:1234/graphql', fetch });

type Mutations = {
  CLASS_CREATED: DocumentNode;
};
const MUTATIONS: Mutations = {
  CLASS_CREATED: gql`
  mutation classCreated(_id: String, type: String, owner: String) {
    addEvent(_id, type, owner) {
      _id,
      type,
      owner
    }
  }
`,
};

export async function triggerMutation(
  name: keyof Mutations,
  variables: Record<string, any>
): Promise<void> {
  const operation = {
    query: MUTATIONS[name],
    variables,
  };
  console.log(`Attempting to save event to database`);
  execute(link, operation).subscribe({
    error: (error) => {
      console.log(`Error`);
      console.log(error);
    },
    complete: () => console.log(`Save complete`),
  });
}

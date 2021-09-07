import { createHttpLink, gql, execute } from '@apollo/client';
import fetch from 'cross-fetch';

const uri = 'http://localhost:8080/graphql';
const link = createHttpLink({ uri, fetch });

const ADD_EVENT = gql`
  mutation addEvent($name: String!) {
    addEvent(name: $name) {
      _id
    }
  }
`;

export async function triggerMutation<T>(name: string, doc: T): Promise<void> {
  let query = null;
  switch (name) {
    case 'ADD_EVENT':
      query = ADD_EVENT;
      break;
    default:
      break;
  }

  if (!query) {
    throw Error('Mutation Failed: Unknown name.');
  }

  console.log(`DOC OBJECT`);
  console.log(doc);

  const operation = {
    query,
    variables: { doc },
  };

  execute(link, operation).subscribe({
    error: (error) => {
      console.log(`Error`);
      console.log(error.result);
    },
    complete: () => console.log(`Save complete`),
  });
}

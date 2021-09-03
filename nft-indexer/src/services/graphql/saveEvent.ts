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

export async function saveEvent(event: {
  name: string;
  data: unknown[];
}): Promise<void> {
  const operation = {
    query: ADD_EVENT,
    variables: { name: event.name },
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

import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = /* GraphQL */ `
  type Query {
    hello_world: String
  }
`;
const resolvers = {
  Query: {
    hello_world: () => 'Hello world',
  },
};
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

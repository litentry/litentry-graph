export default /* GraphQL */ `
  type Query {
    tokensByAddress(address: String!): TokenData!
  }

  type Tokens {
    id: String!
    event: Event!
    created: String!
  }

  type Event {
    id: String!
  }

  type TokenData {
    id: String!
    tokensOwned: String!
    tokens: Tokens!
  }
`;

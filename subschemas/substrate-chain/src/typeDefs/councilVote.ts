export default /* GraphQL */ `
  type CouncilVote {
    stake: String!
    formattedStake: String!
    votes: [NestedAccount!]!
  }

  type Query {
    councilVote(address: String!): CouncilVote!
  }
`;

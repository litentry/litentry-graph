export default /* GraphQL */ `
  type CouncilVote {
    stake: String!
    formattedStake: String!
    votes: [AccountInfo!]!
  }

  type Query {
    councilVote(address: String!): CouncilVote!
  }
`;

export default /* GraphQL */ `
  type Vote {
    address: String!
    account: Account!
  }

  type CouncilVote {
    stake: String!
    formattedStake: String!
    votes: [Vote!]!
  }

  type Query {
    councilVote(address: String!): CouncilVote!
  }
`;

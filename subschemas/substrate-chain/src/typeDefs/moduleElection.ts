export default /* GraphQL */ `
  type ModuleElection {
    module: String
    hasElections: Boolean!
    votingBondBase: String!
    formattedVotingBondBase: String!
    votingBondFactor: String!
    formattedVotingBondFactor: String!
    candidacyBond: String!
    formattedCandidacyBond: String!
  }

  extend type Query {
    moduleElection: ModuleElection!
  }
`;

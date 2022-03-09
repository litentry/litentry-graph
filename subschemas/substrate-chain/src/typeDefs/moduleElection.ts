export default /* GraphQL */ `
  type ModuleElection {
    module: String
    hasElections: Boolean!
    votingBondBase: String!
    votingBondFactor: String!
  }

  extend type Query {
    moduleElection: ModuleElection!
  }
`;

export default /* GraphQL */ `
  type ModuleElection {
    module: String
    hasElections: Boolean!
  }

  extend type Query {
    moduleElection: ModuleElection!
  }
`;

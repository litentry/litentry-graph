export default /* GraphQL */ `
  type Manager {
    address: String!
    account: Account!
  }
  type Parathread {
    id: String!
    name: String
    manager: Manager
    lease: Lease
    homepage: String
  }
  type Query {
    parathreads: [Parathread!]
  }
`;

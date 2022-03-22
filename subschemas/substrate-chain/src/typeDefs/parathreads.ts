export default /* GraphQL */ `
  type Parathread {
    id: String!
    name: String
    manager: AccountInfo
    lease: Lease
    homepage: String
  }
  type Query {
    parathreads: [Parathread!]!
  }
`;

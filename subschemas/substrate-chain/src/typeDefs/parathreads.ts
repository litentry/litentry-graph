export default /* GraphQL */ `
  type Parathread {
    id: String!
    name: String
    manager: NestedAccount
    lease: Lease
    homepage: String
  }
  type Query {
    parathreads: [Parathread!]!
  }
`;

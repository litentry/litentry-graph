export default /* GraphQL */ `
  type Conviction {
    text: String!
    value: Int!
  }

  type Query {
    convictions: [Conviction!]
  }
`;

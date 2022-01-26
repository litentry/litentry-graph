export default /* GraphQL */ `
  type Example {
    property: Boolean
    anotherProperty: String
    required: String!
  }

  type Query {
    exampleQuery(address: String!): Example
  }
`;

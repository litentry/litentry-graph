export default /* GraphQL */ `
  type Balance {
    nonce: Int!
    consumers: Int!
    providers: Int!
    sufficients: Int!
    data: AccountBalance!
  }
  type Query {
    balance(address: String!, blockNumber: Int): Balance!
  }
`;

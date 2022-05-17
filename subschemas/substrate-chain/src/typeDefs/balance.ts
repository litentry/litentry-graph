export default /* GraphQL */ `
  type BalanceData {
    total: String!
    formattedTotal: String!
    reserved: String!
    formattedReserved: String!
    free: String!
    formattedFree: String!
    feeFrozen: String!
    formattedFeeFrozen: String!
    miscFrozen: String!
    formattedMiscFrozen: String!
  }
  type Balance {
    nonce: Int!
    consumers: Int!
    providers: Int!
    sufficients: Int!
    data: BalanceData!
  }
  type Query {
    balance(address: String!, blockNumber: Int): Balance!
  }
`;

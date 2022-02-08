export default /* GraphQL */ `
  type AuctionsSummary {
    auctionsInfo: AuctionsInfo!
    latestAuction: Auction!
  }

  type AuctionsInfo {
    numAuctions: Int!
    active: Boolean!
  }

  type AuctionLeasePeriod {
    first: String!
    last: String! 
  }

  type AuctionEndingPeriod {
    endingIn: String!
    remaining: String!
    remainingPercent: Float!
  }

  type AuctionLatestBid {
    blockNumber: String!
    projectId: String!
    projectName: String!
    amount: String!
  }

  type Auction {
    leasePeriod: AuctionLeasePeriod
    endingPeriod: AuctionEndingPeriod
    raised: String!
    raisedPercent: Float!
    latestBid: AuctionLatestBid
  }

  extend type Query {
    auctionsSummary: AuctionsSummary!
  }
`;

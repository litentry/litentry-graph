export default /* GraphQL */ `
  type AuctionsSummary {
    auctionsInfo: AuctionsInfo!
    latestAuction: Auction!
  }

  type AuctionsInfo {
    numAuctions: String!
    active: Boolean!
  }

  type AuctionLeasePeriod {
    first: String!
    last: String!
  }

  type AuctionEndingPeriod {
    endingIn: [String!]!
    remaining: [String!]!
    remainingPercent: Float!
  }

  type AuctionBid {
    blockNumber: String!
    projectId: String!
    projectName: String!
    amount: String!
    isCrowdloan: Boolean!
    firstSlot: String!
    lastSlot: String!
  }

  type Auction {
    leasePeriod: AuctionLeasePeriod
    endingPeriod: AuctionEndingPeriod
    raised: String!
    raisedPercent: Float!
    winningBid: AuctionBid
  }

  extend type Query {
    auctionsSummary: AuctionsSummary!
  }
`;

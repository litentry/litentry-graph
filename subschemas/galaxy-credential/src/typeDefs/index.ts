export default /* GraphQL */ `
  type Query {
    dataByAddress(address: String!): UserData!
  }

  type UserData {
    id: String!
    address: String!
    username: String!
    hasEmail: Boolean!
    email: String!
    avatar: String!
    eligibleCredentials: EligibleCredentials!
    nfts: Nfts!
    recentParticipation: RecentParticipation!
  }

  type EligibleCredentials {
    totalCount: Int!
    list: [EligibleCredentialsList!]!
  }

  type EligibleCredentialsList {
    id: String!
    name: String!
    itemCount: Int!
    items: EligibleCredentialsItems!
    description: String!
  }

  type EligibleCredentialsItems {
    list: [String!]!
  }

  type Nfts {
    totalCount: Int!
    list: [NftsList!]!
  }

  type NftsList {
    id: String!
    name: String!
    image: String!
    ipfsImage: String
    description: String!
    status: NFTStatus!
    createdAt: String!
  }

  enum ListOrder {
    DESC
    ASC
  }

  enum ListNFTOrderBy {
    CreateTime
  }

  enum Chain {
    ETHEREUM
    ROPSTEN
    KOVAN
    RINKEBY
    GOERLI
    BSC
    BSC_TESTNET
    MATIC
    MUMBAI
    XDAI
    ARBITRUM
    ARBITRUM_TESTNET
    HECO
    HECO_TESTNET
    FANTOM
    FANTOM_TESTNET
    AVALANCHE
    AVALANCHE_TESTNET
    SOLANA
    SOLANA_DEVNET
  }

  enum NFTStatus {
    Alive
    Burned
  }

  type RecentParticipation {
    totalCount: Int!
    list: [RecentParticipationList!]!
  }

  type RecentParticipationList {
    id: ID!
    tx: String!
    address: RecentParticipationListAddress!
    status: ParticipationStatus!
    campaign: RecentParticipationListCampaign!
  }

  type RecentParticipationListAddress {
    id: String!
    email: String!
    twitterUserID: String!
    twitterUserName: String!
  }

  enum ParticipationStatus {
    Generated
    Pending
    Success
    Queueing
    Failed
  }

  type RecentParticipationListCampaign {
    id: ID!
    name: String!
    info: String!
    description: String!
    thumbnail: String!
    status: CampaignStatus!
  }

  enum CampaignStatus {
    Draft
    Deleted
    Active
    PublicActive
    PrivateActive
    Expired
  }
`;

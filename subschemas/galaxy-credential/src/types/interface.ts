export interface GalaxyResponse {
  errors?: {
    message: string;
  }[];
  addressInfo?: GalaxyData;
}

export interface GalaxyData {
  id: string;
  address: string;
  username: string;
  hasEmail: boolean;
  email: string;
  avatar: string;
  eligibleCredentials: EligibleCredentials;
  nfts: Nfts;
  recentParticipation: RecentParticipation;
}

type EligibleCredentials = {
  totalCount: number;
  list: EligibleCredentialsList[];
};

type EligibleCredentialsList = {
  id: string;
  name: string;
  itemCount: number;
  items: EligibleCredentialsItems;
  description: string;
};

type EligibleCredentialsItems = {
  list: string[];
};

type Nfts = {
  totalCount: number;
  list: NftsList[];
};

type NftsList = {
  id: string;
  name: string;
  image: string;
  ipfsImage: string;
  description: string;
  status: NFTStatus;
  createdAt: string;
};

enum NFTStatus {
  Alive,
  Burned,
}

type RecentParticipation = {
  totalCount: number;
  list: RecentParticipationList[];
};

type RecentParticipationList = {
  id: string;
  tx: string;
  address: RecentParticipationListAddress;
  status: ParticipationStatus;
  campaign: RecentParticipationListCampaign;
};

type RecentParticipationListAddress = {
  id: string;
  email: string;
  twitterUserID: string;
  twitterUserName: string;
};

enum ParticipationStatus {
  Generated,
  Pending,
  Success,
  Queueing,
  Failed,
}

type RecentParticipationListCampaign = {
  id: string;
  name: string;
  info: string;
  description: string;
  thumbnail: string;
  status: CampaignStatus;
};

enum CampaignStatus {
  Draft,
  Deleted,
  Active,
  PublicActive,
  PrivateActive,
  Expired,
}

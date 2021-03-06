import { GraphQLResolveInfo } from 'graphql';
import { PartialAccountInfo } from '../resolvers/Query/account';
import { PartialRegistrar } from '../resolvers/Query/registrars';
import { PartialCrowdloanContribution } from '../resolvers/Query/crowdloanContribution';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  address: Scalars['String'];
  balance?: Maybe<AccountBalance>;
  display: Scalars['String'];
  hasIdentity: Scalars['Boolean'];
  registration?: Maybe<DeriveAccountRegistration>;
  subAccounts?: Maybe<Array<AccountInfo>>;
};

export type AccountBalance = {
  __typename?: 'AccountBalance';
  feeFrozen: Scalars['String'];
  formattedFeeFrozen: Scalars['String'];
  formattedFree: Scalars['String'];
  formattedMiscFrozen: Scalars['String'];
  formattedReserved: Scalars['String'];
  formattedTotal: Scalars['String'];
  free: Scalars['String'];
  miscFrozen: Scalars['String'];
  reserved: Scalars['String'];
  total: Scalars['String'];
};

export type AccountInfo = {
  __typename?: 'AccountInfo';
  account: Account;
  address: Scalars['String'];
};

export type Auction = {
  __typename?: 'Auction';
  endingPeriod?: Maybe<AuctionEndingPeriod>;
  formattedRaised: Scalars['String'];
  leasePeriod?: Maybe<AuctionLeasePeriod>;
  raised: Scalars['String'];
  raisedPercent: Scalars['Float'];
  winningBid?: Maybe<AuctionBid>;
};

export type AuctionBid = {
  __typename?: 'AuctionBid';
  amount: Scalars['String'];
  blockNumber: Scalars['String'];
  firstSlot: Scalars['String'];
  isCrowdloan: Scalars['Boolean'];
  lastSlot: Scalars['String'];
  projectId: Scalars['String'];
  projectName: Scalars['String'];
};

export type AuctionEndingPeriod = {
  __typename?: 'AuctionEndingPeriod';
  endingIn: Array<Scalars['String']>;
  remaining: Array<Scalars['String']>;
  remainingPercent: Scalars['Float'];
};

export type AuctionLeasePeriod = {
  __typename?: 'AuctionLeasePeriod';
  first: Scalars['String'];
  last: Scalars['String'];
};

export type AuctionsInfo = {
  __typename?: 'AuctionsInfo';
  active: Scalars['Boolean'];
  numAuctions: Scalars['String'];
};

export type AuctionsSummary = {
  __typename?: 'AuctionsSummary';
  auctionsInfo: AuctionsInfo;
  latestAuction: Auction;
};

export type Balance = {
  __typename?: 'Balance';
  consumers: Scalars['Int'];
  data: AccountBalance;
  nonce: Scalars['Int'];
  providers: Scalars['Int'];
  sufficients: Scalars['Int'];
};

export type BountiesSummary = {
  __typename?: 'BountiesSummary';
  activeBounties: Scalars['String'];
  bountyCount: Scalars['String'];
  bountyDepositBase: Scalars['String'];
  bountyValueMinimum: Scalars['String'];
  dataDepositPerByte: Scalars['String'];
  formattedTotalValue: Scalars['String'];
  maximumReasonLength: Scalars['String'];
  pastBounties: Scalars['String'];
  progressPercent: Scalars['Int'];
  timeLeft: Array<Scalars['String']>;
  totalValue: Scalars['String'];
};

export type Bounty = {
  __typename?: 'Bounty';
  bond: Scalars['String'];
  bountyStatus: BountyStatus;
  curatorDeposit: Scalars['String'];
  description: Scalars['String'];
  fee: Scalars['String'];
  formattedBond: Scalars['String'];
  formattedCuratorDeposit: Scalars['String'];
  formattedFee: Scalars['String'];
  formattedValue: Scalars['String'];
  index: Scalars['String'];
  proposer: AccountInfo;
  value: Scalars['String'];
};

export type BountyStatus = {
  __typename?: 'BountyStatus';
  beneficiary?: Maybe<AccountInfo>;
  curator?: Maybe<AccountInfo>;
  status?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['String']>;
  unlockAtTime?: Maybe<Array<Scalars['String']>>;
  updateDue?: Maybe<Scalars['String']>;
  updateDueTime?: Maybe<Array<Scalars['String']>>;
};

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  blockNumber: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  via: Scalars['String'];
};

export type ChainInfo = {
  __typename?: 'ChainInfo';
  auctionsLeasePeriodSlot?: Maybe<Scalars['String']>;
  chain: Scalars['String'];
  crowdloanMinContribution?: Maybe<Scalars['String']>;
  democracyEnactmentPeriod?: Maybe<Scalars['String']>;
  democracyMinimumDeposit?: Maybe<Scalars['String']>;
  existentialDeposit: Scalars['String'];
  formattedExistentialDeposit: Scalars['String'];
  nodeName: Scalars['String'];
  nodeVersion: Scalars['String'];
  registry: Registry;
  slotsLeasePeriod?: Maybe<Scalars['String']>;
};

export type Conviction = {
  __typename?: 'Conviction';
  text: Scalars['String'];
  value: Scalars['Int'];
};

export type Council = {
  __typename?: 'Council';
  candidates: Array<CouncilMember>;
  desiredRunnersUp: Scalars['Int'];
  desiredSeats: Scalars['Int'];
  members: Array<CouncilMember>;
  primeMember?: Maybe<CouncilMember>;
  runnersUp: Array<CouncilMember>;
  termProgress?: Maybe<TermProgress>;
  totalCandidates: Scalars['Int'];
  totalMembers: Scalars['Int'];
  totalRunnersUp: Scalars['Int'];
};

export type CouncilMember = {
  __typename?: 'CouncilMember';
  account: Account;
  address: Scalars['String'];
  backing: Scalars['String'];
  formattedBacking: Scalars['String'];
  voters: Array<Scalars['String']>;
};

export type CouncilMotion = {
  __typename?: 'CouncilMotion';
  proposal: MotionProposal;
  votes?: Maybe<ProposalVotes>;
  votingStatus?: Maybe<VotingStatus>;
};

export type CouncilVote = {
  __typename?: 'CouncilVote';
  formattedStake: Scalars['String'];
  stake: Scalars['String'];
  votes: Array<AccountInfo>;
};

export type Crowdloan = {
  __typename?: 'Crowdloan';
  cap: Scalars['String'];
  contribution: CrowdloanContribution;
  depositor: AccountInfo;
  ending: Array<Scalars['String']>;
  firstPeriod: Scalars['String'];
  formattedCap: Scalars['String'];
  formattedRaised: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  lastPeriod: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  paraId: Scalars['String'];
  raised: Scalars['String'];
  raisedPercentage: Scalars['String'];
  status: Scalars['String'];
};

export type CrowdloanContribution = {
  __typename?: 'CrowdloanContribution';
  contributorsCount: Scalars['String'];
  paraId: Scalars['String'];
};

export enum CrowdloanStatus {
  Active = 'Active',
  Ended = 'Ended',
}

export type CrowdloanSummary = {
  __typename?: 'CrowdloanSummary';
  activeCap: Scalars['String'];
  activeProgress: Scalars['Float'];
  activeRaised: Scalars['String'];
  formattedActiveCap: Scalars['String'];
  formattedActiveRaised: Scalars['String'];
  formattedTotalCap: Scalars['String'];
  formattedTotalRaised: Scalars['String'];
  totalCap: Scalars['String'];
  totalFunds: Scalars['Int'];
  totalProgress: Scalars['Float'];
  totalRaised: Scalars['String'];
};

export type DemocracyProposal = {
  __typename?: 'DemocracyProposal';
  blockNumber: Scalars['String'];
  date: Scalars['String'];
  depositAmount: Scalars['String'];
  description: Scalars['String'];
  formattedDepositAmount: Scalars['String'];
  id: Scalars['String'];
  proposalHash: Scalars['String'];
  proposalIndex: Scalars['Int'];
  proposer: Account;
  seconds: Array<AccountInfo>;
  status: DemocracyProposalStatus;
  tabledAtBlock?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum DemocracyProposalOrderByInput {
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  TabledAtBlockAsc = 'tabledAtBlock_ASC',
  TabledAtBlockDesc = 'tabledAtBlock_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum DemocracyProposalStatus {
  Cancelled = 'Cancelled',
  Proposed = 'Proposed',
  Tabled = 'Tabled',
}

export type DemocracyReferendum = {
  __typename?: 'DemocracyReferendum';
  aye: Scalars['String'];
  ayePercent: Scalars['Float'];
  blockNumber: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  formattedAye: Scalars['String'];
  formattedNay: Scalars['String'];
  id: Scalars['String'];
  nay: Scalars['String'];
  status: DemocracyReferendumStatus;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  voteThreshold: Scalars['String'];
  votes: Array<DemocracyReferendumVote>;
};

export enum DemocracyReferendumOrderByInput {
  AyeAsc = 'aye_ASC',
  AyeDesc = 'aye_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NayAsc = 'nay_ASC',
  NayDesc = 'nay_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VoteThresholdAsc = 'voteThreshold_ASC',
  VoteThresholdDesc = 'voteThreshold_DESC',
}

export enum DemocracyReferendumStatus {
  Cancelled = 'Cancelled',
  Executed = 'Executed',
  NotPassed = 'NotPassed',
  Passed = 'Passed',
  Started = 'Started',
}

export type DemocracyReferendumVote = {
  __typename?: 'DemocracyReferendumVote';
  aye: Scalars['String'];
  blockNumber: Scalars['String'];
  date: Scalars['String'];
  formattedAye: Scalars['String'];
  formattedNay: Scalars['String'];
  id: Scalars['String'];
  nay: Scalars['String'];
  voter: Scalars['String'];
};

export type DemocracySummary = {
  __typename?: 'DemocracySummary';
  activeProposals: Scalars['Int'];
  activeReferendums: Scalars['Int'];
  launchPeriod?: Maybe<LaunchPeriod>;
  proposals: Scalars['String'];
  referendums: Scalars['String'];
};

export type DeriveAccountRegistration = {
  __typename?: 'DeriveAccountRegistration';
  display?: Maybe<Scalars['String']>;
  displayParent?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  judgements?: Maybe<Array<Maybe<RegistrationJudgement>>>;
  legal?: Maybe<Scalars['String']>;
  pgp?: Maybe<Scalars['String']>;
  riot?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type IdentityJudgement = {
  __typename?: 'IdentityJudgement';
  isErroneous?: Maybe<Scalars['Boolean']>;
  isFeePaid?: Maybe<Scalars['Boolean']>;
  isKnownGood?: Maybe<Scalars['Boolean']>;
  isLowQuality?: Maybe<Scalars['Boolean']>;
  isOutOfDate?: Maybe<Scalars['Boolean']>;
  isReasonable?: Maybe<Scalars['Boolean']>;
  isUnknown?: Maybe<Scalars['Boolean']>;
};

export type LaunchPeriod = {
  __typename?: 'LaunchPeriod';
  progressPercent: Scalars['Int'];
  timeLeft: Scalars['String'];
  timeLeftParts: Array<Scalars['String']>;
};

export type Lease = {
  __typename?: 'Lease';
  blockTime: Array<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
};

export type LeasePeriod = {
  __typename?: 'LeasePeriod';
  currentLease: Scalars['String'];
  progressPercent: Scalars['Int'];
  remainder: Scalars['String'];
  remainderBlockTime: Scalars['String'];
  remainderParts: Array<Scalars['String']>;
  totalPeriod: Scalars['String'];
};

export type ModuleElection = {
  __typename?: 'ModuleElection';
  candidacyBond: Scalars['String'];
  formattedCandidacyBond: Scalars['String'];
  formattedVotingBondBase: Scalars['String'];
  formattedVotingBondFactor: Scalars['String'];
  hasElections: Scalars['Boolean'];
  module?: Maybe<Scalars['String']>;
  votingBondBase: Scalars['String'];
  votingBondFactor: Scalars['String'];
};

export type MotionProposal = {
  __typename?: 'MotionProposal';
  args: Array<ProposalArg>;
  beneficiary?: Maybe<AccountInfo>;
  bond?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  index?: Maybe<Scalars['String']>;
  meta: Scalars['String'];
  method: Scalars['String'];
  payout?: Maybe<Scalars['String']>;
  proposer?: Maybe<AccountInfo>;
  section: Scalars['String'];
};

export type Parachain = {
  __typename?: 'Parachain';
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastBackedBlock: Scalars['String'];
  lastIncludedBlock: Scalars['String'];
  lease?: Maybe<Lease>;
  lifecycle: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nonVoters: Array<Account>;
  validators?: Maybe<ValidatorsGroup>;
};

export type ParachainsSummary = {
  __typename?: 'ParachainsSummary';
  leasePeriod: LeasePeriod;
  parachainsCount: Scalars['Int'];
  parathreadsCount: Scalars['Int'];
  proposalsCount: Scalars['Int'];
};

export type Parathread = {
  __typename?: 'Parathread';
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lease?: Maybe<Lease>;
  manager?: Maybe<AccountInfo>;
  name?: Maybe<Scalars['String']>;
};

export type Proposal = {
  __typename?: 'Proposal';
  beneficiary: AccountInfo;
  bond: Scalars['String'];
  index: Scalars['String'];
  proposer: AccountInfo;
  value: Scalars['String'];
};

export type ProposalArg = {
  __typename?: 'ProposalArg';
  name?: Maybe<Scalars['String']>;
  subCalls?: Maybe<Array<Maybe<ProposalSubCall>>>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ProposalSubCall = {
  __typename?: 'ProposalSubCall';
  args?: Maybe<Array<Maybe<ProposalArg>>>;
  meta?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

export type ProposalVotes = {
  __typename?: 'ProposalVotes';
  ayes?: Maybe<Array<AccountInfo>>;
  end?: Maybe<Scalars['String']>;
  endTime: Array<Scalars['String']>;
  hash: Scalars['String'];
  nays?: Maybe<Array<AccountInfo>>;
  threshold?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeCrowdloans: Array<Crowdloan>;
  auctionsSummary: AuctionsSummary;
  balance: Balance;
  bounties: Array<Bounty>;
  bountiesSummary: BountiesSummary;
  bounty?: Maybe<Bounty>;
  calendarEvents: Array<CalendarEvent>;
  chainInfo: ChainInfo;
  convictions?: Maybe<Array<Conviction>>;
  council: Council;
  councilMotionDetail?: Maybe<CouncilMotion>;
  councilMotions: Array<CouncilMotion>;
  councilVote: CouncilVote;
  crowdloan?: Maybe<Crowdloan>;
  crowdloanContribution: CrowdloanContribution;
  crowdloanSummary: CrowdloanSummary;
  crowdloans: Array<Crowdloan>;
  democracyProposal?: Maybe<DemocracyProposal>;
  democracyProposals?: Maybe<Array<DemocracyProposal>>;
  democracyReferendum?: Maybe<DemocracyReferendum>;
  democracyReferendums?: Maybe<Array<DemocracyReferendum>>;
  democracySummary: DemocracySummary;
  endedCrowdloans: Array<Crowdloan>;
  moduleElection: ModuleElection;
  parachain?: Maybe<Parachain>;
  parachains?: Maybe<Array<Parachain>>;
  parachainsSummary: ParachainsSummary;
  parathreads: Array<Parathread>;
  registrarsSummary: RegistrarsSummary;
  technicalCommitteeSummary: TechnicalCommitteeSummary;
  tip?: Maybe<Tip>;
  tips?: Maybe<Array<Tip>>;
  treasury: Treasury;
  treasurySummary: TreasurySummary;
};

export type QueryAccountArgs = {
  address: Scalars['String'];
};

export type QueryAccountsArgs = {
  addresses: Array<Scalars['String']>;
};

export type QueryBalanceArgs = {
  address: Scalars['String'];
  blockNumber?: InputMaybe<Scalars['Int']>;
};

export type QueryBountyArgs = {
  index: Scalars['String'];
};

export type QueryCouncilArgs = {
  address?: InputMaybe<Scalars['String']>;
};

export type QueryCouncilMotionDetailArgs = {
  hash: Scalars['String'];
};

export type QueryCouncilVoteArgs = {
  address: Scalars['String'];
};

export type QueryCrowdloanArgs = {
  paraId: Scalars['String'];
};

export type QueryCrowdloanContributionArgs = {
  paraId: Scalars['String'];
};

export type QueryCrowdloansArgs = {
  status?: InputMaybe<CrowdloanStatus>;
};

export type QueryDemocracyProposalArgs = {
  id: Scalars['String'];
};

export type QueryDemocracyProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DemocracyProposalOrderByInput>;
  status?: InputMaybe<Array<DemocracyProposalStatus>>;
};

export type QueryDemocracyReferendumArgs = {
  id: Scalars['String'];
};

export type QueryDemocracyReferendumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DemocracyReferendumOrderByInput>;
  status?: InputMaybe<Array<DemocracyReferendumStatus>>;
};

export type QueryParachainArgs = {
  id: Scalars['String'];
};

export type QueryTipArgs = {
  id: Scalars['String'];
};

export type QueryTipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TipsOrderByInput>;
  status?: InputMaybe<Array<TipStatus>>;
};

export type Registrar = {
  __typename?: 'Registrar';
  account: Account;
  address: Scalars['String'];
  fee: Scalars['String'];
  formattedFee: Scalars['String'];
  /** id: Registrar index */
  id: Scalars['String'];
};

export type RegistrarsSummary = {
  __typename?: 'RegistrarsSummary';
  formattedHighestFee: Scalars['String'];
  formattedLowestFee: Scalars['String'];
  highestFee: Scalars['String'];
  list: Array<Registrar>;
  lowestFee: Scalars['String'];
  registrarsCount: Scalars['Int'];
};

export type RegistrationJudgement = {
  __typename?: 'RegistrationJudgement';
  judgement?: Maybe<IdentityJudgement>;
  registrarIndex?: Maybe<Scalars['Int']>;
};

export type Registry = {
  __typename?: 'Registry';
  decimals: Scalars['Int'];
  token: Scalars['String'];
};

export type SpendPeriod = {
  __typename?: 'SpendPeriod';
  percentage: Scalars['Int'];
  period: Scalars['String'];
  termLeft: Scalars['String'];
  termLeftParts: Array<Scalars['String']>;
};

export type TechnicalCommitteeSummary = {
  __typename?: 'TechnicalCommitteeSummary';
  activeProposalCount: Scalars['Int'];
  memberCount: Scalars['Int'];
  members: Array<AccountInfo>;
  totalProposalCount: Scalars['String'];
};

export type TermProgress = {
  __typename?: 'TermProgress';
  percentage: Scalars['Int'];
  termDuration: Scalars['String'];
  termDurationParts: Array<Scalars['String']>;
  termLeft: Scalars['String'];
  termLeftParts?: Maybe<Array<Scalars['String']>>;
};

export type Tip = {
  __typename?: 'Tip';
  closes?: Maybe<Scalars['String']>;
  closesTime?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['String'];
  deposit?: Maybe<Scalars['String']>;
  finder?: Maybe<Account>;
  formattedDeposit?: Maybe<Scalars['String']>;
  formattedMedianTipValue?: Maybe<Scalars['String']>;
  /** id: Tip Hash */
  id: Scalars['String'];
  medianTipValue?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  status: TipStatus;
  tippers: Array<Tipper>;
  tippersCount: Scalars['Int'];
  who: Account;
};

export enum TipStatus {
  Closed = 'Closed',
  Opened = 'Opened',
  Retracted = 'Retracted',
  Slashed = 'Slashed',
}

export type Tipper = {
  __typename?: 'Tipper';
  account: Account;
  balance: Scalars['String'];
  formattedBalance: Scalars['String'];
};

export enum TipsOrderByInput {
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  ClosesAsc = 'closes_ASC',
  ClosesDesc = 'closes_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DepositAsc = 'deposit_ASC',
  DepositDesc = 'deposit_DESC',
  TipValueAsc = 'tipValue_ASC',
  TipValueDesc = 'tipValue_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type Treasury = {
  __typename?: 'Treasury';
  approvals: Array<TreasuryProposal>;
  proposals: Array<TreasuryProposal>;
};

export type TreasuryBalance = {
  __typename?: 'TreasuryBalance';
  accountId: Scalars['String'];
  accountNonce: Scalars['String'];
  freeBalance: Scalars['String'];
  frozenFee: Scalars['String'];
  frozenMisc: Scalars['String'];
  reservedBalance: Scalars['String'];
  votingBalance: Scalars['String'];
};

export type TreasuryProposal = {
  __typename?: 'TreasuryProposal';
  proposal: Proposal;
  votes: Array<ProposalVotes>;
};

export type TreasurySummary = {
  __typename?: 'TreasurySummary';
  activeProposals: Scalars['Int'];
  approvedProposals: Scalars['Int'];
  nextBurn: Scalars['String'];
  spendPeriod: SpendPeriod;
  totalProposals: Scalars['Int'];
  treasuryBalance: TreasuryBalance;
};

export type ValidatorsGroup = {
  __typename?: 'ValidatorsGroup';
  groupIndex?: Maybe<Scalars['String']>;
  validators: Array<Account>;
};

export type VotingStatus = {
  __typename?: 'VotingStatus';
  hasFailed: Scalars['Boolean'];
  hasPassed: Scalars['Boolean'];
  isCloseable: Scalars['Boolean'];
  isVoteable: Scalars['Boolean'];
  remainingBlocks?: Maybe<Scalars['String']>;
  remainingBlocksTime?: Maybe<Array<Scalars['String']>>;
  status: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<
    Omit<Account, 'subAccounts'> & { subAccounts?: Maybe<Array<ResolversTypes['AccountInfo']>> }
  >;
  AccountBalance: ResolverTypeWrapper<AccountBalance>;
  AccountInfo: ResolverTypeWrapper<PartialAccountInfo>;
  Auction: ResolverTypeWrapper<Auction>;
  AuctionBid: ResolverTypeWrapper<AuctionBid>;
  AuctionEndingPeriod: ResolverTypeWrapper<AuctionEndingPeriod>;
  AuctionLeasePeriod: ResolverTypeWrapper<AuctionLeasePeriod>;
  AuctionsInfo: ResolverTypeWrapper<AuctionsInfo>;
  AuctionsSummary: ResolverTypeWrapper<AuctionsSummary>;
  Balance: ResolverTypeWrapper<Balance>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BountiesSummary: ResolverTypeWrapper<BountiesSummary>;
  Bounty: ResolverTypeWrapper<
    Omit<Bounty, 'bountyStatus' | 'proposer'> & {
      bountyStatus: ResolversTypes['BountyStatus'];
      proposer: ResolversTypes['AccountInfo'];
    }
  >;
  BountyStatus: ResolverTypeWrapper<
    Omit<BountyStatus, 'beneficiary' | 'curator'> & {
      beneficiary?: Maybe<ResolversTypes['AccountInfo']>;
      curator?: Maybe<ResolversTypes['AccountInfo']>;
    }
  >;
  CalendarEvent: ResolverTypeWrapper<CalendarEvent>;
  ChainInfo: ResolverTypeWrapper<ChainInfo>;
  Conviction: ResolverTypeWrapper<Conviction>;
  Council: ResolverTypeWrapper<
    Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & {
      candidates: Array<ResolversTypes['CouncilMember']>;
      members: Array<ResolversTypes['CouncilMember']>;
      primeMember?: Maybe<ResolversTypes['CouncilMember']>;
      runnersUp: Array<ResolversTypes['CouncilMember']>;
    }
  >;
  CouncilMember: ResolverTypeWrapper<Omit<CouncilMember, 'account'> & { account: ResolversTypes['Account'] }>;
  CouncilMotion: ResolverTypeWrapper<
    Omit<CouncilMotion, 'proposal' | 'votes'> & {
      proposal: ResolversTypes['MotionProposal'];
      votes?: Maybe<ResolversTypes['ProposalVotes']>;
    }
  >;
  CouncilVote: ResolverTypeWrapper<Omit<CouncilVote, 'votes'> & { votes: Array<ResolversTypes['AccountInfo']> }>;
  Crowdloan: ResolverTypeWrapper<
    Omit<Crowdloan, 'contribution' | 'depositor'> & {
      contribution: ResolversTypes['CrowdloanContribution'];
      depositor: ResolversTypes['AccountInfo'];
    }
  >;
  CrowdloanContribution: ResolverTypeWrapper<PartialCrowdloanContribution>;
  CrowdloanStatus: CrowdloanStatus;
  CrowdloanSummary: ResolverTypeWrapper<CrowdloanSummary>;
  DemocracyProposal: ResolverTypeWrapper<
    Omit<DemocracyProposal, 'proposer' | 'seconds'> & {
      proposer: ResolversTypes['Account'];
      seconds: Array<ResolversTypes['AccountInfo']>;
    }
  >;
  DemocracyProposalOrderByInput: DemocracyProposalOrderByInput;
  DemocracyProposalStatus: DemocracyProposalStatus;
  DemocracyReferendum: ResolverTypeWrapper<DemocracyReferendum>;
  DemocracyReferendumOrderByInput: DemocracyReferendumOrderByInput;
  DemocracyReferendumStatus: DemocracyReferendumStatus;
  DemocracyReferendumVote: ResolverTypeWrapper<DemocracyReferendumVote>;
  DemocracySummary: ResolverTypeWrapper<DemocracySummary>;
  DeriveAccountRegistration: ResolverTypeWrapper<DeriveAccountRegistration>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IdentityJudgement: ResolverTypeWrapper<IdentityJudgement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LaunchPeriod: ResolverTypeWrapper<LaunchPeriod>;
  Lease: ResolverTypeWrapper<Lease>;
  LeasePeriod: ResolverTypeWrapper<LeasePeriod>;
  ModuleElection: ResolverTypeWrapper<ModuleElection>;
  MotionProposal: ResolverTypeWrapper<
    Omit<MotionProposal, 'beneficiary' | 'proposer'> & {
      beneficiary?: Maybe<ResolversTypes['AccountInfo']>;
      proposer?: Maybe<ResolversTypes['AccountInfo']>;
    }
  >;
  Parachain: ResolverTypeWrapper<
    Omit<Parachain, 'nonVoters' | 'validators'> & {
      nonVoters: Array<ResolversTypes['Account']>;
      validators?: Maybe<ResolversTypes['ValidatorsGroup']>;
    }
  >;
  ParachainsSummary: ResolverTypeWrapper<ParachainsSummary>;
  Parathread: ResolverTypeWrapper<Omit<Parathread, 'manager'> & { manager?: Maybe<ResolversTypes['AccountInfo']> }>;
  Proposal: ResolverTypeWrapper<
    Omit<Proposal, 'beneficiary' | 'proposer'> & {
      beneficiary: ResolversTypes['AccountInfo'];
      proposer: ResolversTypes['AccountInfo'];
    }
  >;
  ProposalArg: ResolverTypeWrapper<ProposalArg>;
  ProposalSubCall: ResolverTypeWrapper<ProposalSubCall>;
  ProposalVotes: ResolverTypeWrapper<
    Omit<ProposalVotes, 'ayes' | 'nays'> & {
      ayes?: Maybe<Array<ResolversTypes['AccountInfo']>>;
      nays?: Maybe<Array<ResolversTypes['AccountInfo']>>;
    }
  >;
  Query: ResolverTypeWrapper<{}>;
  Registrar: ResolverTypeWrapper<PartialRegistrar>;
  RegistrarsSummary: ResolverTypeWrapper<
    Omit<RegistrarsSummary, 'list'> & { list: Array<ResolversTypes['Registrar']> }
  >;
  RegistrationJudgement: ResolverTypeWrapper<RegistrationJudgement>;
  Registry: ResolverTypeWrapper<Registry>;
  SpendPeriod: ResolverTypeWrapper<SpendPeriod>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TechnicalCommitteeSummary: ResolverTypeWrapper<
    Omit<TechnicalCommitteeSummary, 'members'> & { members: Array<ResolversTypes['AccountInfo']> }
  >;
  TermProgress: ResolverTypeWrapper<TermProgress>;
  Tip: ResolverTypeWrapper<
    Omit<Tip, 'finder' | 'tippers' | 'who'> & {
      finder?: Maybe<ResolversTypes['Account']>;
      tippers: Array<ResolversTypes['Tipper']>;
      who: ResolversTypes['Account'];
    }
  >;
  TipStatus: TipStatus;
  Tipper: ResolverTypeWrapper<Omit<Tipper, 'account'> & { account: ResolversTypes['Account'] }>;
  TipsOrderByInput: TipsOrderByInput;
  Treasury: ResolverTypeWrapper<
    Omit<Treasury, 'approvals' | 'proposals'> & {
      approvals: Array<ResolversTypes['TreasuryProposal']>;
      proposals: Array<ResolversTypes['TreasuryProposal']>;
    }
  >;
  TreasuryBalance: ResolverTypeWrapper<TreasuryBalance>;
  TreasuryProposal: ResolverTypeWrapper<
    Omit<TreasuryProposal, 'proposal' | 'votes'> & {
      proposal: ResolversTypes['Proposal'];
      votes: Array<ResolversTypes['ProposalVotes']>;
    }
  >;
  TreasurySummary: ResolverTypeWrapper<TreasurySummary>;
  ValidatorsGroup: ResolverTypeWrapper<
    Omit<ValidatorsGroup, 'validators'> & { validators: Array<ResolversTypes['Account']> }
  >;
  VotingStatus: ResolverTypeWrapper<VotingStatus>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'subAccounts'> & { subAccounts?: Maybe<Array<ResolversParentTypes['AccountInfo']>> };
  AccountBalance: AccountBalance;
  AccountInfo: PartialAccountInfo;
  Auction: Auction;
  AuctionBid: AuctionBid;
  AuctionEndingPeriod: AuctionEndingPeriod;
  AuctionLeasePeriod: AuctionLeasePeriod;
  AuctionsInfo: AuctionsInfo;
  AuctionsSummary: AuctionsSummary;
  Balance: Balance;
  Boolean: Scalars['Boolean'];
  BountiesSummary: BountiesSummary;
  Bounty: Omit<Bounty, 'bountyStatus' | 'proposer'> & {
    bountyStatus: ResolversParentTypes['BountyStatus'];
    proposer: ResolversParentTypes['AccountInfo'];
  };
  BountyStatus: Omit<BountyStatus, 'beneficiary' | 'curator'> & {
    beneficiary?: Maybe<ResolversParentTypes['AccountInfo']>;
    curator?: Maybe<ResolversParentTypes['AccountInfo']>;
  };
  CalendarEvent: CalendarEvent;
  ChainInfo: ChainInfo;
  Conviction: Conviction;
  Council: Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & {
    candidates: Array<ResolversParentTypes['CouncilMember']>;
    members: Array<ResolversParentTypes['CouncilMember']>;
    primeMember?: Maybe<ResolversParentTypes['CouncilMember']>;
    runnersUp: Array<ResolversParentTypes['CouncilMember']>;
  };
  CouncilMember: Omit<CouncilMember, 'account'> & { account: ResolversParentTypes['Account'] };
  CouncilMotion: Omit<CouncilMotion, 'proposal' | 'votes'> & {
    proposal: ResolversParentTypes['MotionProposal'];
    votes?: Maybe<ResolversParentTypes['ProposalVotes']>;
  };
  CouncilVote: Omit<CouncilVote, 'votes'> & { votes: Array<ResolversParentTypes['AccountInfo']> };
  Crowdloan: Omit<Crowdloan, 'contribution' | 'depositor'> & {
    contribution: ResolversParentTypes['CrowdloanContribution'];
    depositor: ResolversParentTypes['AccountInfo'];
  };
  CrowdloanContribution: PartialCrowdloanContribution;
  CrowdloanSummary: CrowdloanSummary;
  DemocracyProposal: Omit<DemocracyProposal, 'proposer' | 'seconds'> & {
    proposer: ResolversParentTypes['Account'];
    seconds: Array<ResolversParentTypes['AccountInfo']>;
  };
  DemocracyReferendum: DemocracyReferendum;
  DemocracyReferendumVote: DemocracyReferendumVote;
  DemocracySummary: DemocracySummary;
  DeriveAccountRegistration: DeriveAccountRegistration;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IdentityJudgement: IdentityJudgement;
  Int: Scalars['Int'];
  LaunchPeriod: LaunchPeriod;
  Lease: Lease;
  LeasePeriod: LeasePeriod;
  ModuleElection: ModuleElection;
  MotionProposal: Omit<MotionProposal, 'beneficiary' | 'proposer'> & {
    beneficiary?: Maybe<ResolversParentTypes['AccountInfo']>;
    proposer?: Maybe<ResolversParentTypes['AccountInfo']>;
  };
  Parachain: Omit<Parachain, 'nonVoters' | 'validators'> & {
    nonVoters: Array<ResolversParentTypes['Account']>;
    validators?: Maybe<ResolversParentTypes['ValidatorsGroup']>;
  };
  ParachainsSummary: ParachainsSummary;
  Parathread: Omit<Parathread, 'manager'> & { manager?: Maybe<ResolversParentTypes['AccountInfo']> };
  Proposal: Omit<Proposal, 'beneficiary' | 'proposer'> & {
    beneficiary: ResolversParentTypes['AccountInfo'];
    proposer: ResolversParentTypes['AccountInfo'];
  };
  ProposalArg: ProposalArg;
  ProposalSubCall: ProposalSubCall;
  ProposalVotes: Omit<ProposalVotes, 'ayes' | 'nays'> & {
    ayes?: Maybe<Array<ResolversParentTypes['AccountInfo']>>;
    nays?: Maybe<Array<ResolversParentTypes['AccountInfo']>>;
  };
  Query: {};
  Registrar: PartialRegistrar;
  RegistrarsSummary: Omit<RegistrarsSummary, 'list'> & { list: Array<ResolversParentTypes['Registrar']> };
  RegistrationJudgement: RegistrationJudgement;
  Registry: Registry;
  SpendPeriod: SpendPeriod;
  String: Scalars['String'];
  TechnicalCommitteeSummary: Omit<TechnicalCommitteeSummary, 'members'> & {
    members: Array<ResolversParentTypes['AccountInfo']>;
  };
  TermProgress: TermProgress;
  Tip: Omit<Tip, 'finder' | 'tippers' | 'who'> & {
    finder?: Maybe<ResolversParentTypes['Account']>;
    tippers: Array<ResolversParentTypes['Tipper']>;
    who: ResolversParentTypes['Account'];
  };
  Tipper: Omit<Tipper, 'account'> & { account: ResolversParentTypes['Account'] };
  Treasury: Omit<Treasury, 'approvals' | 'proposals'> & {
    approvals: Array<ResolversParentTypes['TreasuryProposal']>;
    proposals: Array<ResolversParentTypes['TreasuryProposal']>;
  };
  TreasuryBalance: TreasuryBalance;
  TreasuryProposal: Omit<TreasuryProposal, 'proposal' | 'votes'> & {
    proposal: ResolversParentTypes['Proposal'];
    votes: Array<ResolversParentTypes['ProposalVotes']>;
  };
  TreasurySummary: TreasurySummary;
  ValidatorsGroup: Omit<ValidatorsGroup, 'validators'> & { validators: Array<ResolversParentTypes['Account']> };
  VotingStatus: VotingStatus;
};

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['AccountBalance']>, ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIdentity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['DeriveAccountRegistration']>, ParentType, ContextType>;
  subAccounts?: Resolver<Maybe<Array<ResolversTypes['AccountInfo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountBalanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountBalance'] = ResolversParentTypes['AccountBalance'],
> = {
  feeFrozen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedFeeFrozen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedFree?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedMiscFrozen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedReserved?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedTotal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  free?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  miscFrozen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reserved?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountInfo'] = ResolversParentTypes['AccountInfo'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction'],
> = {
  endingPeriod?: Resolver<Maybe<ResolversTypes['AuctionEndingPeriod']>, ParentType, ContextType>;
  formattedRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leasePeriod?: Resolver<Maybe<ResolversTypes['AuctionLeasePeriod']>, ParentType, ContextType>;
  raised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raisedPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  winningBid?: Resolver<Maybe<ResolversTypes['AuctionBid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionBidResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuctionBid'] = ResolversParentTypes['AuctionBid'],
> = {
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstSlot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCrowdloan?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastSlot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionEndingPeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuctionEndingPeriod'] = ResolversParentTypes['AuctionEndingPeriod'],
> = {
  endingIn?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  remaining?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  remainingPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionLeasePeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuctionLeasePeriod'] = ResolversParentTypes['AuctionLeasePeriod'],
> = {
  first?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionsInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuctionsInfo'] = ResolversParentTypes['AuctionsInfo'],
> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  numAuctions?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuctionsSummary'] = ResolversParentTypes['AuctionsSummary'],
> = {
  auctionsInfo?: Resolver<ResolversTypes['AuctionsInfo'], ParentType, ContextType>;
  latestAuction?: Resolver<ResolversTypes['Auction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BalanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Balance'] = ResolversParentTypes['Balance'],
> = {
  consumers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['AccountBalance'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sufficients?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountiesSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BountiesSummary'] = ResolversParentTypes['BountiesSummary'],
> = {
  activeBounties?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bountyCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bountyDepositBase?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bountyValueMinimum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dataDepositPerByte?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedTotalValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maximumReasonLength?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pastBounties?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  progressPercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeLeft?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bounty'] = ResolversParentTypes['Bounty'],
> = {
  bond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bountyStatus?: Resolver<ResolversTypes['BountyStatus'], ParentType, ContextType>;
  curatorDeposit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedBond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedCuratorDeposit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['AccountInfo'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountyStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BountyStatus'] = ResolversParentTypes['BountyStatus'],
> = {
  beneficiary?: Resolver<Maybe<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  curator?: Resolver<Maybe<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlockAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlockAtTime?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updateDue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateDueTime?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CalendarEvent'] = ResolversParentTypes['CalendarEvent'],
> = {
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  via?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChainInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChainInfo'] = ResolversParentTypes['ChainInfo'],
> = {
  auctionsLeasePeriodSlot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  crowdloanMinContribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  democracyEnactmentPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  democracyMinimumDeposit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  existentialDeposit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedExistentialDeposit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registry?: Resolver<ResolversTypes['Registry'], ParentType, ContextType>;
  slotsLeasePeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConvictionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Conviction'] = ResolversParentTypes['Conviction'],
> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Council'] = ResolversParentTypes['Council'],
> = {
  candidates?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  desiredRunnersUp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  desiredSeats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  primeMember?: Resolver<Maybe<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  runnersUp?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  termProgress?: Resolver<Maybe<ResolversTypes['TermProgress']>, ParentType, ContextType>;
  totalCandidates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalRunnersUp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilMemberResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CouncilMember'] = ResolversParentTypes['CouncilMember'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backing?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedBacking?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voters?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilMotionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CouncilMotion'] = ResolversParentTypes['CouncilMotion'],
> = {
  proposal?: Resolver<ResolversTypes['MotionProposal'], ParentType, ContextType>;
  votes?: Resolver<Maybe<ResolversTypes['ProposalVotes']>, ParentType, ContextType>;
  votingStatus?: Resolver<Maybe<ResolversTypes['VotingStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilVoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CouncilVote'] = ResolversParentTypes['CouncilVote'],
> = {
  formattedStake?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stake?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrowdloanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Crowdloan'] = ResolversParentTypes['Crowdloan'],
> = {
  cap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contribution?: Resolver<ResolversTypes['CrowdloanContribution'], ParentType, ContextType>;
  depositor?: Resolver<ResolversTypes['AccountInfo'], ParentType, ContextType>;
  ending?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  firstPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedCap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paraId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raisedPercentage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrowdloanContributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CrowdloanContribution'] = ResolversParentTypes['CrowdloanContribution'],
> = {
  contributorsCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paraId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrowdloanSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CrowdloanSummary'] = ResolversParentTypes['CrowdloanSummary'],
> = {
  activeCap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activeProgress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  activeRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedActiveCap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedActiveRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedTotalCap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedTotalRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalFunds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalProgress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracyProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracyProposal'] = ResolversParentTypes['DemocracyProposal'],
> = {
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  depositAmount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedDepositAmount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposalHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposalIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  seconds?: Resolver<Array<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DemocracyProposalStatus'], ParentType, ContextType>;
  tabledAtBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracyReferendumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracyReferendum'] = ResolversParentTypes['DemocracyReferendum'],
> = {
  aye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ayePercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedAye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedNay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DemocracyReferendumStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteThreshold?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['DemocracyReferendumVote']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracyReferendumVoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracyReferendumVote'] = ResolversParentTypes['DemocracyReferendumVote'],
> = {
  aye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedAye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedNay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracySummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracySummary'] = ResolversParentTypes['DemocracySummary'],
> = {
  activeProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeReferendums?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  launchPeriod?: Resolver<Maybe<ResolversTypes['LaunchPeriod']>, ParentType, ContextType>;
  proposals?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referendums?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeriveAccountRegistrationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeriveAccountRegistration'] = ResolversParentTypes['DeriveAccountRegistration'],
> = {
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayParent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  judgements?: Resolver<Maybe<Array<Maybe<ResolversTypes['RegistrationJudgement']>>>, ParentType, ContextType>;
  legal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pgp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  riot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityJudgementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IdentityJudgement'] = ResolversParentTypes['IdentityJudgement'],
> = {
  isErroneous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFeePaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isKnownGood?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLowQuality?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOutOfDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isReasonable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUnknown?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaunchPeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LaunchPeriod'] = ResolversParentTypes['LaunchPeriod'],
> = {
  progressPercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeLeft?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeLeftParts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Lease'] = ResolversParentTypes['Lease'],
> = {
  blockTime?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeasePeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LeasePeriod'] = ResolversParentTypes['LeasePeriod'],
> = {
  currentLease?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  progressPercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  remainder?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  remainderBlockTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  remainderParts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleElectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ModuleElection'] = ResolversParentTypes['ModuleElection'],
> = {
  candidacyBond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedCandidacyBond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedVotingBondBase?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedVotingBondFactor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasElections?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  votingBondBase?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votingBondFactor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MotionProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MotionProposal'] = ResolversParentTypes['MotionProposal'],
> = {
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  beneficiary?: Resolver<Maybe<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  bond?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proposer?: Resolver<Maybe<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParachainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Parachain'] = ResolversParentTypes['Parachain'],
> = {
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastBackedBlock?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastIncludedBlock?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lease?: Resolver<Maybe<ResolversTypes['Lease']>, ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nonVoters?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  validators?: Resolver<Maybe<ResolversTypes['ValidatorsGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParachainsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ParachainsSummary'] = ResolversParentTypes['ParachainsSummary'],
> = {
  leasePeriod?: Resolver<ResolversTypes['LeasePeriod'], ParentType, ContextType>;
  parachainsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parathreadsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  proposalsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParathreadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Parathread'] = ResolversParentTypes['Parathread'],
> = {
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lease?: Resolver<Maybe<ResolversTypes['Lease']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal'],
> = {
  beneficiary?: Resolver<ResolversTypes['AccountInfo'], ParentType, ContextType>;
  bond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['AccountInfo'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalArgResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalArg'] = ResolversParentTypes['ProposalArg'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subCalls?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProposalSubCall']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalSubCallResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalSubCall'] = ResolversParentTypes['ProposalSubCall'],
> = {
  args?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProposalArg']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalVotesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalVotes'] = ResolversParentTypes['ProposalVotes'],
> = {
  ayes?: Resolver<Maybe<Array<ResolversTypes['AccountInfo']>>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endTime?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nays?: Resolver<Maybe<Array<ResolversTypes['AccountInfo']>>, ParentType, ContextType>;
  threshold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  account?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountArgs, 'address'>
  >;
  accounts?: Resolver<
    Array<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountsArgs, 'addresses'>
  >;
  activeCrowdloans?: Resolver<Array<ResolversTypes['Crowdloan']>, ParentType, ContextType>;
  auctionsSummary?: Resolver<ResolversTypes['AuctionsSummary'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Balance'], ParentType, ContextType, RequireFields<QueryBalanceArgs, 'address'>>;
  bounties?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  bountiesSummary?: Resolver<ResolversTypes['BountiesSummary'], ParentType, ContextType>;
  bounty?: Resolver<Maybe<ResolversTypes['Bounty']>, ParentType, ContextType, RequireFields<QueryBountyArgs, 'index'>>;
  calendarEvents?: Resolver<Array<ResolversTypes['CalendarEvent']>, ParentType, ContextType>;
  chainInfo?: Resolver<ResolversTypes['ChainInfo'], ParentType, ContextType>;
  convictions?: Resolver<Maybe<Array<ResolversTypes['Conviction']>>, ParentType, ContextType>;
  council?: Resolver<ResolversTypes['Council'], ParentType, ContextType, RequireFields<QueryCouncilArgs, never>>;
  councilMotionDetail?: Resolver<
    Maybe<ResolversTypes['CouncilMotion']>,
    ParentType,
    ContextType,
    RequireFields<QueryCouncilMotionDetailArgs, 'hash'>
  >;
  councilMotions?: Resolver<Array<ResolversTypes['CouncilMotion']>, ParentType, ContextType>;
  councilVote?: Resolver<
    ResolversTypes['CouncilVote'],
    ParentType,
    ContextType,
    RequireFields<QueryCouncilVoteArgs, 'address'>
  >;
  crowdloan?: Resolver<
    Maybe<ResolversTypes['Crowdloan']>,
    ParentType,
    ContextType,
    RequireFields<QueryCrowdloanArgs, 'paraId'>
  >;
  crowdloanContribution?: Resolver<
    ResolversTypes['CrowdloanContribution'],
    ParentType,
    ContextType,
    RequireFields<QueryCrowdloanContributionArgs, 'paraId'>
  >;
  crowdloanSummary?: Resolver<ResolversTypes['CrowdloanSummary'], ParentType, ContextType>;
  crowdloans?: Resolver<
    Array<ResolversTypes['Crowdloan']>,
    ParentType,
    ContextType,
    RequireFields<QueryCrowdloansArgs, never>
  >;
  democracyProposal?: Resolver<
    Maybe<ResolversTypes['DemocracyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyProposalArgs, 'id'>
  >;
  democracyProposals?: Resolver<
    Maybe<Array<ResolversTypes['DemocracyProposal']>>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyProposalsArgs, never>
  >;
  democracyReferendum?: Resolver<
    Maybe<ResolversTypes['DemocracyReferendum']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyReferendumArgs, 'id'>
  >;
  democracyReferendums?: Resolver<
    Maybe<Array<ResolversTypes['DemocracyReferendum']>>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyReferendumsArgs, never>
  >;
  democracySummary?: Resolver<ResolversTypes['DemocracySummary'], ParentType, ContextType>;
  endedCrowdloans?: Resolver<Array<ResolversTypes['Crowdloan']>, ParentType, ContextType>;
  moduleElection?: Resolver<ResolversTypes['ModuleElection'], ParentType, ContextType>;
  parachain?: Resolver<
    Maybe<ResolversTypes['Parachain']>,
    ParentType,
    ContextType,
    RequireFields<QueryParachainArgs, 'id'>
  >;
  parachains?: Resolver<Maybe<Array<ResolversTypes['Parachain']>>, ParentType, ContextType>;
  parachainsSummary?: Resolver<ResolversTypes['ParachainsSummary'], ParentType, ContextType>;
  parathreads?: Resolver<Array<ResolversTypes['Parathread']>, ParentType, ContextType>;
  registrarsSummary?: Resolver<ResolversTypes['RegistrarsSummary'], ParentType, ContextType>;
  technicalCommitteeSummary?: Resolver<ResolversTypes['TechnicalCommitteeSummary'], ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['Tip']>, ParentType, ContextType, RequireFields<QueryTipArgs, 'id'>>;
  tips?: Resolver<Maybe<Array<ResolversTypes['Tip']>>, ParentType, ContextType, RequireFields<QueryTipsArgs, never>>;
  treasury?: Resolver<ResolversTypes['Treasury'], ParentType, ContextType>;
  treasurySummary?: Resolver<ResolversTypes['TreasurySummary'], ParentType, ContextType>;
};

export type RegistrarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Registrar'] = ResolversParentTypes['Registrar'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistrarsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegistrarsSummary'] = ResolversParentTypes['RegistrarsSummary'],
> = {
  formattedHighestFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedLowestFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  highestFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Registrar']>, ParentType, ContextType>;
  lowestFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrarsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistrationJudgementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegistrationJudgement'] = ResolversParentTypes['RegistrationJudgement'],
> = {
  judgement?: Resolver<Maybe<ResolversTypes['IdentityJudgement']>, ParentType, ContextType>;
  registrarIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Registry'] = ResolversParentTypes['Registry'],
> = {
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpendPeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SpendPeriod'] = ResolversParentTypes['SpendPeriod'],
> = {
  percentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  termLeft?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  termLeftParts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechnicalCommitteeSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TechnicalCommitteeSummary'] = ResolversParentTypes['TechnicalCommitteeSummary'],
> = {
  activeProposalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memberCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  totalProposalCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermProgressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TermProgress'] = ResolversParentTypes['TermProgress'],
> = {
  percentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  termDuration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  termDurationParts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  termLeft?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  termLeftParts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tip'] = ResolversParentTypes['Tip'],
> = {
  closes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closesTime?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deposit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finder?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  formattedDeposit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formattedMedianTipValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medianTipValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TipStatus'], ParentType, ContextType>;
  tippers?: Resolver<Array<ResolversTypes['Tipper']>, ParentType, ContextType>;
  tippersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  who?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TipperResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tipper'] = ResolversParentTypes['Tipper'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasuryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Treasury'] = ResolversParentTypes['Treasury'],
> = {
  approvals?: Resolver<Array<ResolversTypes['TreasuryProposal']>, ParentType, ContextType>;
  proposals?: Resolver<Array<ResolversTypes['TreasuryProposal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasuryBalanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TreasuryBalance'] = ResolversParentTypes['TreasuryBalance'],
> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountNonce?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freeBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frozenFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frozenMisc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reservedBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votingBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasuryProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TreasuryProposal'] = ResolversParentTypes['TreasuryProposal'],
> = {
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['ProposalVotes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasurySummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TreasurySummary'] = ResolversParentTypes['TreasurySummary'],
> = {
  activeProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  approvedProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nextBurn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  spendPeriod?: Resolver<ResolversTypes['SpendPeriod'], ParentType, ContextType>;
  totalProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  treasuryBalance?: Resolver<ResolversTypes['TreasuryBalance'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatorsGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ValidatorsGroup'] = ResolversParentTypes['ValidatorsGroup'],
> = {
  groupIndex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  validators?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VotingStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VotingStatus'] = ResolversParentTypes['VotingStatus'],
> = {
  hasFailed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPassed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isCloseable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVoteable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  remainingBlocks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remainingBlocksTime?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountBalance?: AccountBalanceResolvers<ContextType>;
  AccountInfo?: AccountInfoResolvers<ContextType>;
  Auction?: AuctionResolvers<ContextType>;
  AuctionBid?: AuctionBidResolvers<ContextType>;
  AuctionEndingPeriod?: AuctionEndingPeriodResolvers<ContextType>;
  AuctionLeasePeriod?: AuctionLeasePeriodResolvers<ContextType>;
  AuctionsInfo?: AuctionsInfoResolvers<ContextType>;
  AuctionsSummary?: AuctionsSummaryResolvers<ContextType>;
  Balance?: BalanceResolvers<ContextType>;
  BountiesSummary?: BountiesSummaryResolvers<ContextType>;
  Bounty?: BountyResolvers<ContextType>;
  BountyStatus?: BountyStatusResolvers<ContextType>;
  CalendarEvent?: CalendarEventResolvers<ContextType>;
  ChainInfo?: ChainInfoResolvers<ContextType>;
  Conviction?: ConvictionResolvers<ContextType>;
  Council?: CouncilResolvers<ContextType>;
  CouncilMember?: CouncilMemberResolvers<ContextType>;
  CouncilMotion?: CouncilMotionResolvers<ContextType>;
  CouncilVote?: CouncilVoteResolvers<ContextType>;
  Crowdloan?: CrowdloanResolvers<ContextType>;
  CrowdloanContribution?: CrowdloanContributionResolvers<ContextType>;
  CrowdloanSummary?: CrowdloanSummaryResolvers<ContextType>;
  DemocracyProposal?: DemocracyProposalResolvers<ContextType>;
  DemocracyReferendum?: DemocracyReferendumResolvers<ContextType>;
  DemocracyReferendumVote?: DemocracyReferendumVoteResolvers<ContextType>;
  DemocracySummary?: DemocracySummaryResolvers<ContextType>;
  DeriveAccountRegistration?: DeriveAccountRegistrationResolvers<ContextType>;
  IdentityJudgement?: IdentityJudgementResolvers<ContextType>;
  LaunchPeriod?: LaunchPeriodResolvers<ContextType>;
  Lease?: LeaseResolvers<ContextType>;
  LeasePeriod?: LeasePeriodResolvers<ContextType>;
  ModuleElection?: ModuleElectionResolvers<ContextType>;
  MotionProposal?: MotionProposalResolvers<ContextType>;
  Parachain?: ParachainResolvers<ContextType>;
  ParachainsSummary?: ParachainsSummaryResolvers<ContextType>;
  Parathread?: ParathreadResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalArg?: ProposalArgResolvers<ContextType>;
  ProposalSubCall?: ProposalSubCallResolvers<ContextType>;
  ProposalVotes?: ProposalVotesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Registrar?: RegistrarResolvers<ContextType>;
  RegistrarsSummary?: RegistrarsSummaryResolvers<ContextType>;
  RegistrationJudgement?: RegistrationJudgementResolvers<ContextType>;
  Registry?: RegistryResolvers<ContextType>;
  SpendPeriod?: SpendPeriodResolvers<ContextType>;
  TechnicalCommitteeSummary?: TechnicalCommitteeSummaryResolvers<ContextType>;
  TermProgress?: TermProgressResolvers<ContextType>;
  Tip?: TipResolvers<ContextType>;
  Tipper?: TipperResolvers<ContextType>;
  Treasury?: TreasuryResolvers<ContextType>;
  TreasuryBalance?: TreasuryBalanceResolvers<ContextType>;
  TreasuryProposal?: TreasuryProposalResolvers<ContextType>;
  TreasurySummary?: TreasurySummaryResolvers<ContextType>;
  ValidatorsGroup?: ValidatorsGroupResolvers<ContextType>;
  VotingStatus?: VotingStatusResolvers<ContextType>;
};

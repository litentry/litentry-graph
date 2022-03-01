import {GraphQLResolveInfo} from 'graphql';
import {PartialCouncilCandidate, PartialCouncilMember} from '../resolvers/Query/council';
import {PartialRegistrar} from '../resolvers/Query/registrars';
import {PartialProposalSecond, PartialProposer} from '../resolvers/Query/democracy';
import {PartialDepositor, PartialContribution} from '../resolvers/Query/crowdloan';
import {PartialFinder, PartialWho, PartialTipper} from '../resolvers/Query/tips';
import {PartialCurator, PartialBeneficiary} from '../resolvers/Query/bounties';
import {PartialSubAccount} from '../resolvers/Query/account';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {[X in Exclude<keyof T, K>]?: T[X]} & {[P in K]-?: NonNullable<T[P]>};
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
  balance: AccountBalance;
  display: Scalars['String'];
  registration: DeriveAccountRegistration;
  subAccounts?: Maybe<Array<SubAccount>>;
};

export type AccountBalance = {
  __typename?: 'AccountBalance';
  formattedFree: Scalars['String'];
  formattedFreeFrozen: Scalars['String'];
  formattedReserved: Scalars['String'];
  formattedTotal: Scalars['String'];
  free: Scalars['String'];
  freeFrozen: Scalars['String'];
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
  leasePeriod?: Maybe<AuctionLeasePeriod>;
  raised: Scalars['String'];
  raisedPercent: Scalars['Float'];
  winningBid?: Maybe<AuctionBid>;
};

export type AuctionBid = {
  __typename?: 'AuctionBid';
  amount?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['String']>;
  firstSlot?: Maybe<Scalars['String']>;
  isCrowdloan: Scalars['Boolean'];
  lastSlot?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
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
  data: BalanceData;
  nonce: Scalars['Int'];
  providers: Scalars['Int'];
  sufficients: Scalars['Int'];
};

export type BalanceData = {
  __typename?: 'BalanceData';
  feeFrozen: Scalars['Float'];
  free: Scalars['Float'];
  miscFrozen: Scalars['Float'];
  reserved: Scalars['Float'];
};

export type Beneficiary = {
  __typename?: 'Beneficiary';
  account: Account;
  address: Scalars['String'];
};

export type BountiesSummary = {
  __typename?: 'BountiesSummary';
  activeBounties: Scalars['String'];
  bountyCount: Scalars['String'];
  formattedTotalValue: Scalars['String'];
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
  proposer: Proposer;
  value: Scalars['String'];
};

export type BountyStatus = {
  __typename?: 'BountyStatus';
  beneficiary?: Maybe<Beneficiary>;
  curator?: Maybe<Curator>;
  status?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['String']>;
  unlockAtTime?: Maybe<Array<Scalars['String']>>;
  updateDue?: Maybe<Scalars['String']>;
  updateDueTime?: Maybe<Array<Scalars['String']>>;
};

export type ChainInfo = {
  __typename?: 'ChainInfo';
  chain: Scalars['String'];
  nodeName: Scalars['String'];
  nodeVersion: Scalars['String'];
};

export type CollectiveProposal = {
  __typename?: 'CollectiveProposal';
  callIndex: Scalars['String'];
  hash: Scalars['String'];
  votes: ProposalVotes;
};

export type Contribution = {
  __typename?: 'Contribution';
  contribution: CrowdloanContribution;
  paraId: Scalars['String'];
};

export type Conviction = {
  __typename?: 'Conviction';
  text: Scalars['String'];
  value: Scalars['Int'];
};

export type Council = {
  __typename?: 'Council';
  candidates: Array<CouncilCandidate>;
  desiredRunnersUp: Scalars['Int'];
  desiredSeats: Scalars['Int'];
  members: Array<CouncilMember>;
  primeMember?: Maybe<CouncilMember>;
  runnersUp: Array<CouncilMember>;
  termProgress: TermProgress;
  totalCandidates: Scalars['Int'];
  totalMembers: Scalars['Int'];
  totalRunnersUp: Scalars['Int'];
};

export type CouncilCandidate = {
  __typename?: 'CouncilCandidate';
  account: Account;
  address: Scalars['String'];
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
  hash: Scalars['String'];
  proposal: MotionProposal;
  votes?: Maybe<MotionVotes>;
  votingStatus?: Maybe<VotingStatus>;
};

export type Crowdloan = {
  __typename?: 'Crowdloan';
  cap: Scalars['String'];
  contribution: Contribution;
  depositor: Depositor;
  ending: Array<Scalars['String']>;
  firstPeriod: Scalars['String'];
  formattedCap: Scalars['String'];
  formattedRaised: Scalars['String'];
  lastPeriod: Scalars['String'];
  paraId: Scalars['String'];
  raised: Scalars['String'];
  status: Scalars['String'];
};

export type CrowdloanContribution = {
  __typename?: 'CrowdloanContribution';
  contributorsCount: Scalars['String'];
  paraId: Scalars['String'];
};

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

export type Curator = {
  __typename?: 'Curator';
  account: Account;
  address: Scalars['String'];
};

export type DemocracyProposal = {
  __typename?: 'DemocracyProposal';
  args: Array<ProposalArg>;
  balance?: Maybe<Scalars['String']>;
  formattedBalance?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  index: Scalars['String'];
  meta: Scalars['String'];
  method: Scalars['String'];
  proposer: Proposer;
  seconds: Array<ProposalSecond>;
  section: Scalars['String'];
};

export type DemocracyReferendum = {
  __typename?: 'DemocracyReferendum';
  activatePeriod: Array<Scalars['String']>;
  args: Array<ProposalArg>;
  ayePercent: Scalars['Float'];
  endPeriod: Array<Scalars['String']>;
  formattedVotedAye: Scalars['String'];
  formattedVotedNay: Scalars['String'];
  hash: Scalars['String'];
  index: Scalars['String'];
  meta: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
  voteCountAye: Scalars['String'];
  voteCountNay: Scalars['String'];
  votedAye: Scalars['String'];
  votedNay: Scalars['String'];
};

export type DemocracySummary = {
  __typename?: 'DemocracySummary';
  activeProposals: Scalars['Int'];
  activeReferendums: Scalars['Int'];
  launchPeriodInfo?: Maybe<LaunchPeriodInfo>;
  proposals: Scalars['String'];
  referendums: Scalars['String'];
};

export type Depositor = {
  __typename?: 'Depositor';
  account: Account;
  address: Scalars['String'];
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

export type Event = {
  __typename?: 'Event';
  blockNumber: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Finder = {
  __typename?: 'Finder';
  account: Account;
  address: Scalars['String'];
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

export type LaunchPeriodInfo = {
  __typename?: 'LaunchPeriodInfo';
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
  totalPeriod: Scalars['String'];
};

export type ModuleElection = {
  __typename?: 'ModuleElection';
  hasElections: Scalars['Boolean'];
  module?: Maybe<Scalars['String']>;
};

export type MotionProposal = {
  __typename?: 'MotionProposal';
  args: Array<ProposalArg>;
  hash: Scalars['String'];
  method: Scalars['String'];
  section: Scalars['String'];
};

export type MotionVotes = {
  __typename?: 'MotionVotes';
  ayes: Array<Account>;
  end: Scalars['String'];
  endTime: Array<Scalars['String']>;
  index: Scalars['Int'];
  nays: Array<Account>;
  threshold: Scalars['Int'];
};

export type PalletProposal = {
  __typename?: 'PalletProposal';
  beneficiary: Account;
  bond: Scalars['String'];
  proposer: Account;
  value: Scalars['String'];
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
  nonVoters: Array<AccountInfo>;
  validators?: Maybe<ValidatorsGroup>;
};

export type ParachainsInfo = {
  __typename?: 'ParachainsInfo';
  leasePeriod: LeasePeriod;
  parachainsCount: Scalars['Int'];
  parathreadsCount: Scalars['Int'];
  proposalsCount: Scalars['Int'];
};

export type ProposalArg = {
  __typename?: 'ProposalArg';
  name?: Maybe<Scalars['String']>;
  subCalls?: Maybe<Array<Maybe<DemocracyProposal>>>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ProposalSecond = {
  __typename?: 'ProposalSecond';
  account: Account;
  address: Scalars['String'];
};

export type ProposalVotes = {
  __typename?: 'ProposalVotes';
  ayes?: Maybe<Array<Scalars['String']>>;
  end?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  nays?: Maybe<Array<Scalars['String']>>;
  threshold?: Maybe<Scalars['String']>;
};

export type Proposer = {
  __typename?: 'Proposer';
  account: Account;
  address: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  activeCrowdloans: Array<Crowdloan>;
  auctionsSummary: AuctionsSummary;
  balance: Balance;
  bounties: Array<Bounty>;
  bountiesSummary: BountiesSummary;
  bounty?: Maybe<Bounty>;
  chainInfo: ChainInfo;
  convictions?: Maybe<Array<Conviction>>;
  council: Council;
  councilMotions: Array<CouncilMotion>;
  crowdloan?: Maybe<Crowdloan>;
  crowdloanContribution: CrowdloanContribution;
  crowdloanSummary: CrowdloanSummary;
  democracyProposal?: Maybe<DemocracyProposal>;
  democracyProposals: Array<DemocracyProposal>;
  democracyReferendum?: Maybe<DemocracyReferendum>;
  democracyReferendums: Array<DemocracyReferendum>;
  democracySummary: DemocracySummary;
  endedCrowdloans: Array<Crowdloan>;
  events: Array<Event>;
  moduleElection: ModuleElection;
  parachain?: Maybe<Parachain>;
  parachains?: Maybe<Array<Parachain>>;
  parachainsInfo: ParachainsInfo;
  registrarsSummary: RegistrarsSummary;
  tip?: Maybe<Tip>;
  tips?: Maybe<Array<Tip>>;
  treasury: Treasury;
  treasurySummary: TreasurySummary;
};

export type QueryAccountArgs = {
  address: Scalars['String'];
};

export type QueryBalanceArgs = {
  address: Scalars['String'];
  blockNumber?: InputMaybe<Scalars['Int']>;
};

export type QueryBountyArgs = {
  index: Scalars['String'];
};

export type QueryCrowdloanArgs = {
  paraId: Scalars['String'];
};

export type QueryCrowdloanContributionArgs = {
  paraId: Scalars['String'];
};

export type QueryDemocracyProposalArgs = {
  index: Scalars['String'];
};

export type QueryDemocracyReferendumArgs = {
  index: Scalars['String'];
};

export type QueryParachainArgs = {
  id: Scalars['String'];
};

export type QueryTipArgs = {
  id: Scalars['String'];
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
  index?: Maybe<Scalars['Int']>;
  judgement?: Maybe<IdentityJudgement>;
};

export type SpendPeriod = {
  __typename?: 'SpendPeriod';
  percentage: Scalars['Int'];
  period: Scalars['String'];
  termLeft: Scalars['String'];
  termLeftParts: Array<Scalars['String']>;
};

export type SubAccount = {
  __typename?: 'SubAccount';
  account: Account;
  address: Scalars['String'];
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
  deposit?: Maybe<Scalars['String']>;
  finder?: Maybe<Finder>;
  formattedMedian?: Maybe<Scalars['String']>;
  /** id: Tip Hash */
  id: Scalars['String'];
  median?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  tippers: Array<Tipper>;
  tippersCount: Scalars['Int'];
  who: Who;
};

export type Tipper = {
  __typename?: 'Tipper';
  account: Account;
  address: Scalars['String'];
  balance: Scalars['String'];
  formattedBalance: Scalars['String'];
};

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
  councils: Array<CollectiveProposal>;
  id: Scalars['String'];
  proposal: PalletProposal;
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
  validators: Array<AccountInfo>;
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

export type Who = {
  __typename?: 'Who';
  account: Account;
  address: Scalars['String'];
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
  subscribe: SubscriptionSubscribeFn<{[key in TKey]: TResult}, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, {[key in TKey]: TResult}, TContext, TArgs>;
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
    Omit<Account, 'subAccounts'> & {subAccounts?: Maybe<Array<ResolversTypes['SubAccount']>>}
  >;
  AccountBalance: ResolverTypeWrapper<AccountBalance>;
  AccountInfo: ResolverTypeWrapper<Omit<AccountInfo, 'account'> & {account: ResolversTypes['Account']}>;
  Auction: ResolverTypeWrapper<Auction>;
  AuctionBid: ResolverTypeWrapper<AuctionBid>;
  AuctionEndingPeriod: ResolverTypeWrapper<AuctionEndingPeriod>;
  AuctionLeasePeriod: ResolverTypeWrapper<AuctionLeasePeriod>;
  AuctionsInfo: ResolverTypeWrapper<AuctionsInfo>;
  AuctionsSummary: ResolverTypeWrapper<AuctionsSummary>;
  Balance: ResolverTypeWrapper<Balance>;
  BalanceData: ResolverTypeWrapper<BalanceData>;
  Beneficiary: ResolverTypeWrapper<PartialBeneficiary>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BountiesSummary: ResolverTypeWrapper<BountiesSummary>;
  Bounty: ResolverTypeWrapper<
    Omit<Bounty, 'bountyStatus' | 'proposer'> & {
      bountyStatus: ResolversTypes['BountyStatus'];
      proposer: ResolversTypes['Proposer'];
    }
  >;
  BountyStatus: ResolverTypeWrapper<
    Omit<BountyStatus, 'beneficiary' | 'curator'> & {
      beneficiary?: Maybe<ResolversTypes['Beneficiary']>;
      curator?: Maybe<ResolversTypes['Curator']>;
    }
  >;
  ChainInfo: ResolverTypeWrapper<ChainInfo>;
  CollectiveProposal: ResolverTypeWrapper<CollectiveProposal>;
  Contribution: ResolverTypeWrapper<PartialContribution>;
  Conviction: ResolverTypeWrapper<Conviction>;
  Council: ResolverTypeWrapper<
    Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & {
      candidates: Array<ResolversTypes['CouncilCandidate']>;
      members: Array<ResolversTypes['CouncilMember']>;
      primeMember?: Maybe<ResolversTypes['CouncilMember']>;
      runnersUp: Array<ResolversTypes['CouncilMember']>;
    }
  >;
  CouncilCandidate: ResolverTypeWrapper<PartialCouncilCandidate>;
  CouncilMember: ResolverTypeWrapper<PartialCouncilMember>;
  CouncilMotion: ResolverTypeWrapper<
    Omit<CouncilMotion, 'proposal' | 'votes'> & {
      proposal: ResolversTypes['MotionProposal'];
      votes?: Maybe<ResolversTypes['MotionVotes']>;
    }
  >;
  Crowdloan: ResolverTypeWrapper<
    Omit<Crowdloan, 'contribution' | 'depositor'> & {
      contribution: ResolversTypes['Contribution'];
      depositor: ResolversTypes['Depositor'];
    }
  >;
  CrowdloanContribution: ResolverTypeWrapper<CrowdloanContribution>;
  CrowdloanSummary: ResolverTypeWrapper<CrowdloanSummary>;
  Curator: ResolverTypeWrapper<PartialCurator>;
  DemocracyProposal: ResolverTypeWrapper<
    Omit<DemocracyProposal, 'args' | 'proposer' | 'seconds'> & {
      args: Array<ResolversTypes['ProposalArg']>;
      proposer: ResolversTypes['Proposer'];
      seconds: Array<ResolversTypes['ProposalSecond']>;
    }
  >;
  DemocracyReferendum: ResolverTypeWrapper<
    Omit<DemocracyReferendum, 'args'> & {args: Array<ResolversTypes['ProposalArg']>}
  >;
  DemocracySummary: ResolverTypeWrapper<DemocracySummary>;
  Depositor: ResolverTypeWrapper<PartialDepositor>;
  DeriveAccountRegistration: ResolverTypeWrapper<DeriveAccountRegistration>;
  Event: ResolverTypeWrapper<Event>;
  Finder: ResolverTypeWrapper<PartialFinder>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IdentityJudgement: ResolverTypeWrapper<IdentityJudgement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LaunchPeriodInfo: ResolverTypeWrapper<LaunchPeriodInfo>;
  Lease: ResolverTypeWrapper<Lease>;
  LeasePeriod: ResolverTypeWrapper<LeasePeriod>;
  ModuleElection: ResolverTypeWrapper<ModuleElection>;
  MotionProposal: ResolverTypeWrapper<Omit<MotionProposal, 'args'> & {args: Array<ResolversTypes['ProposalArg']>}>;
  MotionVotes: ResolverTypeWrapper<
    Omit<MotionVotes, 'ayes' | 'nays'> & {
      ayes: Array<ResolversTypes['Account']>;
      nays: Array<ResolversTypes['Account']>;
    }
  >;
  PalletProposal: ResolverTypeWrapper<
    Omit<PalletProposal, 'beneficiary' | 'proposer'> & {
      beneficiary: ResolversTypes['Account'];
      proposer: ResolversTypes['Account'];
    }
  >;
  Parachain: ResolverTypeWrapper<
    Omit<Parachain, 'nonVoters' | 'validators'> & {
      nonVoters: Array<ResolversTypes['AccountInfo']>;
      validators?: Maybe<ResolversTypes['ValidatorsGroup']>;
    }
  >;
  ParachainsInfo: ResolverTypeWrapper<ParachainsInfo>;
  ProposalArg: ResolverTypeWrapper<
    Omit<ProposalArg, 'subCalls'> & {subCalls?: Maybe<Array<Maybe<ResolversTypes['DemocracyProposal']>>>}
  >;
  ProposalSecond: ResolverTypeWrapper<PartialProposalSecond>;
  ProposalVotes: ResolverTypeWrapper<ProposalVotes>;
  Proposer: ResolverTypeWrapper<PartialProposer>;
  Query: ResolverTypeWrapper<{}>;
  Registrar: ResolverTypeWrapper<PartialRegistrar>;
  RegistrarsSummary: ResolverTypeWrapper<Omit<RegistrarsSummary, 'list'> & {list: Array<ResolversTypes['Registrar']>}>;
  RegistrationJudgement: ResolverTypeWrapper<RegistrationJudgement>;
  SpendPeriod: ResolverTypeWrapper<SpendPeriod>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubAccount: ResolverTypeWrapper<PartialSubAccount>;
  TermProgress: ResolverTypeWrapper<TermProgress>;
  Tip: ResolverTypeWrapper<
    Omit<Tip, 'finder' | 'tippers' | 'who'> & {
      finder?: Maybe<ResolversTypes['Finder']>;
      tippers: Array<ResolversTypes['Tipper']>;
      who: ResolversTypes['Who'];
    }
  >;
  Tipper: ResolverTypeWrapper<PartialTipper>;
  Treasury: ResolverTypeWrapper<
    Omit<Treasury, 'approvals' | 'proposals'> & {
      approvals: Array<ResolversTypes['TreasuryProposal']>;
      proposals: Array<ResolversTypes['TreasuryProposal']>;
    }
  >;
  TreasuryBalance: ResolverTypeWrapper<TreasuryBalance>;
  TreasuryProposal: ResolverTypeWrapper<
    Omit<TreasuryProposal, 'proposal'> & {proposal: ResolversTypes['PalletProposal']}
  >;
  TreasurySummary: ResolverTypeWrapper<TreasurySummary>;
  ValidatorsGroup: ResolverTypeWrapper<
    Omit<ValidatorsGroup, 'validators'> & {validators: Array<ResolversTypes['AccountInfo']>}
  >;
  VotingStatus: ResolverTypeWrapper<VotingStatus>;
  Who: ResolverTypeWrapper<PartialWho>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'subAccounts'> & {subAccounts?: Maybe<Array<ResolversParentTypes['SubAccount']>>};
  AccountBalance: AccountBalance;
  AccountInfo: Omit<AccountInfo, 'account'> & {account: ResolversParentTypes['Account']};
  Auction: Auction;
  AuctionBid: AuctionBid;
  AuctionEndingPeriod: AuctionEndingPeriod;
  AuctionLeasePeriod: AuctionLeasePeriod;
  AuctionsInfo: AuctionsInfo;
  AuctionsSummary: AuctionsSummary;
  Balance: Balance;
  BalanceData: BalanceData;
  Beneficiary: PartialBeneficiary;
  Boolean: Scalars['Boolean'];
  BountiesSummary: BountiesSummary;
  Bounty: Omit<Bounty, 'bountyStatus' | 'proposer'> & {
    bountyStatus: ResolversParentTypes['BountyStatus'];
    proposer: ResolversParentTypes['Proposer'];
  };
  BountyStatus: Omit<BountyStatus, 'beneficiary' | 'curator'> & {
    beneficiary?: Maybe<ResolversParentTypes['Beneficiary']>;
    curator?: Maybe<ResolversParentTypes['Curator']>;
  };
  ChainInfo: ChainInfo;
  CollectiveProposal: CollectiveProposal;
  Contribution: PartialContribution;
  Conviction: Conviction;
  Council: Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & {
    candidates: Array<ResolversParentTypes['CouncilCandidate']>;
    members: Array<ResolversParentTypes['CouncilMember']>;
    primeMember?: Maybe<ResolversParentTypes['CouncilMember']>;
    runnersUp: Array<ResolversParentTypes['CouncilMember']>;
  };
  CouncilCandidate: PartialCouncilCandidate;
  CouncilMember: PartialCouncilMember;
  CouncilMotion: Omit<CouncilMotion, 'proposal' | 'votes'> & {
    proposal: ResolversParentTypes['MotionProposal'];
    votes?: Maybe<ResolversParentTypes['MotionVotes']>;
  };
  Crowdloan: Omit<Crowdloan, 'contribution' | 'depositor'> & {
    contribution: ResolversParentTypes['Contribution'];
    depositor: ResolversParentTypes['Depositor'];
  };
  CrowdloanContribution: CrowdloanContribution;
  CrowdloanSummary: CrowdloanSummary;
  Curator: PartialCurator;
  DemocracyProposal: Omit<DemocracyProposal, 'args' | 'proposer' | 'seconds'> & {
    args: Array<ResolversParentTypes['ProposalArg']>;
    proposer: ResolversParentTypes['Proposer'];
    seconds: Array<ResolversParentTypes['ProposalSecond']>;
  };
  DemocracyReferendum: Omit<DemocracyReferendum, 'args'> & {args: Array<ResolversParentTypes['ProposalArg']>};
  DemocracySummary: DemocracySummary;
  Depositor: PartialDepositor;
  DeriveAccountRegistration: DeriveAccountRegistration;
  Event: Event;
  Finder: PartialFinder;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IdentityJudgement: IdentityJudgement;
  Int: Scalars['Int'];
  LaunchPeriodInfo: LaunchPeriodInfo;
  Lease: Lease;
  LeasePeriod: LeasePeriod;
  ModuleElection: ModuleElection;
  MotionProposal: Omit<MotionProposal, 'args'> & {args: Array<ResolversParentTypes['ProposalArg']>};
  MotionVotes: Omit<MotionVotes, 'ayes' | 'nays'> & {
    ayes: Array<ResolversParentTypes['Account']>;
    nays: Array<ResolversParentTypes['Account']>;
  };
  PalletProposal: Omit<PalletProposal, 'beneficiary' | 'proposer'> & {
    beneficiary: ResolversParentTypes['Account'];
    proposer: ResolversParentTypes['Account'];
  };
  Parachain: Omit<Parachain, 'nonVoters' | 'validators'> & {
    nonVoters: Array<ResolversParentTypes['AccountInfo']>;
    validators?: Maybe<ResolversParentTypes['ValidatorsGroup']>;
  };
  ParachainsInfo: ParachainsInfo;
  ProposalArg: Omit<ProposalArg, 'subCalls'> & {
    subCalls?: Maybe<Array<Maybe<ResolversParentTypes['DemocracyProposal']>>>;
  };
  ProposalSecond: PartialProposalSecond;
  ProposalVotes: ProposalVotes;
  Proposer: PartialProposer;
  Query: {};
  Registrar: PartialRegistrar;
  RegistrarsSummary: Omit<RegistrarsSummary, 'list'> & {list: Array<ResolversParentTypes['Registrar']>};
  RegistrationJudgement: RegistrationJudgement;
  SpendPeriod: SpendPeriod;
  String: Scalars['String'];
  SubAccount: PartialSubAccount;
  TermProgress: TermProgress;
  Tip: Omit<Tip, 'finder' | 'tippers' | 'who'> & {
    finder?: Maybe<ResolversParentTypes['Finder']>;
    tippers: Array<ResolversParentTypes['Tipper']>;
    who: ResolversParentTypes['Who'];
  };
  Tipper: PartialTipper;
  Treasury: Omit<Treasury, 'approvals' | 'proposals'> & {
    approvals: Array<ResolversParentTypes['TreasuryProposal']>;
    proposals: Array<ResolversParentTypes['TreasuryProposal']>;
  };
  TreasuryBalance: TreasuryBalance;
  TreasuryProposal: Omit<TreasuryProposal, 'proposal'> & {proposal: ResolversParentTypes['PalletProposal']};
  TreasurySummary: TreasurySummary;
  ValidatorsGroup: Omit<ValidatorsGroup, 'validators'> & {validators: Array<ResolversParentTypes['AccountInfo']>};
  VotingStatus: VotingStatus;
  Who: PartialWho;
};

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['AccountBalance'], ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['DeriveAccountRegistration'], ParentType, ContextType>;
  subAccounts?: Resolver<Maybe<Array<ResolversTypes['SubAccount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountBalanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountBalance'] = ResolversParentTypes['AccountBalance'],
> = {
  formattedFree?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedFreeFrozen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedReserved?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedTotal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  free?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freeFrozen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstSlot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isCrowdloan?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastSlot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  data?: Resolver<ResolversTypes['BalanceData'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sufficients?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BalanceDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BalanceData'] = ResolversParentTypes['BalanceData'],
> = {
  feeFrozen?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  free?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  miscFrozen?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reserved?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BeneficiaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Beneficiary'] = ResolversParentTypes['Beneficiary'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountiesSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BountiesSummary'] = ResolversParentTypes['BountiesSummary'],
> = {
  activeBounties?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bountyCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedTotalValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  proposer?: Resolver<ResolversTypes['Proposer'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountyStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BountyStatus'] = ResolversParentTypes['BountyStatus'],
> = {
  beneficiary?: Resolver<Maybe<ResolversTypes['Beneficiary']>, ParentType, ContextType>;
  curator?: Resolver<Maybe<ResolversTypes['Curator']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlockAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlockAtTime?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updateDue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateDueTime?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChainInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChainInfo'] = ResolversParentTypes['ChainInfo'],
> = {
  chain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectiveProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CollectiveProposal'] = ResolversParentTypes['CollectiveProposal'],
> = {
  callIndex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['ProposalVotes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Contribution'] = ResolversParentTypes['Contribution'],
> = {
  contribution?: Resolver<ResolversTypes['CrowdloanContribution'], ParentType, ContextType>;
  paraId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  candidates?: Resolver<Array<ResolversTypes['CouncilCandidate']>, ParentType, ContextType>;
  desiredRunnersUp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  desiredSeats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  primeMember?: Resolver<Maybe<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  runnersUp?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  termProgress?: Resolver<ResolversTypes['TermProgress'], ParentType, ContextType>;
  totalCandidates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalRunnersUp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilCandidateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CouncilCandidate'] = ResolversParentTypes['CouncilCandidate'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['MotionProposal'], ParentType, ContextType>;
  votes?: Resolver<Maybe<ResolversTypes['MotionVotes']>, ParentType, ContextType>;
  votingStatus?: Resolver<Maybe<ResolversTypes['VotingStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrowdloanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Crowdloan'] = ResolversParentTypes['Crowdloan'],
> = {
  cap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contribution?: Resolver<ResolversTypes['Contribution'], ParentType, ContextType>;
  depositor?: Resolver<ResolversTypes['Depositor'], ParentType, ContextType>;
  ending?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  firstPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedCap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedRaised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paraId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type CuratorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Curator'] = ResolversParentTypes['Curator'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracyProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracyProposal'] = ResolversParentTypes['DemocracyProposal'],
> = {
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formattedBalance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Proposer'], ParentType, ContextType>;
  seconds?: Resolver<Array<ResolversTypes['ProposalSecond']>, ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracyReferendumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracyReferendum'] = ResolversParentTypes['DemocracyReferendum'],
> = {
  activatePeriod?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  ayePercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  endPeriod?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  formattedVotedAye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formattedVotedNay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteCountAye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteCountNay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votedAye?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votedNay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracySummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracySummary'] = ResolversParentTypes['DemocracySummary'],
> = {
  activeProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeReferendums?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  launchPeriodInfo?: Resolver<Maybe<ResolversTypes['LaunchPeriodInfo']>, ParentType, ContextType>;
  proposals?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referendums?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepositorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Depositor'] = ResolversParentTypes['Depositor'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event'],
> = {
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Finder'] = ResolversParentTypes['Finder'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type LaunchPeriodInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LaunchPeriodInfo'] = ResolversParentTypes['LaunchPeriodInfo'],
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
  totalPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleElectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ModuleElection'] = ResolversParentTypes['ModuleElection'],
> = {
  hasElections?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MotionProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MotionProposal'] = ResolversParentTypes['MotionProposal'],
> = {
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MotionVotesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MotionVotes'] = ResolversParentTypes['MotionVotes'],
> = {
  ayes?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  end?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endTime?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nays?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PalletProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PalletProposal'] = ResolversParentTypes['PalletProposal'],
> = {
  beneficiary?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  bond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  nonVoters?: Resolver<Array<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
  validators?: Resolver<Maybe<ResolversTypes['ValidatorsGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParachainsInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ParachainsInfo'] = ResolversParentTypes['ParachainsInfo'],
> = {
  leasePeriod?: Resolver<ResolversTypes['LeasePeriod'], ParentType, ContextType>;
  parachainsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parathreadsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  proposalsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalArgResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalArg'] = ResolversParentTypes['ProposalArg'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subCalls?: Resolver<Maybe<Array<Maybe<ResolversTypes['DemocracyProposal']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalSecondResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalSecond'] = ResolversParentTypes['ProposalSecond'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalVotesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalVotes'] = ResolversParentTypes['ProposalVotes'],
> = {
  ayes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nays?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  threshold?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Proposer'] = ResolversParentTypes['Proposer'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activeCrowdloans?: Resolver<Array<ResolversTypes['Crowdloan']>, ParentType, ContextType>;
  auctionsSummary?: Resolver<ResolversTypes['AuctionsSummary'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Balance'], ParentType, ContextType, RequireFields<QueryBalanceArgs, 'address'>>;
  bounties?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  bountiesSummary?: Resolver<ResolversTypes['BountiesSummary'], ParentType, ContextType>;
  bounty?: Resolver<Maybe<ResolversTypes['Bounty']>, ParentType, ContextType, RequireFields<QueryBountyArgs, 'index'>>;
  chainInfo?: Resolver<ResolversTypes['ChainInfo'], ParentType, ContextType>;
  convictions?: Resolver<Maybe<Array<ResolversTypes['Conviction']>>, ParentType, ContextType>;
  council?: Resolver<ResolversTypes['Council'], ParentType, ContextType>;
  councilMotions?: Resolver<Array<ResolversTypes['CouncilMotion']>, ParentType, ContextType>;
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
  democracyProposal?: Resolver<
    Maybe<ResolversTypes['DemocracyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyProposalArgs, 'index'>
  >;
  democracyProposals?: Resolver<Array<ResolversTypes['DemocracyProposal']>, ParentType, ContextType>;
  democracyReferendum?: Resolver<
    Maybe<ResolversTypes['DemocracyReferendum']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyReferendumArgs, 'index'>
  >;
  democracyReferendums?: Resolver<Array<ResolversTypes['DemocracyReferendum']>, ParentType, ContextType>;
  democracySummary?: Resolver<ResolversTypes['DemocracySummary'], ParentType, ContextType>;
  endedCrowdloans?: Resolver<Array<ResolversTypes['Crowdloan']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  moduleElection?: Resolver<ResolversTypes['ModuleElection'], ParentType, ContextType>;
  parachain?: Resolver<
    Maybe<ResolversTypes['Parachain']>,
    ParentType,
    ContextType,
    RequireFields<QueryParachainArgs, 'id'>
  >;
  parachains?: Resolver<Maybe<Array<ResolversTypes['Parachain']>>, ParentType, ContextType>;
  parachainsInfo?: Resolver<ResolversTypes['ParachainsInfo'], ParentType, ContextType>;
  registrarsSummary?: Resolver<ResolversTypes['RegistrarsSummary'], ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['Tip']>, ParentType, ContextType, RequireFields<QueryTipArgs, 'id'>>;
  tips?: Resolver<Maybe<Array<ResolversTypes['Tip']>>, ParentType, ContextType>;
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
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  judgement?: Resolver<Maybe<ResolversTypes['IdentityJudgement']>, ParentType, ContextType>;
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

export type SubAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubAccount'] = ResolversParentTypes['SubAccount'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  deposit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finder?: Resolver<Maybe<ResolversTypes['Finder']>, ParentType, ContextType>;
  formattedMedian?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  median?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tippers?: Resolver<Array<ResolversTypes['Tipper']>, ParentType, ContextType>;
  tippersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  who?: Resolver<ResolversTypes['Who'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TipperResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tipper'] = ResolversParentTypes['Tipper'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  councils?: Resolver<Array<ResolversTypes['CollectiveProposal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['PalletProposal'], ParentType, ContextType>;
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
  validators?: Resolver<Array<ResolversTypes['AccountInfo']>, ParentType, ContextType>;
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

export type WhoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Who'] = ResolversParentTypes['Who'],
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  BalanceData?: BalanceDataResolvers<ContextType>;
  Beneficiary?: BeneficiaryResolvers<ContextType>;
  BountiesSummary?: BountiesSummaryResolvers<ContextType>;
  Bounty?: BountyResolvers<ContextType>;
  BountyStatus?: BountyStatusResolvers<ContextType>;
  ChainInfo?: ChainInfoResolvers<ContextType>;
  CollectiveProposal?: CollectiveProposalResolvers<ContextType>;
  Contribution?: ContributionResolvers<ContextType>;
  Conviction?: ConvictionResolvers<ContextType>;
  Council?: CouncilResolvers<ContextType>;
  CouncilCandidate?: CouncilCandidateResolvers<ContextType>;
  CouncilMember?: CouncilMemberResolvers<ContextType>;
  CouncilMotion?: CouncilMotionResolvers<ContextType>;
  Crowdloan?: CrowdloanResolvers<ContextType>;
  CrowdloanContribution?: CrowdloanContributionResolvers<ContextType>;
  CrowdloanSummary?: CrowdloanSummaryResolvers<ContextType>;
  Curator?: CuratorResolvers<ContextType>;
  DemocracyProposal?: DemocracyProposalResolvers<ContextType>;
  DemocracyReferendum?: DemocracyReferendumResolvers<ContextType>;
  DemocracySummary?: DemocracySummaryResolvers<ContextType>;
  Depositor?: DepositorResolvers<ContextType>;
  DeriveAccountRegistration?: DeriveAccountRegistrationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Finder?: FinderResolvers<ContextType>;
  IdentityJudgement?: IdentityJudgementResolvers<ContextType>;
  LaunchPeriodInfo?: LaunchPeriodInfoResolvers<ContextType>;
  Lease?: LeaseResolvers<ContextType>;
  LeasePeriod?: LeasePeriodResolvers<ContextType>;
  ModuleElection?: ModuleElectionResolvers<ContextType>;
  MotionProposal?: MotionProposalResolvers<ContextType>;
  MotionVotes?: MotionVotesResolvers<ContextType>;
  PalletProposal?: PalletProposalResolvers<ContextType>;
  Parachain?: ParachainResolvers<ContextType>;
  ParachainsInfo?: ParachainsInfoResolvers<ContextType>;
  ProposalArg?: ProposalArgResolvers<ContextType>;
  ProposalSecond?: ProposalSecondResolvers<ContextType>;
  ProposalVotes?: ProposalVotesResolvers<ContextType>;
  Proposer?: ProposerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Registrar?: RegistrarResolvers<ContextType>;
  RegistrarsSummary?: RegistrarsSummaryResolvers<ContextType>;
  RegistrationJudgement?: RegistrationJudgementResolvers<ContextType>;
  SpendPeriod?: SpendPeriodResolvers<ContextType>;
  SubAccount?: SubAccountResolvers<ContextType>;
  TermProgress?: TermProgressResolvers<ContextType>;
  Tip?: TipResolvers<ContextType>;
  Tipper?: TipperResolvers<ContextType>;
  Treasury?: TreasuryResolvers<ContextType>;
  TreasuryBalance?: TreasuryBalanceResolvers<ContextType>;
  TreasuryProposal?: TreasuryProposalResolvers<ContextType>;
  TreasurySummary?: TreasurySummaryResolvers<ContextType>;
  ValidatorsGroup?: ValidatorsGroupResolvers<ContextType>;
  VotingStatus?: VotingStatusResolvers<ContextType>;
  Who?: WhoResolvers<ContextType>;
};

import {GraphQLResolveInfo} from 'graphql';
import {PartialCouncilCandidate, PartialCouncilMember} from '../resolvers/Query/council';
import {PartialRegistrar} from '../resolvers/Query/registrars';
import {PartialProposalSecond, PartialProposer} from '../resolvers/Query/democracy';
import {PartialDepositor} from '../resolvers/Query/crowdloan';
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
  display: Scalars['String'];
  registration: DeriveAccountRegistration;
};

export type AccountInfo = {
  __typename?: 'AccountInfo';
  account: Account;
  address: Scalars['String'];
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

export type BountiesSummary = {
  __typename?: 'BountiesSummary';
  activeBounties: Scalars['Int'];
  bountyCount: Scalars['String'];
  pastBounties: Scalars['String'];
  totalValue: Scalars['String'];
  treasurySpendPeriod: Scalars['String'];
};

export type Bounty = {
  __typename?: 'Bounty';
  bond: Scalars['String'];
  bountyStatus?: Maybe<BountyStatus>;
  curatorDeposit: Scalars['String'];
  description: Scalars['String'];
  fee: Scalars['String'];
  index: Scalars['String'];
  proposer: Scalars['String'];
  value: Scalars['String'];
};

export type BountyStatus = {
  __typename?: 'BountyStatus';
  beneficiary?: Maybe<Scalars['String']>;
  curator?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  unlockAt?: Maybe<Scalars['String']>;
  updateDue?: Maybe<Scalars['String']>;
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

export type Conviction = {
  __typename?: 'Conviction';
  text: Scalars['String'];
  value: Scalars['Int'];
};

export type Council = {
  __typename?: 'Council';
  candidates: Array<CouncilCandidate>;
  desiredRunnersUp?: Maybe<Scalars['Int']>;
  desiredSeats?: Maybe<Scalars['Int']>;
  members: Array<CouncilMember>;
  primeMember?: Maybe<CouncilMember>;
  runnersUp: Array<CouncilMember>;
  termProgress: TermProgress;
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
  backing?: Maybe<Scalars['String']>;
  voters: Array<Scalars['String']>;
};

export type CouncilMotion = {
  __typename?: 'CouncilMotion';
  hash: Scalars['String'];
  proposal: MotionProposal;
  votes?: Maybe<MotionVotes>;
};

export type Crowdloan = {
  __typename?: 'Crowdloan';
  cap: Scalars['String'];
  contributorsCount: Scalars['String'];
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
  contributorsCount: Scalars['Int'];
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

export type DemocracySummary = {
  __typename?: 'DemocracySummary';
  activeProposals: Scalars['Int'];
  activeReferendums: Scalars['Int'];
  launchPeriod: Scalars['String'];
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

export type Lease = {
  __typename?: 'Lease';
  blockTime?: Maybe<Scalars['String']>;
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
  ayes: Array<Scalars['String']>;
  end: Scalars['String'];
  index: Scalars['Int'];
  nays: Array<Scalars['String']>;
  threshold: Scalars['Int'];
};

export type PalletProposal = {
  __typename?: 'PalletProposal';
  beneficiary: Scalars['String'];
  bond: Scalars['String'];
  proposer: Scalars['String'];
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
  nonVoters?: Maybe<Array<AccountInfo>>;
  validators?: Maybe<ValidatorsGroup>;
};

export type ParachainsInfo = {
  __typename?: 'ParachainsInfo';
  leasePeriod: LeasePeriod;
  parachainsCount: Scalars['Int'];
  parathreadsCount: Scalars['Int'];
  proposalsCount: Scalars['Int'];
};

export type Proposal = {
  __typename?: 'Proposal';
  args: Array<ProposalArg>;
  balance?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  index: Scalars['String'];
  meta: Scalars['String'];
  method: Scalars['String'];
  proposer: Proposer;
  seconds: Array<ProposalSecond>;
  section: Scalars['String'];
};

export type ProposalArg = {
  __typename?: 'ProposalArg';
  name?: Maybe<Scalars['String']>;
  subCalls?: Maybe<Array<Maybe<Proposal>>>;
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
  democracyProposal?: Maybe<Proposal>;
  democracyProposals: Array<Proposal>;
  democracyReferendum?: Maybe<Referendum>;
  democracyReferendums: Array<Referendum>;
  democracySummary: DemocracySummary;
  endedCrowdloans: Array<Crowdloan>;
  events: Array<Event>;
  moduleElection: ModuleElection;
  parachain?: Maybe<Parachain>;
  parachains?: Maybe<Array<Parachain>>;
  parachainsInfo: ParachainsInfo;
  registrars?: Maybe<Array<Registrar>>;
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

export type Referendum = {
  __typename?: 'Referendum';
  activatePeriod: Array<Scalars['String']>;
  args: Array<ProposalArg>;
  endPeriod: Array<Scalars['String']>;
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

export type Registrar = {
  __typename?: 'Registrar';
  account?: Maybe<Account>;
  address?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  formattedFee?: Maybe<Scalars['String']>;
  /** id: Registrar index */
  id: Scalars['String'];
};

export type RegistrationJudgement = {
  __typename?: 'RegistrationJudgement';
  index?: Maybe<Scalars['Int']>;
  judgement?: Maybe<IdentityJudgement>;
};

export type TermProgress = {
  __typename?: 'TermProgress';
  percentage?: Maybe<Scalars['Int']>;
  termDuration?: Maybe<Scalars['String']>;
  termLeft?: Maybe<Scalars['String']>;
};

export type Tip = {
  __typename?: 'Tip';
  closes?: Maybe<Scalars['String']>;
  deposit?: Maybe<Scalars['String']>;
  finder?: Maybe<Scalars['String']>;
  /** id: Tip Hash */
  id: Scalars['String'];
  median?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  who?: Maybe<Scalars['String']>;
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
  burn?: Maybe<Scalars['String']>;
  proposalCount: Scalars['String'];
  spendPeriod: Scalars['String'];
  treasuryBalance: TreasuryBalance;
};

export type ValidatorsGroup = {
  __typename?: 'ValidatorsGroup';
  groupIndex?: Maybe<Scalars['String']>;
  validators?: Maybe<Array<AccountInfo>>;
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
  Account: ResolverTypeWrapper<Account>;
  AccountInfo: ResolverTypeWrapper<AccountInfo>;
  Balance: ResolverTypeWrapper<Balance>;
  BalanceData: ResolverTypeWrapper<BalanceData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BountiesSummary: ResolverTypeWrapper<BountiesSummary>;
  Bounty: ResolverTypeWrapper<Bounty>;
  BountyStatus: ResolverTypeWrapper<BountyStatus>;
  ChainInfo: ResolverTypeWrapper<ChainInfo>;
  CollectiveProposal: ResolverTypeWrapper<CollectiveProposal>;
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
  CouncilMotion: ResolverTypeWrapper<Omit<CouncilMotion, 'proposal'> & {proposal: ResolversTypes['MotionProposal']}>;
  Crowdloan: ResolverTypeWrapper<Omit<Crowdloan, 'depositor'> & {depositor: ResolversTypes['Depositor']}>;
  CrowdloanContribution: ResolverTypeWrapper<CrowdloanContribution>;
  CrowdloanSummary: ResolverTypeWrapper<CrowdloanSummary>;
  DemocracySummary: ResolverTypeWrapper<DemocracySummary>;
  Depositor: ResolverTypeWrapper<PartialDepositor>;
  DeriveAccountRegistration: ResolverTypeWrapper<DeriveAccountRegistration>;
  Event: ResolverTypeWrapper<Event>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IdentityJudgement: ResolverTypeWrapper<IdentityJudgement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Lease: ResolverTypeWrapper<Lease>;
  LeasePeriod: ResolverTypeWrapper<LeasePeriod>;
  ModuleElection: ResolverTypeWrapper<ModuleElection>;
  MotionProposal: ResolverTypeWrapper<Omit<MotionProposal, 'args'> & {args: Array<ResolversTypes['ProposalArg']>}>;
  MotionVotes: ResolverTypeWrapper<MotionVotes>;
  PalletProposal: ResolverTypeWrapper<PalletProposal>;
  Parachain: ResolverTypeWrapper<Parachain>;
  ParachainsInfo: ResolverTypeWrapper<ParachainsInfo>;
  Proposal: ResolverTypeWrapper<
    Omit<Proposal, 'args' | 'proposer' | 'seconds'> & {
      args: Array<ResolversTypes['ProposalArg']>;
      proposer: ResolversTypes['Proposer'];
      seconds: Array<ResolversTypes['ProposalSecond']>;
    }
  >;
  ProposalArg: ResolverTypeWrapper<
    Omit<ProposalArg, 'subCalls'> & {subCalls?: Maybe<Array<Maybe<ResolversTypes['Proposal']>>>}
  >;
  ProposalSecond: ResolverTypeWrapper<PartialProposalSecond>;
  ProposalVotes: ResolverTypeWrapper<ProposalVotes>;
  Proposer: ResolverTypeWrapper<PartialProposer>;
  Query: ResolverTypeWrapper<{}>;
  Referendum: ResolverTypeWrapper<Omit<Referendum, 'args'> & {args: Array<ResolversTypes['ProposalArg']>}>;
  Registrar: ResolverTypeWrapper<PartialRegistrar>;
  RegistrationJudgement: ResolverTypeWrapper<RegistrationJudgement>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TermProgress: ResolverTypeWrapper<TermProgress>;
  Tip: ResolverTypeWrapper<Tip>;
  Treasury: ResolverTypeWrapper<Treasury>;
  TreasuryBalance: ResolverTypeWrapper<TreasuryBalance>;
  TreasuryProposal: ResolverTypeWrapper<TreasuryProposal>;
  TreasurySummary: ResolverTypeWrapper<TreasurySummary>;
  ValidatorsGroup: ResolverTypeWrapper<ValidatorsGroup>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  AccountInfo: AccountInfo;
  Balance: Balance;
  BalanceData: BalanceData;
  Boolean: Scalars['Boolean'];
  BountiesSummary: BountiesSummary;
  Bounty: Bounty;
  BountyStatus: BountyStatus;
  ChainInfo: ChainInfo;
  CollectiveProposal: CollectiveProposal;
  Conviction: Conviction;
  Council: Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & {
    candidates: Array<ResolversParentTypes['CouncilCandidate']>;
    members: Array<ResolversParentTypes['CouncilMember']>;
    primeMember?: Maybe<ResolversParentTypes['CouncilMember']>;
    runnersUp: Array<ResolversParentTypes['CouncilMember']>;
  };
  CouncilCandidate: PartialCouncilCandidate;
  CouncilMember: PartialCouncilMember;
  CouncilMotion: Omit<CouncilMotion, 'proposal'> & {proposal: ResolversParentTypes['MotionProposal']};
  Crowdloan: Omit<Crowdloan, 'depositor'> & {depositor: ResolversParentTypes['Depositor']};
  CrowdloanContribution: CrowdloanContribution;
  CrowdloanSummary: CrowdloanSummary;
  DemocracySummary: DemocracySummary;
  Depositor: PartialDepositor;
  DeriveAccountRegistration: DeriveAccountRegistration;
  Event: Event;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IdentityJudgement: IdentityJudgement;
  Int: Scalars['Int'];
  Lease: Lease;
  LeasePeriod: LeasePeriod;
  ModuleElection: ModuleElection;
  MotionProposal: Omit<MotionProposal, 'args'> & {args: Array<ResolversParentTypes['ProposalArg']>};
  MotionVotes: MotionVotes;
  PalletProposal: PalletProposal;
  Parachain: Parachain;
  ParachainsInfo: ParachainsInfo;
  Proposal: Omit<Proposal, 'args' | 'proposer' | 'seconds'> & {
    args: Array<ResolversParentTypes['ProposalArg']>;
    proposer: ResolversParentTypes['Proposer'];
    seconds: Array<ResolversParentTypes['ProposalSecond']>;
  };
  ProposalArg: Omit<ProposalArg, 'subCalls'> & {subCalls?: Maybe<Array<Maybe<ResolversParentTypes['Proposal']>>>};
  ProposalSecond: PartialProposalSecond;
  ProposalVotes: ProposalVotes;
  Proposer: PartialProposer;
  Query: {};
  Referendum: Omit<Referendum, 'args'> & {args: Array<ResolversParentTypes['ProposalArg']>};
  Registrar: PartialRegistrar;
  RegistrationJudgement: RegistrationJudgement;
  String: Scalars['String'];
  TermProgress: TermProgress;
  Tip: Tip;
  Treasury: Treasury;
  TreasuryBalance: TreasuryBalance;
  TreasuryProposal: TreasuryProposal;
  TreasurySummary: TreasurySummary;
  ValidatorsGroup: ValidatorsGroup;
};

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['DeriveAccountRegistration'], ParentType, ContextType>;
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

export type BountiesSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BountiesSummary'] = ResolversParentTypes['BountiesSummary'],
> = {
  activeBounties?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bountyCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pastBounties?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treasurySpendPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bounty'] = ResolversParentTypes['Bounty'],
> = {
  bond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bountyStatus?: Resolver<Maybe<ResolversTypes['BountyStatus']>, ParentType, ContextType>;
  curatorDeposit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountyStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BountyStatus'] = ResolversParentTypes['BountyStatus'],
> = {
  beneficiary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  curator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlockAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateDue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  desiredRunnersUp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  desiredSeats?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  primeMember?: Resolver<Maybe<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  runnersUp?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  termProgress?: Resolver<ResolversTypes['TermProgress'], ParentType, ContextType>;
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
  backing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrowdloanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Crowdloan'] = ResolversParentTypes['Crowdloan'],
> = {
  cap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type DemocracySummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DemocracySummary'] = ResolversParentTypes['DemocracySummary'],
> = {
  activeProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeReferendums?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  launchPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type LeaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Lease'] = ResolversParentTypes['Lease'],
> = {
  blockTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  ayes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nays?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PalletProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PalletProposal'] = ResolversParentTypes['PalletProposal'],
> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  nonVoters?: Resolver<Maybe<Array<ResolversTypes['AccountInfo']>>, ParentType, ContextType>;
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

export type ProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal'],
> = {
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Proposer'], ParentType, ContextType>;
  seconds?: Resolver<Array<ResolversTypes['ProposalSecond']>, ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalArgResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProposalArg'] = ResolversParentTypes['ProposalArg'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subCalls?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proposal']>>>, ParentType, ContextType>;
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
    Maybe<ResolversTypes['Proposal']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyProposalArgs, 'index'>
  >;
  democracyProposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType>;
  democracyReferendum?: Resolver<
    Maybe<ResolversTypes['Referendum']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemocracyReferendumArgs, 'index'>
  >;
  democracyReferendums?: Resolver<Array<ResolversTypes['Referendum']>, ParentType, ContextType>;
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
  registrars?: Resolver<Maybe<Array<ResolversTypes['Registrar']>>, ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['Tip']>, ParentType, ContextType, RequireFields<QueryTipArgs, 'id'>>;
  tips?: Resolver<Maybe<Array<ResolversTypes['Tip']>>, ParentType, ContextType>;
  treasury?: Resolver<ResolversTypes['Treasury'], ParentType, ContextType>;
  treasurySummary?: Resolver<ResolversTypes['TreasurySummary'], ParentType, ContextType>;
};

export type ReferendumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Referendum'] = ResolversParentTypes['Referendum'],
> = {
  activatePeriod?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  endPeriod?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
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

export type RegistrarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Registrar'] = ResolversParentTypes['Registrar'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formattedFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type TermProgressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TermProgress'] = ResolversParentTypes['TermProgress'],
> = {
  percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  termDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termLeft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tip'] = ResolversParentTypes['Tip'],
> = {
  closes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deposit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  median?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  who?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  burn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proposalCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  spendPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treasuryBalance?: Resolver<ResolversTypes['TreasuryBalance'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatorsGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ValidatorsGroup'] = ResolversParentTypes['ValidatorsGroup'],
> = {
  groupIndex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  validators?: Resolver<Maybe<Array<ResolversTypes['AccountInfo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountInfo?: AccountInfoResolvers<ContextType>;
  Balance?: BalanceResolvers<ContextType>;
  BalanceData?: BalanceDataResolvers<ContextType>;
  BountiesSummary?: BountiesSummaryResolvers<ContextType>;
  Bounty?: BountyResolvers<ContextType>;
  BountyStatus?: BountyStatusResolvers<ContextType>;
  ChainInfo?: ChainInfoResolvers<ContextType>;
  CollectiveProposal?: CollectiveProposalResolvers<ContextType>;
  Conviction?: ConvictionResolvers<ContextType>;
  Council?: CouncilResolvers<ContextType>;
  CouncilCandidate?: CouncilCandidateResolvers<ContextType>;
  CouncilMember?: CouncilMemberResolvers<ContextType>;
  CouncilMotion?: CouncilMotionResolvers<ContextType>;
  Crowdloan?: CrowdloanResolvers<ContextType>;
  CrowdloanContribution?: CrowdloanContributionResolvers<ContextType>;
  CrowdloanSummary?: CrowdloanSummaryResolvers<ContextType>;
  DemocracySummary?: DemocracySummaryResolvers<ContextType>;
  Depositor?: DepositorResolvers<ContextType>;
  DeriveAccountRegistration?: DeriveAccountRegistrationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  IdentityJudgement?: IdentityJudgementResolvers<ContextType>;
  Lease?: LeaseResolvers<ContextType>;
  LeasePeriod?: LeasePeriodResolvers<ContextType>;
  ModuleElection?: ModuleElectionResolvers<ContextType>;
  MotionProposal?: MotionProposalResolvers<ContextType>;
  MotionVotes?: MotionVotesResolvers<ContextType>;
  PalletProposal?: PalletProposalResolvers<ContextType>;
  Parachain?: ParachainResolvers<ContextType>;
  ParachainsInfo?: ParachainsInfoResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalArg?: ProposalArgResolvers<ContextType>;
  ProposalSecond?: ProposalSecondResolvers<ContextType>;
  ProposalVotes?: ProposalVotesResolvers<ContextType>;
  Proposer?: ProposerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Referendum?: ReferendumResolvers<ContextType>;
  Registrar?: RegistrarResolvers<ContextType>;
  RegistrationJudgement?: RegistrationJudgementResolvers<ContextType>;
  TermProgress?: TermProgressResolvers<ContextType>;
  Tip?: TipResolvers<ContextType>;
  Treasury?: TreasuryResolvers<ContextType>;
  TreasuryBalance?: TreasuryBalanceResolvers<ContextType>;
  TreasuryProposal?: TreasuryProposalResolvers<ContextType>;
  TreasurySummary?: TreasurySummaryResolvers<ContextType>;
  ValidatorsGroup?: ValidatorsGroupResolvers<ContextType>;
};

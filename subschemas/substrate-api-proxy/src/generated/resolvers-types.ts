import { GraphQLResolveInfo } from 'graphql';
import { PartialCouncilCandidate, PartialCouncilMember } from '../resolvers/Query/council';
import { PartialRegistrar } from '../resolvers/Query/registrars';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type Democracy = {
  __typename?: 'Democracy';
  proposals: Array<Maybe<Proposal>>;
};

export type DemocracySummary = {
  __typename?: 'DemocracySummary';
  activeProposalsCount: Scalars['Int'];
  launchPeriod: Scalars['String'];
  publicPropCount: Scalars['Int'];
  referenda: Scalars['Int'];
  referendumTotal: Scalars['Int'];
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

export type Proposal = {
  __typename?: 'Proposal';
  args: Array<ProposalArg>;
  hash: Scalars['String'];
  method: Scalars['String'];
  proposer: Proposer;
  section: Scalars['String'];
};

export type ProposalArg = {
  __typename?: 'ProposalArg';
  name?: Maybe<Scalars['String']>;
  subCalls?: Maybe<Array<Maybe<Proposal>>>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
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
  account?: Maybe<Account>;
  address: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  balance: Balance;
  bounties: Array<Bounty>;
  bountiesSummary: BountiesSummary;
  bounty?: Maybe<Bounty>;
  chainInfo: ChainInfo;
  council: Council;
  councilMotions: Array<CouncilMotion>;
  democracy: Democracy;
  democracySummary: DemocracySummary;
  events: Array<Event>;
  moduleElection: ModuleElection;
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


export type QueryTipArgs = {
  id: Scalars['String'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  Balance: ResolverTypeWrapper<Balance>;
  BalanceData: ResolverTypeWrapper<BalanceData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BountiesSummary: ResolverTypeWrapper<BountiesSummary>;
  Bounty: ResolverTypeWrapper<Bounty>;
  BountyStatus: ResolverTypeWrapper<BountyStatus>;
  ChainInfo: ResolverTypeWrapper<ChainInfo>;
  CollectiveProposal: ResolverTypeWrapper<CollectiveProposal>;
  Council: ResolverTypeWrapper<Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & { candidates: Array<ResolversTypes['CouncilCandidate']>, members: Array<ResolversTypes['CouncilMember']>, primeMember?: Maybe<ResolversTypes['CouncilMember']>, runnersUp: Array<ResolversTypes['CouncilMember']> }>;
  CouncilCandidate: ResolverTypeWrapper<PartialCouncilCandidate>;
  CouncilMember: ResolverTypeWrapper<PartialCouncilMember>;
  CouncilMotion: ResolverTypeWrapper<CouncilMotion>;
  Democracy: ResolverTypeWrapper<Democracy>;
  DemocracySummary: ResolverTypeWrapper<DemocracySummary>;
  DeriveAccountRegistration: ResolverTypeWrapper<DeriveAccountRegistration>;
  Event: ResolverTypeWrapper<Event>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IdentityJudgement: ResolverTypeWrapper<IdentityJudgement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ModuleElection: ResolverTypeWrapper<ModuleElection>;
  MotionProposal: ResolverTypeWrapper<MotionProposal>;
  MotionVotes: ResolverTypeWrapper<MotionVotes>;
  PalletProposal: ResolverTypeWrapper<PalletProposal>;
  Proposal: ResolverTypeWrapper<Proposal>;
  ProposalArg: ResolverTypeWrapper<ProposalArg>;
  ProposalVotes: ResolverTypeWrapper<ProposalVotes>;
  Proposer: ResolverTypeWrapper<Proposer>;
  Query: ResolverTypeWrapper<{}>;
  Registrar: ResolverTypeWrapper<PartialRegistrar>;
  RegistrationJudgement: ResolverTypeWrapper<RegistrationJudgement>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TermProgress: ResolverTypeWrapper<TermProgress>;
  Tip: ResolverTypeWrapper<Tip>;
  Treasury: ResolverTypeWrapper<Treasury>;
  TreasuryBalance: ResolverTypeWrapper<TreasuryBalance>;
  TreasuryProposal: ResolverTypeWrapper<TreasuryProposal>;
  TreasurySummary: ResolverTypeWrapper<TreasurySummary>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Balance: Balance;
  BalanceData: BalanceData;
  Boolean: Scalars['Boolean'];
  BountiesSummary: BountiesSummary;
  Bounty: Bounty;
  BountyStatus: BountyStatus;
  ChainInfo: ChainInfo;
  CollectiveProposal: CollectiveProposal;
  Council: Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & { candidates: Array<ResolversParentTypes['CouncilCandidate']>, members: Array<ResolversParentTypes['CouncilMember']>, primeMember?: Maybe<ResolversParentTypes['CouncilMember']>, runnersUp: Array<ResolversParentTypes['CouncilMember']> };
  CouncilCandidate: PartialCouncilCandidate;
  CouncilMember: PartialCouncilMember;
  CouncilMotion: CouncilMotion;
  Democracy: Democracy;
  DemocracySummary: DemocracySummary;
  DeriveAccountRegistration: DeriveAccountRegistration;
  Event: Event;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IdentityJudgement: IdentityJudgement;
  Int: Scalars['Int'];
  ModuleElection: ModuleElection;
  MotionProposal: MotionProposal;
  MotionVotes: MotionVotes;
  PalletProposal: PalletProposal;
  Proposal: Proposal;
  ProposalArg: ProposalArg;
  ProposalVotes: ProposalVotes;
  Proposer: Proposer;
  Query: {};
  Registrar: PartialRegistrar;
  RegistrationJudgement: RegistrationJudgement;
  String: Scalars['String'];
  TermProgress: TermProgress;
  Tip: Tip;
  Treasury: Treasury;
  TreasuryBalance: TreasuryBalance;
  TreasuryProposal: TreasuryProposal;
  TreasurySummary: TreasurySummary;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['DeriveAccountRegistration'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Balance'] = ResolversParentTypes['Balance']> = {
  consumers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['BalanceData'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sufficients?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BalanceDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BalanceData'] = ResolversParentTypes['BalanceData']> = {
  feeFrozen?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  free?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  miscFrozen?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reserved?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountiesSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BountiesSummary'] = ResolversParentTypes['BountiesSummary']> = {
  activeBounties?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bountyCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pastBounties?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treasurySpendPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BountyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bounty'] = ResolversParentTypes['Bounty']> = {
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

export type BountyStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['BountyStatus'] = ResolversParentTypes['BountyStatus']> = {
  beneficiary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  curator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlockAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateDue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChainInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChainInfo'] = ResolversParentTypes['ChainInfo']> = {
  chain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectiveProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectiveProposal'] = ResolversParentTypes['CollectiveProposal']> = {
  callIndex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['ProposalVotes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilResolvers<ContextType = any, ParentType extends ResolversParentTypes['Council'] = ResolversParentTypes['Council']> = {
  candidates?: Resolver<Array<ResolversTypes['CouncilCandidate']>, ParentType, ContextType>;
  desiredRunnersUp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  desiredSeats?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  primeMember?: Resolver<Maybe<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  runnersUp?: Resolver<Array<ResolversTypes['CouncilMember']>, ParentType, ContextType>;
  termProgress?: Resolver<ResolversTypes['TermProgress'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilCandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CouncilCandidate'] = ResolversParentTypes['CouncilCandidate']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['CouncilMember'] = ResolversParentTypes['CouncilMember']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voters?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouncilMotionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CouncilMotion'] = ResolversParentTypes['CouncilMotion']> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['MotionProposal'], ParentType, ContextType>;
  votes?: Resolver<Maybe<ResolversTypes['MotionVotes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Democracy'] = ResolversParentTypes['Democracy']> = {
  proposals?: Resolver<Array<Maybe<ResolversTypes['Proposal']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DemocracySummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DemocracySummary'] = ResolversParentTypes['DemocracySummary']> = {
  activeProposalsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  launchPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicPropCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referenda?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referendumTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeriveAccountRegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeriveAccountRegistration'] = ResolversParentTypes['DeriveAccountRegistration']> = {
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

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityJudgementResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdentityJudgement'] = ResolversParentTypes['IdentityJudgement']> = {
  isErroneous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFeePaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isKnownGood?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLowQuality?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOutOfDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isReasonable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUnknown?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleElectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModuleElection'] = ResolversParentTypes['ModuleElection']> = {
  hasElections?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MotionProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['MotionProposal'] = ResolversParentTypes['MotionProposal']> = {
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MotionVotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MotionVotes'] = ResolversParentTypes['MotionVotes']> = {
  ayes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nays?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PalletProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['PalletProposal'] = ResolversParentTypes['PalletProposal']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bond?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = {
  args?: Resolver<Array<ResolversTypes['ProposalArg']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Proposer'], ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalArgResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalArg'] = ResolversParentTypes['ProposalArg']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subCalls?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proposal']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalVotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalVotes'] = ResolversParentTypes['ProposalVotes']> = {
  ayes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nays?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  threshold?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proposer'] = ResolversParentTypes['Proposer']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'address'>>;
  balance?: Resolver<ResolversTypes['Balance'], ParentType, ContextType, RequireFields<QueryBalanceArgs, 'address'>>;
  bounties?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  bountiesSummary?: Resolver<ResolversTypes['BountiesSummary'], ParentType, ContextType>;
  bounty?: Resolver<Maybe<ResolversTypes['Bounty']>, ParentType, ContextType, RequireFields<QueryBountyArgs, 'index'>>;
  chainInfo?: Resolver<ResolversTypes['ChainInfo'], ParentType, ContextType>;
  council?: Resolver<ResolversTypes['Council'], ParentType, ContextType>;
  councilMotions?: Resolver<Array<ResolversTypes['CouncilMotion']>, ParentType, ContextType>;
  democracy?: Resolver<ResolversTypes['Democracy'], ParentType, ContextType>;
  democracySummary?: Resolver<ResolversTypes['DemocracySummary'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  moduleElection?: Resolver<ResolversTypes['ModuleElection'], ParentType, ContextType>;
  registrars?: Resolver<Maybe<Array<ResolversTypes['Registrar']>>, ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['Tip']>, ParentType, ContextType, RequireFields<QueryTipArgs, 'id'>>;
  tips?: Resolver<Maybe<Array<ResolversTypes['Tip']>>, ParentType, ContextType>;
  treasury?: Resolver<ResolversTypes['Treasury'], ParentType, ContextType>;
  treasurySummary?: Resolver<ResolversTypes['TreasurySummary'], ParentType, ContextType>;
};

export type RegistrarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Registrar'] = ResolversParentTypes['Registrar']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formattedFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistrationJudgementResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegistrationJudgement'] = ResolversParentTypes['RegistrationJudgement']> = {
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  judgement?: Resolver<Maybe<ResolversTypes['IdentityJudgement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermProgressResolvers<ContextType = any, ParentType extends ResolversParentTypes['TermProgress'] = ResolversParentTypes['TermProgress']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  termDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termLeft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tip'] = ResolversParentTypes['Tip']> = {
  closes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deposit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  median?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  who?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasuryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Treasury'] = ResolversParentTypes['Treasury']> = {
  approvals?: Resolver<Array<ResolversTypes['TreasuryProposal']>, ParentType, ContextType>;
  proposals?: Resolver<Array<ResolversTypes['TreasuryProposal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasuryBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TreasuryBalance'] = ResolversParentTypes['TreasuryBalance']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountNonce?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freeBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frozenFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frozenMisc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reservedBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votingBalance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasuryProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['TreasuryProposal'] = ResolversParentTypes['TreasuryProposal']> = {
  councils?: Resolver<Array<ResolversTypes['CollectiveProposal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['PalletProposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreasurySummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TreasurySummary'] = ResolversParentTypes['TreasurySummary']> = {
  activeProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  approvedProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  burn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proposalCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  spendPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treasuryBalance?: Resolver<ResolversTypes['TreasuryBalance'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Balance?: BalanceResolvers<ContextType>;
  BalanceData?: BalanceDataResolvers<ContextType>;
  BountiesSummary?: BountiesSummaryResolvers<ContextType>;
  Bounty?: BountyResolvers<ContextType>;
  BountyStatus?: BountyStatusResolvers<ContextType>;
  ChainInfo?: ChainInfoResolvers<ContextType>;
  CollectiveProposal?: CollectiveProposalResolvers<ContextType>;
  Council?: CouncilResolvers<ContextType>;
  CouncilCandidate?: CouncilCandidateResolvers<ContextType>;
  CouncilMember?: CouncilMemberResolvers<ContextType>;
  CouncilMotion?: CouncilMotionResolvers<ContextType>;
  Democracy?: DemocracyResolvers<ContextType>;
  DemocracySummary?: DemocracySummaryResolvers<ContextType>;
  DeriveAccountRegistration?: DeriveAccountRegistrationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  IdentityJudgement?: IdentityJudgementResolvers<ContextType>;
  ModuleElection?: ModuleElectionResolvers<ContextType>;
  MotionProposal?: MotionProposalResolvers<ContextType>;
  MotionVotes?: MotionVotesResolvers<ContextType>;
  PalletProposal?: PalletProposalResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalArg?: ProposalArgResolvers<ContextType>;
  ProposalVotes?: ProposalVotesResolvers<ContextType>;
  Proposer?: ProposerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Registrar?: RegistrarResolvers<ContextType>;
  RegistrationJudgement?: RegistrationJudgementResolvers<ContextType>;
  TermProgress?: TermProgressResolvers<ContextType>;
  Tip?: TipResolvers<ContextType>;
  Treasury?: TreasuryResolvers<ContextType>;
  TreasuryBalance?: TreasuryBalanceResolvers<ContextType>;
  TreasuryProposal?: TreasuryProposalResolvers<ContextType>;
  TreasurySummary?: TreasurySummaryResolvers<ContextType>;
};


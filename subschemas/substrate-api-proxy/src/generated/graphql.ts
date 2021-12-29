import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { PartialCouncilCandidate, PartialCouncilMember } from '../resolvers/Query/council';
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
  /** Big number integer */
  BigInt: any;
  /** Binary data encoded as a hex string always prefixed with 0x */
  Bytes: any;
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: any;
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
  status: Scalars['String'];
  unlockAt?: Maybe<Scalars['String']>;
  updateDue?: Maybe<Scalars['String']>;
};

export type ChainInfo = {
  __typename?: 'ChainInfo';
  chain: Scalars['String'];
  nodeName: Scalars['String'];
  nodeVersion: Scalars['String'];
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

export type IdentitiesConnection = {
  __typename?: 'IdentitiesConnection';
  edges: Array<IdentityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Identity = {
  __typename?: 'Identity';
  additional?: Maybe<Array<Maybe<Scalars['String']>>>;
  address: Scalars['String'];
  deposit: Scalars['BigInt'];
  display: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  legal?: Maybe<Scalars['String']>;
  pgpFingerprint?: Maybe<Scalars['String']>;
  riot?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type IdentityEdge = {
  __typename?: 'IdentityEdge';
  cursor: Scalars['String'];
  node: Identity;
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

export enum IdentityOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  DepositAsc = 'deposit_ASC',
  DepositDesc = 'deposit_DESC',
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  LegalAsc = 'legal_ASC',
  LegalDesc = 'legal_DESC',
  PgpFingerprintAsc = 'pgpFingerprint_ASC',
  PgpFingerprintDesc = 'pgpFingerprint_DESC',
  RiotAsc = 'riot_ASC',
  RiotDesc = 'riot_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  WebAsc = 'web_ASC',
  WebDesc = 'web_DESC'
}

export type IdentityWhereInput = {
  AND?: InputMaybe<Array<IdentityWhereInput>>;
  OR?: InputMaybe<Array<IdentityWhereInput>>;
  additional_containsAll?: InputMaybe<Array<Scalars['String']>>;
  additional_containsAny?: InputMaybe<Array<Scalars['String']>>;
  additional_containsNone?: InputMaybe<Array<Scalars['String']>>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_endsWith?: InputMaybe<Scalars['String']>;
  address_eq?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_endsWith?: InputMaybe<Scalars['String']>;
  address_not_eq?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_startsWith?: InputMaybe<Scalars['String']>;
  address_startsWith?: InputMaybe<Scalars['String']>;
  deposit_eq?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not_eq?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  display_contains?: InputMaybe<Scalars['String']>;
  display_endsWith?: InputMaybe<Scalars['String']>;
  display_eq?: InputMaybe<Scalars['String']>;
  display_gt?: InputMaybe<Scalars['String']>;
  display_gte?: InputMaybe<Scalars['String']>;
  display_in?: InputMaybe<Array<Scalars['String']>>;
  display_lt?: InputMaybe<Scalars['String']>;
  display_lte?: InputMaybe<Scalars['String']>;
  display_not_contains?: InputMaybe<Scalars['String']>;
  display_not_endsWith?: InputMaybe<Scalars['String']>;
  display_not_eq?: InputMaybe<Scalars['String']>;
  display_not_in?: InputMaybe<Array<Scalars['String']>>;
  display_not_startsWith?: InputMaybe<Scalars['String']>;
  display_startsWith?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_endsWith?: InputMaybe<Scalars['String']>;
  email_eq?: InputMaybe<Scalars['String']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<Scalars['String']>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_endsWith?: InputMaybe<Scalars['String']>;
  email_not_eq?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  email_not_startsWith?: InputMaybe<Scalars['String']>;
  email_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_endsWith?: InputMaybe<Scalars['String']>;
  image_eq?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_endsWith?: InputMaybe<Scalars['String']>;
  image_not_eq?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_startsWith?: InputMaybe<Scalars['String']>;
  image_startsWith?: InputMaybe<Scalars['String']>;
  legal_contains?: InputMaybe<Scalars['String']>;
  legal_endsWith?: InputMaybe<Scalars['String']>;
  legal_eq?: InputMaybe<Scalars['String']>;
  legal_gt?: InputMaybe<Scalars['String']>;
  legal_gte?: InputMaybe<Scalars['String']>;
  legal_in?: InputMaybe<Array<Scalars['String']>>;
  legal_lt?: InputMaybe<Scalars['String']>;
  legal_lte?: InputMaybe<Scalars['String']>;
  legal_not_contains?: InputMaybe<Scalars['String']>;
  legal_not_endsWith?: InputMaybe<Scalars['String']>;
  legal_not_eq?: InputMaybe<Scalars['String']>;
  legal_not_in?: InputMaybe<Array<Scalars['String']>>;
  legal_not_startsWith?: InputMaybe<Scalars['String']>;
  legal_startsWith?: InputMaybe<Scalars['String']>;
  pgpFingerprint_contains?: InputMaybe<Scalars['String']>;
  pgpFingerprint_endsWith?: InputMaybe<Scalars['String']>;
  pgpFingerprint_eq?: InputMaybe<Scalars['String']>;
  pgpFingerprint_gt?: InputMaybe<Scalars['String']>;
  pgpFingerprint_gte?: InputMaybe<Scalars['String']>;
  pgpFingerprint_in?: InputMaybe<Array<Scalars['String']>>;
  pgpFingerprint_lt?: InputMaybe<Scalars['String']>;
  pgpFingerprint_lte?: InputMaybe<Scalars['String']>;
  pgpFingerprint_not_contains?: InputMaybe<Scalars['String']>;
  pgpFingerprint_not_endsWith?: InputMaybe<Scalars['String']>;
  pgpFingerprint_not_eq?: InputMaybe<Scalars['String']>;
  pgpFingerprint_not_in?: InputMaybe<Array<Scalars['String']>>;
  pgpFingerprint_not_startsWith?: InputMaybe<Scalars['String']>;
  pgpFingerprint_startsWith?: InputMaybe<Scalars['String']>;
  riot_contains?: InputMaybe<Scalars['String']>;
  riot_endsWith?: InputMaybe<Scalars['String']>;
  riot_eq?: InputMaybe<Scalars['String']>;
  riot_gt?: InputMaybe<Scalars['String']>;
  riot_gte?: InputMaybe<Scalars['String']>;
  riot_in?: InputMaybe<Array<Scalars['String']>>;
  riot_lt?: InputMaybe<Scalars['String']>;
  riot_lte?: InputMaybe<Scalars['String']>;
  riot_not_contains?: InputMaybe<Scalars['String']>;
  riot_not_endsWith?: InputMaybe<Scalars['String']>;
  riot_not_eq?: InputMaybe<Scalars['String']>;
  riot_not_in?: InputMaybe<Array<Scalars['String']>>;
  riot_not_startsWith?: InputMaybe<Scalars['String']>;
  riot_startsWith?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_endsWith?: InputMaybe<Scalars['String']>;
  twitter_eq?: InputMaybe<Scalars['String']>;
  twitter_gt?: InputMaybe<Scalars['String']>;
  twitter_gte?: InputMaybe<Scalars['String']>;
  twitter_in?: InputMaybe<Array<Scalars['String']>>;
  twitter_lt?: InputMaybe<Scalars['String']>;
  twitter_lte?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_endsWith?: InputMaybe<Scalars['String']>;
  twitter_not_eq?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<Scalars['String']>>;
  twitter_not_startsWith?: InputMaybe<Scalars['String']>;
  twitter_startsWith?: InputMaybe<Scalars['String']>;
  web_contains?: InputMaybe<Scalars['String']>;
  web_endsWith?: InputMaybe<Scalars['String']>;
  web_eq?: InputMaybe<Scalars['String']>;
  web_gt?: InputMaybe<Scalars['String']>;
  web_gte?: InputMaybe<Scalars['String']>;
  web_in?: InputMaybe<Array<Scalars['String']>>;
  web_lt?: InputMaybe<Scalars['String']>;
  web_lte?: InputMaybe<Scalars['String']>;
  web_not_contains?: InputMaybe<Scalars['String']>;
  web_not_endsWith?: InputMaybe<Scalars['String']>;
  web_not_eq?: InputMaybe<Scalars['String']>;
  web_not_in?: InputMaybe<Array<Scalars['String']>>;
  web_not_startsWith?: InputMaybe<Scalars['String']>;
  web_startsWith?: InputMaybe<Scalars['String']>;
};

export type IdentityWhereUniqueInput = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
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
  democracy: Democracy;
  democracySummary: DemocracySummary;
  events: Array<Event>;
  identities: Array<Identity>;
  identitiesConnection: IdentitiesConnection;
  identityById?: Maybe<Identity>;
  /** @deprecated Use `identityById` */
  identityByUniqueInput?: Maybe<Identity>;
  tip?: Maybe<Tip>;
  tips?: Maybe<Array<Tip>>;
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


export type QueryIdentitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<IdentityOrderByInput>>>;
  where?: InputMaybe<IdentityWhereInput>;
};


export type QueryIdentitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<IdentityOrderByInput>;
  where?: InputMaybe<IdentityWhereInput>;
};


export type QueryIdentityByIdArgs = {
  id: Scalars['ID'];
};


export type QueryIdentityByUniqueInputArgs = {
  where: IdentityWhereUniqueInput;
};


export type QueryTipArgs = {
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
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BountiesSummary: ResolverTypeWrapper<BountiesSummary>;
  Bounty: ResolverTypeWrapper<Bounty>;
  BountyStatus: ResolverTypeWrapper<BountyStatus>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  ChainInfo: ResolverTypeWrapper<ChainInfo>;
  Council: ResolverTypeWrapper<Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & { candidates: Array<ResolversTypes['CouncilCandidate']>, members: Array<ResolversTypes['CouncilMember']>, primeMember?: Maybe<ResolversTypes['CouncilMember']>, runnersUp: Array<ResolversTypes['CouncilMember']> }>;
  CouncilCandidate: ResolverTypeWrapper<PartialCouncilCandidate>;
  CouncilMember: ResolverTypeWrapper<PartialCouncilMember>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Democracy: ResolverTypeWrapper<Democracy>;
  DemocracySummary: ResolverTypeWrapper<DemocracySummary>;
  DeriveAccountRegistration: ResolverTypeWrapper<DeriveAccountRegistration>;
  Event: ResolverTypeWrapper<Event>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IdentitiesConnection: ResolverTypeWrapper<IdentitiesConnection>;
  Identity: ResolverTypeWrapper<Identity>;
  IdentityEdge: ResolverTypeWrapper<IdentityEdge>;
  IdentityJudgement: ResolverTypeWrapper<IdentityJudgement>;
  IdentityOrderByInput: IdentityOrderByInput;
  IdentityWhereInput: IdentityWhereInput;
  IdentityWhereUniqueInput: IdentityWhereUniqueInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Proposal: ResolverTypeWrapper<Proposal>;
  ProposalArg: ResolverTypeWrapper<ProposalArg>;
  Proposer: ResolverTypeWrapper<Proposer>;
  Query: ResolverTypeWrapper<{}>;
  RegistrationJudgement: ResolverTypeWrapper<RegistrationJudgement>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TermProgress: ResolverTypeWrapper<TermProgress>;
  Tip: ResolverTypeWrapper<Tip>;
  TreasuryBalance: ResolverTypeWrapper<TreasuryBalance>;
  TreasurySummary: ResolverTypeWrapper<TreasurySummary>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Balance: Balance;
  BalanceData: BalanceData;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  BountiesSummary: BountiesSummary;
  Bounty: Bounty;
  BountyStatus: BountyStatus;
  Bytes: Scalars['Bytes'];
  ChainInfo: ChainInfo;
  Council: Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & { candidates: Array<ResolversParentTypes['CouncilCandidate']>, members: Array<ResolversParentTypes['CouncilMember']>, primeMember?: Maybe<ResolversParentTypes['CouncilMember']>, runnersUp: Array<ResolversParentTypes['CouncilMember']> };
  CouncilCandidate: PartialCouncilCandidate;
  CouncilMember: PartialCouncilMember;
  DateTime: Scalars['DateTime'];
  Democracy: Democracy;
  DemocracySummary: DemocracySummary;
  DeriveAccountRegistration: DeriveAccountRegistration;
  Event: Event;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IdentitiesConnection: IdentitiesConnection;
  Identity: Identity;
  IdentityEdge: IdentityEdge;
  IdentityJudgement: IdentityJudgement;
  IdentityWhereInput: IdentityWhereInput;
  IdentityWhereUniqueInput: IdentityWhereUniqueInput;
  Int: Scalars['Int'];
  PageInfo: PageInfo;
  Proposal: Proposal;
  ProposalArg: ProposalArg;
  Proposer: Proposer;
  Query: {};
  RegistrationJudgement: RegistrationJudgement;
  String: Scalars['String'];
  TermProgress: TermProgress;
  Tip: Tip;
  TreasuryBalance: TreasuryBalance;
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

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

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
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unlockAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateDue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ChainInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChainInfo'] = ResolversParentTypes['ChainInfo']> = {
  chain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

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

export type IdentitiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdentitiesConnection'] = ResolversParentTypes['IdentitiesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['IdentityEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Identity'] = ResolversParentTypes['Identity']> = {
  additional?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  legal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pgpFingerprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  riot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdentityEdge'] = ResolversParentTypes['IdentityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Identity'], ParentType, ContextType>;
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

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  democracy?: Resolver<ResolversTypes['Democracy'], ParentType, ContextType>;
  democracySummary?: Resolver<ResolversTypes['DemocracySummary'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  identities?: Resolver<Array<ResolversTypes['Identity']>, ParentType, ContextType, RequireFields<QueryIdentitiesArgs, never>>;
  identitiesConnection?: Resolver<ResolversTypes['IdentitiesConnection'], ParentType, ContextType, RequireFields<QueryIdentitiesConnectionArgs, 'orderBy'>>;
  identityById?: Resolver<Maybe<ResolversTypes['Identity']>, ParentType, ContextType, RequireFields<QueryIdentityByIdArgs, 'id'>>;
  identityByUniqueInput?: Resolver<Maybe<ResolversTypes['Identity']>, ParentType, ContextType, RequireFields<QueryIdentityByUniqueInputArgs, 'where'>>;
  tip?: Resolver<Maybe<ResolversTypes['Tip']>, ParentType, ContextType, RequireFields<QueryTipArgs, 'id'>>;
  tips?: Resolver<Maybe<Array<ResolversTypes['Tip']>>, ParentType, ContextType>;
  treasurySummary?: Resolver<ResolversTypes['TreasurySummary'], ParentType, ContextType>;
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
  BigInt?: GraphQLScalarType;
  BountiesSummary?: BountiesSummaryResolvers<ContextType>;
  Bounty?: BountyResolvers<ContextType>;
  BountyStatus?: BountyStatusResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  ChainInfo?: ChainInfoResolvers<ContextType>;
  Council?: CouncilResolvers<ContextType>;
  CouncilCandidate?: CouncilCandidateResolvers<ContextType>;
  CouncilMember?: CouncilMemberResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Democracy?: DemocracyResolvers<ContextType>;
  DemocracySummary?: DemocracySummaryResolvers<ContextType>;
  DeriveAccountRegistration?: DeriveAccountRegistrationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  IdentitiesConnection?: IdentitiesConnectionResolvers<ContextType>;
  Identity?: IdentityResolvers<ContextType>;
  IdentityEdge?: IdentityEdgeResolvers<ContextType>;
  IdentityJudgement?: IdentityJudgementResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalArg?: ProposalArgResolvers<ContextType>;
  Proposer?: ProposerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegistrationJudgement?: RegistrationJudgementResolvers<ContextType>;
  TermProgress?: TermProgressResolvers<ContextType>;
  Tip?: TipResolvers<ContextType>;
  TreasuryBalance?: TreasuryBalanceResolvers<ContextType>;
  TreasurySummary?: TreasurySummaryResolvers<ContextType>;
};


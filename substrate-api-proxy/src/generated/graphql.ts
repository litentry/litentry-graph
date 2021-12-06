import { GraphQLResolveInfo } from 'graphql';
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

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  balance: Balance;
  chainInfo: ChainInfo;
  council: Council;
  events: Array<Event>;
  tip?: Maybe<Tip>;
  tips?: Maybe<Array<Tip>>;
};


export type QueryAccountArgs = {
  address: Scalars['String'];
};


export type QueryBalanceArgs = {
  address: Scalars['String'];
  blockNumber?: InputMaybe<Scalars['Int']>;
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
  ChainInfo: ResolverTypeWrapper<ChainInfo>;
  Council: ResolverTypeWrapper<Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & { candidates: Array<ResolversTypes['CouncilCandidate']>, members: Array<ResolversTypes['CouncilMember']>, primeMember?: Maybe<ResolversTypes['CouncilMember']>, runnersUp: Array<ResolversTypes['CouncilMember']> }>;
  CouncilCandidate: ResolverTypeWrapper<PartialCouncilCandidate>;
  CouncilMember: ResolverTypeWrapper<PartialCouncilMember>;
  DeriveAccountRegistration: ResolverTypeWrapper<DeriveAccountRegistration>;
  Event: ResolverTypeWrapper<Event>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IdentityJudgement: ResolverTypeWrapper<IdentityJudgement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  RegistrationJudgement: ResolverTypeWrapper<RegistrationJudgement>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TermProgress: ResolverTypeWrapper<TermProgress>;
  Tip: ResolverTypeWrapper<Tip>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Balance: Balance;
  BalanceData: BalanceData;
  Boolean: Scalars['Boolean'];
  ChainInfo: ChainInfo;
  Council: Omit<Council, 'candidates' | 'members' | 'primeMember' | 'runnersUp'> & { candidates: Array<ResolversParentTypes['CouncilCandidate']>, members: Array<ResolversParentTypes['CouncilMember']>, primeMember?: Maybe<ResolversParentTypes['CouncilMember']>, runnersUp: Array<ResolversParentTypes['CouncilMember']> };
  CouncilCandidate: PartialCouncilCandidate;
  CouncilMember: PartialCouncilMember;
  DeriveAccountRegistration: DeriveAccountRegistration;
  Event: Event;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IdentityJudgement: IdentityJudgement;
  Int: Scalars['Int'];
  Query: {};
  RegistrationJudgement: RegistrationJudgement;
  String: Scalars['String'];
  TermProgress: TermProgress;
  Tip: Tip;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'address'>>;
  balance?: Resolver<ResolversTypes['Balance'], ParentType, ContextType, RequireFields<QueryBalanceArgs, 'address'>>;
  chainInfo?: Resolver<ResolversTypes['ChainInfo'], ParentType, ContextType>;
  council?: Resolver<ResolversTypes['Council'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['Tip']>, ParentType, ContextType, RequireFields<QueryTipArgs, 'id'>>;
  tips?: Resolver<Maybe<Array<ResolversTypes['Tip']>>, ParentType, ContextType>;
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

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Balance?: BalanceResolvers<ContextType>;
  BalanceData?: BalanceDataResolvers<ContextType>;
  ChainInfo?: ChainInfoResolvers<ContextType>;
  Council?: CouncilResolvers<ContextType>;
  CouncilCandidate?: CouncilCandidateResolvers<ContextType>;
  CouncilMember?: CouncilMemberResolvers<ContextType>;
  DeriveAccountRegistration?: DeriveAccountRegistrationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  IdentityJudgement?: IdentityJudgementResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegistrationJudgement?: RegistrationJudgementResolvers<ContextType>;
  TermProgress?: TermProgressResolvers<ContextType>;
  Tip?: TipResolvers<ContextType>;
};


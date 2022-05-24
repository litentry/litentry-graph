import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  /** Big number integer */
  BigInt: any;
  /** Binary data encoded as a hex string always prefixed with 0x */
  Bytes: any;
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: any;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  substrateTipById?: Maybe<SubstrateTip>;
  /** @deprecated Use `substrateTipById` */
  substrateTipByUniqueInput?: Maybe<SubstrateTip>;
  substrateTipperById?: Maybe<SubstrateTipper>;
  /** @deprecated Use `substrateTipperById` */
  substrateTipperByUniqueInput?: Maybe<SubstrateTipper>;
  substrateTippers: Array<SubstrateTipper>;
  substrateTippersConnection: SubstrateTippersConnection;
  substrateTips: Array<SubstrateTip>;
  substrateTipsConnection: SubstrateTipsConnection;
};

export type QuerySubstrateTipByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateTipByUniqueInputArgs = {
  where: SubstrateTipWhereUniqueInput;
};

export type QuerySubstrateTipperByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateTipperByUniqueInputArgs = {
  where: SubstrateTipperWhereUniqueInput;
};

export type QuerySubstrateTippersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTipperOrderByInput>>>;
  where?: InputMaybe<SubstrateTipperWhereInput>;
};

export type QuerySubstrateTippersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateTipperOrderByInput>;
  where?: InputMaybe<SubstrateTipperWhereInput>;
};

export type QuerySubstrateTipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTipOrderByInput>>>;
  where?: InputMaybe<SubstrateTipWhereInput>;
};

export type QuerySubstrateTipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateTipOrderByInput>;
  where?: InputMaybe<SubstrateTipWhereInput>;
};

export enum SubstrateNetwork {
  Kusama = 'kusama',
  Phala = 'phala',
  Polkadot = 'polkadot',
}

export type SubstrateTip = {
  __typename?: 'SubstrateTip';
  /** address */
  account: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  closes?: Maybe<Scalars['BigInt']>;
  createdAt: Scalars['DateTime'];
  deposit?: Maybe<Scalars['BigInt']>;
  finder?: Maybe<Scalars['String']>;
  /** hash */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  reason: Scalars['String'];
  /** hex address */
  rootAccount: Scalars['String'];
  status: SubstrateTipStatus;
  tipValue?: Maybe<Scalars['BigInt']>;
  tippers: Array<SubstrateTipper>;
  updatedAt: Scalars['DateTime'];
  who: Scalars['String'];
};

export type SubstrateTipTippersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTipperOrderByInput>>>;
  where?: InputMaybe<SubstrateTipperWhereInput>;
};

export type SubstrateTipEdge = {
  __typename?: 'SubstrateTipEdge';
  cursor: Scalars['String'];
  node: SubstrateTip;
};

export enum SubstrateTipOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  ClosesAsc = 'closes_ASC',
  ClosesDesc = 'closes_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DepositAsc = 'deposit_ASC',
  DepositDesc = 'deposit_DESC',
  FinderAsc = 'finder_ASC',
  FinderDesc = 'finder_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ReasonAsc = 'reason_ASC',
  ReasonDesc = 'reason_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TipValueAsc = 'tipValue_ASC',
  TipValueDesc = 'tipValue_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC',
}

export enum SubstrateTipStatus {
  Closed = 'Closed',
  Opened = 'Opened',
  Retracted = 'Retracted',
  Slashed = 'Slashed',
}

export type SubstrateTipWhereInput = {
  AND?: InputMaybe<Array<SubstrateTipWhereInput>>;
  OR?: InputMaybe<Array<SubstrateTipWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_endsWith?: InputMaybe<Scalars['String']>;
  account_eq?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_endsWith?: InputMaybe<Scalars['String']>;
  account_not_eq?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']>;
  account_startsWith?: InputMaybe<Scalars['String']>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closes_eq?: InputMaybe<Scalars['BigInt']>;
  closes_gt?: InputMaybe<Scalars['BigInt']>;
  closes_gte?: InputMaybe<Scalars['BigInt']>;
  closes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closes_isNull?: InputMaybe<Scalars['Boolean']>;
  closes_lt?: InputMaybe<Scalars['BigInt']>;
  closes_lte?: InputMaybe<Scalars['BigInt']>;
  closes_not_eq?: InputMaybe<Scalars['BigInt']>;
  closes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  deposit_eq?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_isNull?: InputMaybe<Scalars['Boolean']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not_eq?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  finder_contains?: InputMaybe<Scalars['String']>;
  finder_endsWith?: InputMaybe<Scalars['String']>;
  finder_eq?: InputMaybe<Scalars['String']>;
  finder_gt?: InputMaybe<Scalars['String']>;
  finder_gte?: InputMaybe<Scalars['String']>;
  finder_in?: InputMaybe<Array<Scalars['String']>>;
  finder_isNull?: InputMaybe<Scalars['Boolean']>;
  finder_lt?: InputMaybe<Scalars['String']>;
  finder_lte?: InputMaybe<Scalars['String']>;
  finder_not_contains?: InputMaybe<Scalars['String']>;
  finder_not_endsWith?: InputMaybe<Scalars['String']>;
  finder_not_eq?: InputMaybe<Scalars['String']>;
  finder_not_in?: InputMaybe<Array<Scalars['String']>>;
  finder_not_startsWith?: InputMaybe<Scalars['String']>;
  finder_startsWith?: InputMaybe<Scalars['String']>;
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
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_endsWith?: InputMaybe<Scalars['String']>;
  reason_eq?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_endsWith?: InputMaybe<Scalars['String']>;
  reason_not_eq?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_startsWith?: InputMaybe<Scalars['String']>;
  reason_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  status_eq?: InputMaybe<SubstrateTipStatus>;
  status_in?: InputMaybe<Array<SubstrateTipStatus>>;
  status_not_eq?: InputMaybe<SubstrateTipStatus>;
  status_not_in?: InputMaybe<Array<SubstrateTipStatus>>;
  tipValue_eq?: InputMaybe<Scalars['BigInt']>;
  tipValue_gt?: InputMaybe<Scalars['BigInt']>;
  tipValue_gte?: InputMaybe<Scalars['BigInt']>;
  tipValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tipValue_isNull?: InputMaybe<Scalars['Boolean']>;
  tipValue_lt?: InputMaybe<Scalars['BigInt']>;
  tipValue_lte?: InputMaybe<Scalars['BigInt']>;
  tipValue_not_eq?: InputMaybe<Scalars['BigInt']>;
  tipValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tippers_every?: InputMaybe<SubstrateTipperWhereInput>;
  tippers_none?: InputMaybe<SubstrateTipperWhereInput>;
  tippers_some?: InputMaybe<SubstrateTipperWhereInput>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  who_contains?: InputMaybe<Scalars['String']>;
  who_endsWith?: InputMaybe<Scalars['String']>;
  who_eq?: InputMaybe<Scalars['String']>;
  who_gt?: InputMaybe<Scalars['String']>;
  who_gte?: InputMaybe<Scalars['String']>;
  who_in?: InputMaybe<Array<Scalars['String']>>;
  who_lt?: InputMaybe<Scalars['String']>;
  who_lte?: InputMaybe<Scalars['String']>;
  who_not_contains?: InputMaybe<Scalars['String']>;
  who_not_endsWith?: InputMaybe<Scalars['String']>;
  who_not_eq?: InputMaybe<Scalars['String']>;
  who_not_in?: InputMaybe<Array<Scalars['String']>>;
  who_not_startsWith?: InputMaybe<Scalars['String']>;
  who_startsWith?: InputMaybe<Scalars['String']>;
};

export type SubstrateTipWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateTipper = {
  __typename?: 'SubstrateTipper';
  /** address */
  account: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  createdAt: Scalars['DateTime'];
  /** address:hash */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  /** hex address */
  rootAccount: Scalars['String'];
  tip: SubstrateTip;
  tipValue: Scalars['BigInt'];
};

export type SubstrateTipperEdge = {
  __typename?: 'SubstrateTipperEdge';
  cursor: Scalars['String'];
  node: SubstrateTipper;
};

export enum SubstrateTipperOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  TipValueAsc = 'tipValue_ASC',
  TipValueDesc = 'tipValue_DESC',
  TipAccountAsc = 'tip_account_ASC',
  TipAccountDesc = 'tip_account_DESC',
  TipBlockNumberAsc = 'tip_blockNumber_ASC',
  TipBlockNumberDesc = 'tip_blockNumber_DESC',
  TipClosesAsc = 'tip_closes_ASC',
  TipClosesDesc = 'tip_closes_DESC',
  TipCreatedAtAsc = 'tip_createdAt_ASC',
  TipCreatedAtDesc = 'tip_createdAt_DESC',
  TipDepositAsc = 'tip_deposit_ASC',
  TipDepositDesc = 'tip_deposit_DESC',
  TipFinderAsc = 'tip_finder_ASC',
  TipFinderDesc = 'tip_finder_DESC',
  TipIdAsc = 'tip_id_ASC',
  TipIdDesc = 'tip_id_DESC',
  TipNetworkAsc = 'tip_network_ASC',
  TipNetworkDesc = 'tip_network_DESC',
  TipReasonAsc = 'tip_reason_ASC',
  TipReasonDesc = 'tip_reason_DESC',
  TipRootAccountAsc = 'tip_rootAccount_ASC',
  TipRootAccountDesc = 'tip_rootAccount_DESC',
  TipStatusAsc = 'tip_status_ASC',
  TipStatusDesc = 'tip_status_DESC',
  TipTipValueAsc = 'tip_tipValue_ASC',
  TipTipValueDesc = 'tip_tipValue_DESC',
  TipUpdatedAtAsc = 'tip_updatedAt_ASC',
  TipUpdatedAtDesc = 'tip_updatedAt_DESC',
  TipWhoAsc = 'tip_who_ASC',
  TipWhoDesc = 'tip_who_DESC',
}

export type SubstrateTipperWhereInput = {
  AND?: InputMaybe<Array<SubstrateTipperWhereInput>>;
  OR?: InputMaybe<Array<SubstrateTipperWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_endsWith?: InputMaybe<Scalars['String']>;
  account_eq?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_endsWith?: InputMaybe<Scalars['String']>;
  account_not_eq?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']>;
  account_startsWith?: InputMaybe<Scalars['String']>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
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
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  tip?: InputMaybe<SubstrateTipWhereInput>;
  tipValue_eq?: InputMaybe<Scalars['BigInt']>;
  tipValue_gt?: InputMaybe<Scalars['BigInt']>;
  tipValue_gte?: InputMaybe<Scalars['BigInt']>;
  tipValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tipValue_lt?: InputMaybe<Scalars['BigInt']>;
  tipValue_lte?: InputMaybe<Scalars['BigInt']>;
  tipValue_not_eq?: InputMaybe<Scalars['BigInt']>;
  tipValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type SubstrateTipperWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateTippersConnection = {
  __typename?: 'SubstrateTippersConnection';
  edges: Array<SubstrateTipperEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateTipsConnection = {
  __typename?: 'SubstrateTipsConnection';
  edges: Array<SubstrateTipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
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
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubstrateNetwork: SubstrateNetwork;
  SubstrateTip: ResolverTypeWrapper<SubstrateTip>;
  SubstrateTipEdge: ResolverTypeWrapper<SubstrateTipEdge>;
  SubstrateTipOrderByInput: SubstrateTipOrderByInput;
  SubstrateTipStatus: SubstrateTipStatus;
  SubstrateTipWhereInput: SubstrateTipWhereInput;
  SubstrateTipWhereUniqueInput: SubstrateTipWhereUniqueInput;
  SubstrateTipper: ResolverTypeWrapper<SubstrateTipper>;
  SubstrateTipperEdge: ResolverTypeWrapper<SubstrateTipperEdge>;
  SubstrateTipperOrderByInput: SubstrateTipperOrderByInput;
  SubstrateTipperWhereInput: SubstrateTipperWhereInput;
  SubstrateTipperWhereUniqueInput: SubstrateTipperWhereUniqueInput;
  SubstrateTippersConnection: ResolverTypeWrapper<SubstrateTippersConnection>;
  SubstrateTipsConnection: ResolverTypeWrapper<SubstrateTipsConnection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String'];
  SubstrateTip: SubstrateTip;
  SubstrateTipEdge: SubstrateTipEdge;
  SubstrateTipWhereInput: SubstrateTipWhereInput;
  SubstrateTipWhereUniqueInput: SubstrateTipWhereUniqueInput;
  SubstrateTipper: SubstrateTipper;
  SubstrateTipperEdge: SubstrateTipperEdge;
  SubstrateTipperWhereInput: SubstrateTipperWhereInput;
  SubstrateTipperWhereUniqueInput: SubstrateTipperWhereUniqueInput;
  SubstrateTippersConnection: SubstrateTippersConnection;
  SubstrateTipsConnection: SubstrateTipsConnection;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  substrateTipById?: Resolver<
    Maybe<ResolversTypes['SubstrateTip']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTipByIdArgs, 'id'>
  >;
  substrateTipByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateTip']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTipByUniqueInputArgs, 'where'>
  >;
  substrateTipperById?: Resolver<
    Maybe<ResolversTypes['SubstrateTipper']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTipperByIdArgs, 'id'>
  >;
  substrateTipperByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateTipper']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTipperByUniqueInputArgs, 'where'>
  >;
  substrateTippers?: Resolver<
    Array<ResolversTypes['SubstrateTipper']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTippersArgs, never>
  >;
  substrateTippersConnection?: Resolver<
    ResolversTypes['SubstrateTippersConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTippersConnectionArgs, 'orderBy'>
  >;
  substrateTips?: Resolver<
    Array<ResolversTypes['SubstrateTip']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTipsArgs, never>
  >;
  substrateTipsConnection?: Resolver<
    ResolversTypes['SubstrateTipsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTipsConnectionArgs, 'orderBy'>
  >;
};

export type SubstrateTipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTip'] = ResolversParentTypes['SubstrateTip'],
> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  closes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deposit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  finder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SubstrateTipStatus'], ParentType, ContextType>;
  tipValue?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  tippers?: Resolver<
    Array<ResolversTypes['SubstrateTipper']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateTipTippersArgs, never>
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  who?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTipEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTipEdge'] = ResolversParentTypes['SubstrateTipEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateTip'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTipperResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTipper'] = ResolversParentTypes['SubstrateTipper'],
> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tip?: Resolver<ResolversTypes['SubstrateTip'], ParentType, ContextType>;
  tipValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTipperEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTipperEdge'] = ResolversParentTypes['SubstrateTipperEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateTipper'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTippersConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTippersConnection'] = ResolversParentTypes['SubstrateTippersConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateTipperEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTipsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTipsConnection'] = ResolversParentTypes['SubstrateTipsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateTipEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SubstrateTip?: SubstrateTipResolvers<ContextType>;
  SubstrateTipEdge?: SubstrateTipEdgeResolvers<ContextType>;
  SubstrateTipper?: SubstrateTipperResolvers<ContextType>;
  SubstrateTipperEdge?: SubstrateTipperEdgeResolvers<ContextType>;
  SubstrateTippersConnection?: SubstrateTippersConnectionResolvers<ContextType>;
  SubstrateTipsConnection?: SubstrateTipsConnectionResolvers<ContextType>;
};

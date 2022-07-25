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
  /** A scalar that can represent any JSON value */
  JSON: any;
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
  substrateBountyProposalById?: Maybe<SubstrateBountyProposal>;
  /** @deprecated Use `substrateBountyProposalById` */
  substrateBountyProposalByUniqueInput?: Maybe<SubstrateBountyProposal>;
  substrateBountyProposals: Array<SubstrateBountyProposal>;
  substrateBountyProposalsConnection: SubstrateBountyProposalsConnection;
  substrateCouncilProposalById?: Maybe<SubstrateCouncilProposal>;
  /** @deprecated Use `substrateCouncilProposalById` */
  substrateCouncilProposalByUniqueInput?: Maybe<SubstrateCouncilProposal>;
  substrateCouncilProposals: Array<SubstrateCouncilProposal>;
  substrateCouncilProposalsConnection: SubstrateCouncilProposalsConnection;
  substrateCouncilVoteById?: Maybe<SubstrateCouncilVote>;
  /** @deprecated Use `substrateCouncilVoteById` */
  substrateCouncilVoteByUniqueInput?: Maybe<SubstrateCouncilVote>;
  substrateCouncilVotes: Array<SubstrateCouncilVote>;
  substrateCouncilVotesConnection: SubstrateCouncilVotesConnection;
  substrateDemocracyProposalById?: Maybe<SubstrateDemocracyProposal>;
  /** @deprecated Use `substrateDemocracyProposalById` */
  substrateDemocracyProposalByUniqueInput?: Maybe<SubstrateDemocracyProposal>;
  substrateDemocracyProposalSecondById?: Maybe<SubstrateDemocracyProposalSecond>;
  /** @deprecated Use `substrateDemocracyProposalSecondById` */
  substrateDemocracyProposalSecondByUniqueInput?: Maybe<SubstrateDemocracyProposalSecond>;
  substrateDemocracyProposalSeconds: Array<SubstrateDemocracyProposalSecond>;
  substrateDemocracyProposalSecondsConnection: SubstrateDemocracyProposalSecondsConnection;
  substrateDemocracyProposals: Array<SubstrateDemocracyProposal>;
  substrateDemocracyProposalsConnection: SubstrateDemocracyProposalsConnection;
  substrateDemocracyReferendaById?: Maybe<SubstrateDemocracyReferenda>;
  /** @deprecated Use `substrateDemocracyReferendaById` */
  substrateDemocracyReferendaByUniqueInput?: Maybe<SubstrateDemocracyReferenda>;
  substrateDemocracyReferendaVoteById?: Maybe<SubstrateDemocracyReferendaVote>;
  /** @deprecated Use `substrateDemocracyReferendaVoteById` */
  substrateDemocracyReferendaVoteByUniqueInput?: Maybe<SubstrateDemocracyReferendaVote>;
  substrateDemocracyReferendaVotes: Array<SubstrateDemocracyReferendaVote>;
  substrateDemocracyReferendaVotesConnection: SubstrateDemocracyReferendaVotesConnection;
  substrateDemocracyReferendas: Array<SubstrateDemocracyReferenda>;
  substrateDemocracyReferendasConnection: SubstrateDemocracyReferendasConnection;
  substrateElectionVoteById?: Maybe<SubstrateElectionVote>;
  /** @deprecated Use `substrateElectionVoteById` */
  substrateElectionVoteByUniqueInput?: Maybe<SubstrateElectionVote>;
  substrateElectionVotes: Array<SubstrateElectionVote>;
  substrateElectionVotesConnection: SubstrateElectionVotesConnection;
  substrateGovernanceAccountById?: Maybe<SubstrateGovernanceAccount>;
  /** @deprecated Use `substrateGovernanceAccountById` */
  substrateGovernanceAccountByUniqueInput?: Maybe<SubstrateGovernanceAccount>;
  substrateGovernanceAccounts: Array<SubstrateGovernanceAccount>;
  substrateGovernanceAccountsConnection: SubstrateGovernanceAccountsConnection;
  substrateProposalVoteById?: Maybe<SubstrateProposalVote>;
  /** @deprecated Use `substrateProposalVoteById` */
  substrateProposalVoteByUniqueInput?: Maybe<SubstrateProposalVote>;
  substrateProposalVotes: Array<SubstrateProposalVote>;
  substrateProposalVotesConnection: SubstrateProposalVotesConnection;
  substrateTechnicalCommitteeProposalById?: Maybe<SubstrateTechnicalCommitteeProposal>;
  /** @deprecated Use `substrateTechnicalCommitteeProposalById` */
  substrateTechnicalCommitteeProposalByUniqueInput?: Maybe<SubstrateTechnicalCommitteeProposal>;
  substrateTechnicalCommitteeProposals: Array<SubstrateTechnicalCommitteeProposal>;
  substrateTechnicalCommitteeProposalsConnection: SubstrateTechnicalCommitteeProposalsConnection;
  substrateTreasuryProposalById?: Maybe<SubstrateTreasuryProposal>;
  /** @deprecated Use `substrateTreasuryProposalById` */
  substrateTreasuryProposalByUniqueInput?: Maybe<SubstrateTreasuryProposal>;
  substrateTreasuryProposals: Array<SubstrateTreasuryProposal>;
  substrateTreasuryProposalsConnection: SubstrateTreasuryProposalsConnection;
};

export type QuerySubstrateBountyProposalByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateBountyProposalByUniqueInputArgs = {
  where: SubstrateBountyProposalWhereUniqueInput;
};

export type QuerySubstrateBountyProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateBountyProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateBountyProposalWhereInput>;
};

export type QuerySubstrateBountyProposalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateBountyProposalOrderByInput>;
  where?: InputMaybe<SubstrateBountyProposalWhereInput>;
};

export type QuerySubstrateCouncilProposalByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateCouncilProposalByUniqueInputArgs = {
  where: SubstrateCouncilProposalWhereUniqueInput;
};

export type QuerySubstrateCouncilProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateCouncilProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateCouncilProposalWhereInput>;
};

export type QuerySubstrateCouncilProposalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateCouncilProposalOrderByInput>;
  where?: InputMaybe<SubstrateCouncilProposalWhereInput>;
};

export type QuerySubstrateCouncilVoteByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateCouncilVoteByUniqueInputArgs = {
  where: SubstrateCouncilVoteWhereUniqueInput;
};

export type QuerySubstrateCouncilVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateCouncilVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateCouncilVoteWhereInput>;
};

export type QuerySubstrateCouncilVotesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateCouncilVoteOrderByInput>;
  where?: InputMaybe<SubstrateCouncilVoteWhereInput>;
};

export type QuerySubstrateDemocracyProposalByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateDemocracyProposalByUniqueInputArgs = {
  where: SubstrateDemocracyProposalWhereUniqueInput;
};

export type QuerySubstrateDemocracyProposalSecondByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateDemocracyProposalSecondByUniqueInputArgs = {
  where: SubstrateDemocracyProposalSecondWhereUniqueInput;
};

export type QuerySubstrateDemocracyProposalSecondsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyProposalSecondOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
};

export type QuerySubstrateDemocracyProposalSecondsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateDemocracyProposalSecondOrderByInput>;
  where?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
};

export type QuerySubstrateDemocracyProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
};

export type QuerySubstrateDemocracyProposalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateDemocracyProposalOrderByInput>;
  where?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
};

export type QuerySubstrateDemocracyReferendaByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateDemocracyReferendaByUniqueInputArgs = {
  where: SubstrateDemocracyReferendaWhereUniqueInput;
};

export type QuerySubstrateDemocracyReferendaVoteByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateDemocracyReferendaVoteByUniqueInputArgs = {
  where: SubstrateDemocracyReferendaVoteWhereUniqueInput;
};

export type QuerySubstrateDemocracyReferendaVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyReferendaVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
};

export type QuerySubstrateDemocracyReferendaVotesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateDemocracyReferendaVoteOrderByInput>;
  where?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
};

export type QuerySubstrateDemocracyReferendasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyReferendaOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyReferendaWhereInput>;
};

export type QuerySubstrateDemocracyReferendasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateDemocracyReferendaOrderByInput>;
  where?: InputMaybe<SubstrateDemocracyReferendaWhereInput>;
};

export type QuerySubstrateElectionVoteByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateElectionVoteByUniqueInputArgs = {
  where: SubstrateElectionVoteWhereUniqueInput;
};

export type QuerySubstrateElectionVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateElectionVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateElectionVoteWhereInput>;
};

export type QuerySubstrateElectionVotesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateElectionVoteOrderByInput>;
  where?: InputMaybe<SubstrateElectionVoteWhereInput>;
};

export type QuerySubstrateGovernanceAccountByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateGovernanceAccountByUniqueInputArgs = {
  where: SubstrateGovernanceAccountWhereUniqueInput;
};

export type QuerySubstrateGovernanceAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateGovernanceAccountOrderByInput>>>;
  where?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
};

export type QuerySubstrateGovernanceAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateGovernanceAccountOrderByInput>;
  where?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
};

export type QuerySubstrateProposalVoteByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateProposalVoteByUniqueInputArgs = {
  where: SubstrateProposalVoteWhereUniqueInput;
};

export type QuerySubstrateProposalVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateProposalVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateProposalVoteWhereInput>;
};

export type QuerySubstrateProposalVotesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateProposalVoteOrderByInput>;
  where?: InputMaybe<SubstrateProposalVoteWhereInput>;
};

export type QuerySubstrateTechnicalCommitteeProposalByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateTechnicalCommitteeProposalByUniqueInputArgs = {
  where: SubstrateTechnicalCommitteeProposalWhereUniqueInput;
};

export type QuerySubstrateTechnicalCommitteeProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTechnicalCommitteeProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateTechnicalCommitteeProposalWhereInput>;
};

export type QuerySubstrateTechnicalCommitteeProposalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateTechnicalCommitteeProposalOrderByInput>;
  where?: InputMaybe<SubstrateTechnicalCommitteeProposalWhereInput>;
};

export type QuerySubstrateTreasuryProposalByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubstrateTreasuryProposalByUniqueInputArgs = {
  where: SubstrateTreasuryProposalWhereUniqueInput;
};

export type QuerySubstrateTreasuryProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTreasuryProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateTreasuryProposalWhereInput>;
};

export type QuerySubstrateTreasuryProposalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SubstrateTreasuryProposalOrderByInput>;
  where?: InputMaybe<SubstrateTreasuryProposalWhereInput>;
};

export type SubstrateBountyProposal = {
  __typename?: 'SubstrateBountyProposal';
  account: SubstrateGovernanceAccount;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposalIndex: Scalars['Int'];
  rootAccount: Scalars['String'];
  value?: Maybe<Scalars['BigInt']>;
};

export type SubstrateBountyProposalEdge = {
  __typename?: 'SubstrateBountyProposalEdge';
  cursor: Scalars['String'];
  node: SubstrateBountyProposal;
};

export enum SubstrateBountyProposalOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export type SubstrateBountyProposalWhereInput = {
  AND?: InputMaybe<Array<SubstrateBountyProposalWhereInput>>;
  OR?: InputMaybe<Array<SubstrateBountyProposalWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_endsWith?: InputMaybe<Scalars['String']>;
  description_eq?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_not_endsWith?: InputMaybe<Scalars['String']>;
  description_not_eq?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']>;
  description_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  value_eq?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not_eq?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type SubstrateBountyProposalWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateBountyProposalsConnection = {
  __typename?: 'SubstrateBountyProposalsConnection';
  edges: Array<SubstrateBountyProposalEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateCouncilProposal = {
  __typename?: 'SubstrateCouncilProposal';
  account: SubstrateGovernanceAccount;
  ayeCount: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  lastUpdate: Scalars['DateTime'];
  method?: Maybe<Scalars['String']>;
  nayCount: Scalars['Int'];
  network: SubstrateNetwork;
  pallet?: Maybe<Scalars['String']>;
  proposalHash: Scalars['String'];
  proposalId?: Maybe<Scalars['Int']>;
  proposalIndex?: Maybe<Scalars['Int']>;
  rootAccount: Scalars['String'];
  status: Scalars['String'];
  threshold: Scalars['Int'];
  votes: Array<SubstrateCouncilVote>;
};

export type SubstrateCouncilProposalVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateCouncilVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateCouncilVoteWhereInput>;
};

export type SubstrateCouncilProposalEdge = {
  __typename?: 'SubstrateCouncilProposalEdge';
  cursor: Scalars['String'];
  node: SubstrateCouncilProposal;
};

export enum SubstrateCouncilProposalOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  AyeCountAsc = 'ayeCount_ASC',
  AyeCountDesc = 'ayeCount_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastUpdateAsc = 'lastUpdate_ASC',
  LastUpdateDesc = 'lastUpdate_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  NayCountAsc = 'nayCount_ASC',
  NayCountDesc = 'nayCount_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PalletAsc = 'pallet_ASC',
  PalletDesc = 'pallet_DESC',
  ProposalHashAsc = 'proposalHash_ASC',
  ProposalHashDesc = 'proposalHash_DESC',
  ProposalIdAsc = 'proposalId_ASC',
  ProposalIdDesc = 'proposalId_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  ThresholdAsc = 'threshold_ASC',
  ThresholdDesc = 'threshold_DESC',
}

export type SubstrateCouncilProposalWhereInput = {
  AND?: InputMaybe<Array<SubstrateCouncilProposalWhereInput>>;
  OR?: InputMaybe<Array<SubstrateCouncilProposalWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  ayeCount_eq?: InputMaybe<Scalars['Int']>;
  ayeCount_gt?: InputMaybe<Scalars['Int']>;
  ayeCount_gte?: InputMaybe<Scalars['Int']>;
  ayeCount_in?: InputMaybe<Array<Scalars['Int']>>;
  ayeCount_lt?: InputMaybe<Scalars['Int']>;
  ayeCount_lte?: InputMaybe<Scalars['Int']>;
  ayeCount_not_eq?: InputMaybe<Scalars['Int']>;
  ayeCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  lastUpdate_eq?: InputMaybe<Scalars['DateTime']>;
  lastUpdate_gt?: InputMaybe<Scalars['DateTime']>;
  lastUpdate_gte?: InputMaybe<Scalars['DateTime']>;
  lastUpdate_in?: InputMaybe<Array<Scalars['DateTime']>>;
  lastUpdate_lt?: InputMaybe<Scalars['DateTime']>;
  lastUpdate_lte?: InputMaybe<Scalars['DateTime']>;
  lastUpdate_not_eq?: InputMaybe<Scalars['DateTime']>;
  lastUpdate_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  method_contains?: InputMaybe<Scalars['String']>;
  method_containsInsensitive?: InputMaybe<Scalars['String']>;
  method_endsWith?: InputMaybe<Scalars['String']>;
  method_eq?: InputMaybe<Scalars['String']>;
  method_gt?: InputMaybe<Scalars['String']>;
  method_gte?: InputMaybe<Scalars['String']>;
  method_in?: InputMaybe<Array<Scalars['String']>>;
  method_isNull?: InputMaybe<Scalars['Boolean']>;
  method_lt?: InputMaybe<Scalars['String']>;
  method_lte?: InputMaybe<Scalars['String']>;
  method_not_contains?: InputMaybe<Scalars['String']>;
  method_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  method_not_endsWith?: InputMaybe<Scalars['String']>;
  method_not_eq?: InputMaybe<Scalars['String']>;
  method_not_in?: InputMaybe<Array<Scalars['String']>>;
  method_not_startsWith?: InputMaybe<Scalars['String']>;
  method_startsWith?: InputMaybe<Scalars['String']>;
  nayCount_eq?: InputMaybe<Scalars['Int']>;
  nayCount_gt?: InputMaybe<Scalars['Int']>;
  nayCount_gte?: InputMaybe<Scalars['Int']>;
  nayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nayCount_lt?: InputMaybe<Scalars['Int']>;
  nayCount_lte?: InputMaybe<Scalars['Int']>;
  nayCount_not_eq?: InputMaybe<Scalars['Int']>;
  nayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  pallet_contains?: InputMaybe<Scalars['String']>;
  pallet_containsInsensitive?: InputMaybe<Scalars['String']>;
  pallet_endsWith?: InputMaybe<Scalars['String']>;
  pallet_eq?: InputMaybe<Scalars['String']>;
  pallet_gt?: InputMaybe<Scalars['String']>;
  pallet_gte?: InputMaybe<Scalars['String']>;
  pallet_in?: InputMaybe<Array<Scalars['String']>>;
  pallet_isNull?: InputMaybe<Scalars['Boolean']>;
  pallet_lt?: InputMaybe<Scalars['String']>;
  pallet_lte?: InputMaybe<Scalars['String']>;
  pallet_not_contains?: InputMaybe<Scalars['String']>;
  pallet_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  pallet_not_endsWith?: InputMaybe<Scalars['String']>;
  pallet_not_eq?: InputMaybe<Scalars['String']>;
  pallet_not_in?: InputMaybe<Array<Scalars['String']>>;
  pallet_not_startsWith?: InputMaybe<Scalars['String']>;
  pallet_startsWith?: InputMaybe<Scalars['String']>;
  proposalHash_contains?: InputMaybe<Scalars['String']>;
  proposalHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  proposalHash_endsWith?: InputMaybe<Scalars['String']>;
  proposalHash_eq?: InputMaybe<Scalars['String']>;
  proposalHash_gt?: InputMaybe<Scalars['String']>;
  proposalHash_gte?: InputMaybe<Scalars['String']>;
  proposalHash_in?: InputMaybe<Array<Scalars['String']>>;
  proposalHash_lt?: InputMaybe<Scalars['String']>;
  proposalHash_lte?: InputMaybe<Scalars['String']>;
  proposalHash_not_contains?: InputMaybe<Scalars['String']>;
  proposalHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  proposalHash_not_endsWith?: InputMaybe<Scalars['String']>;
  proposalHash_not_eq?: InputMaybe<Scalars['String']>;
  proposalHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposalHash_not_startsWith?: InputMaybe<Scalars['String']>;
  proposalHash_startsWith?: InputMaybe<Scalars['String']>;
  proposalId_eq?: InputMaybe<Scalars['Int']>;
  proposalId_gt?: InputMaybe<Scalars['Int']>;
  proposalId_gte?: InputMaybe<Scalars['Int']>;
  proposalId_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalId_isNull?: InputMaybe<Scalars['Boolean']>;
  proposalId_lt?: InputMaybe<Scalars['Int']>;
  proposalId_lte?: InputMaybe<Scalars['Int']>;
  proposalId_not_eq?: InputMaybe<Scalars['Int']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_isNull?: InputMaybe<Scalars['Boolean']>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_containsInsensitive?: InputMaybe<Scalars['String']>;
  status_endsWith?: InputMaybe<Scalars['String']>;
  status_eq?: InputMaybe<Scalars['String']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<Scalars['String']>>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  status_not_endsWith?: InputMaybe<Scalars['String']>;
  status_not_eq?: InputMaybe<Scalars['String']>;
  status_not_in?: InputMaybe<Array<Scalars['String']>>;
  status_not_startsWith?: InputMaybe<Scalars['String']>;
  status_startsWith?: InputMaybe<Scalars['String']>;
  threshold_eq?: InputMaybe<Scalars['Int']>;
  threshold_gt?: InputMaybe<Scalars['Int']>;
  threshold_gte?: InputMaybe<Scalars['Int']>;
  threshold_in?: InputMaybe<Array<Scalars['Int']>>;
  threshold_lt?: InputMaybe<Scalars['Int']>;
  threshold_lte?: InputMaybe<Scalars['Int']>;
  threshold_not_eq?: InputMaybe<Scalars['Int']>;
  threshold_not_in?: InputMaybe<Array<Scalars['Int']>>;
  votes_every?: InputMaybe<SubstrateCouncilVoteWhereInput>;
  votes_none?: InputMaybe<SubstrateCouncilVoteWhereInput>;
  votes_some?: InputMaybe<SubstrateCouncilVoteWhereInput>;
};

export type SubstrateCouncilProposalWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateCouncilProposalsConnection = {
  __typename?: 'SubstrateCouncilProposalsConnection';
  edges: Array<SubstrateCouncilProposalEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateCouncilVote = {
  __typename?: 'SubstrateCouncilVote';
  account: SubstrateGovernanceAccount;
  approve: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposal: SubstrateCouncilProposal;
  proposalIndex: Scalars['Int'];
  rootAccount: Scalars['String'];
};

export type SubstrateCouncilVoteEdge = {
  __typename?: 'SubstrateCouncilVoteEdge';
  cursor: Scalars['String'];
  node: SubstrateCouncilVote;
};

export enum SubstrateCouncilVoteOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  ApproveAsc = 'approve_ASC',
  ApproveDesc = 'approve_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  ProposalAyeCountAsc = 'proposal_ayeCount_ASC',
  ProposalAyeCountDesc = 'proposal_ayeCount_DESC',
  ProposalBlockNumberAsc = 'proposal_blockNumber_ASC',
  ProposalBlockNumberDesc = 'proposal_blockNumber_DESC',
  ProposalDateAsc = 'proposal_date_ASC',
  ProposalDateDesc = 'proposal_date_DESC',
  ProposalIdAsc = 'proposal_id_ASC',
  ProposalIdDesc = 'proposal_id_DESC',
  ProposalLastUpdateAsc = 'proposal_lastUpdate_ASC',
  ProposalLastUpdateDesc = 'proposal_lastUpdate_DESC',
  ProposalMethodAsc = 'proposal_method_ASC',
  ProposalMethodDesc = 'proposal_method_DESC',
  ProposalNayCountAsc = 'proposal_nayCount_ASC',
  ProposalNayCountDesc = 'proposal_nayCount_DESC',
  ProposalNetworkAsc = 'proposal_network_ASC',
  ProposalNetworkDesc = 'proposal_network_DESC',
  ProposalPalletAsc = 'proposal_pallet_ASC',
  ProposalPalletDesc = 'proposal_pallet_DESC',
  ProposalProposalHashAsc = 'proposal_proposalHash_ASC',
  ProposalProposalHashDesc = 'proposal_proposalHash_DESC',
  ProposalProposalIdAsc = 'proposal_proposalId_ASC',
  ProposalProposalIdDesc = 'proposal_proposalId_DESC',
  ProposalProposalIndexAsc = 'proposal_proposalIndex_ASC',
  ProposalProposalIndexDesc = 'proposal_proposalIndex_DESC',
  ProposalRootAccountAsc = 'proposal_rootAccount_ASC',
  ProposalRootAccountDesc = 'proposal_rootAccount_DESC',
  ProposalStatusAsc = 'proposal_status_ASC',
  ProposalStatusDesc = 'proposal_status_DESC',
  ProposalThresholdAsc = 'proposal_threshold_ASC',
  ProposalThresholdDesc = 'proposal_threshold_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
}

export type SubstrateCouncilVoteWhereInput = {
  AND?: InputMaybe<Array<SubstrateCouncilVoteWhereInput>>;
  OR?: InputMaybe<Array<SubstrateCouncilVoteWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  approve_eq?: InputMaybe<Scalars['Boolean']>;
  approve_not_eq?: InputMaybe<Scalars['Boolean']>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposal?: InputMaybe<SubstrateCouncilProposalWhereInput>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
};

export type SubstrateCouncilVoteWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateCouncilVotesConnection = {
  __typename?: 'SubstrateCouncilVotesConnection';
  edges: Array<SubstrateCouncilVoteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateDemocracyProposal = {
  __typename?: 'SubstrateDemocracyProposal';
  account: SubstrateGovernanceAccount;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  democracyReferenda?: Maybe<SubstrateDemocracyReferenda>;
  depositAmount: Scalars['BigInt'];
  description?: Maybe<Scalars['String']>;
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposalHash: Scalars['String'];
  proposalIndex: Scalars['Int'];
  rootAccount: Scalars['String'];
  seconds: Array<SubstrateDemocracyProposalSecond>;
  status: SubstrateDemocracyProposalStatus;
  tabledAtBlock?: Maybe<Scalars['BigInt']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type SubstrateDemocracyProposalSecondsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyProposalSecondOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
};

export type SubstrateDemocracyProposalEdge = {
  __typename?: 'SubstrateDemocracyProposalEdge';
  cursor: Scalars['String'];
  node: SubstrateDemocracyProposal;
};

export enum SubstrateDemocracyProposalOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DemocracyReferendaAyeAsc = 'democracyReferenda_aye_ASC',
  DemocracyReferendaAyeDesc = 'democracyReferenda_aye_DESC',
  DemocracyReferendaBlockNumberAsc = 'democracyReferenda_blockNumber_ASC',
  DemocracyReferendaBlockNumberDesc = 'democracyReferenda_blockNumber_DESC',
  DemocracyReferendaDateAsc = 'democracyReferenda_date_ASC',
  DemocracyReferendaDateDesc = 'democracyReferenda_date_DESC',
  DemocracyReferendaDescriptionAsc = 'democracyReferenda_description_ASC',
  DemocracyReferendaDescriptionDesc = 'democracyReferenda_description_DESC',
  DemocracyReferendaIdAsc = 'democracyReferenda_id_ASC',
  DemocracyReferendaIdDesc = 'democracyReferenda_id_DESC',
  DemocracyReferendaNayAsc = 'democracyReferenda_nay_ASC',
  DemocracyReferendaNayDesc = 'democracyReferenda_nay_DESC',
  DemocracyReferendaNetworkAsc = 'democracyReferenda_network_ASC',
  DemocracyReferendaNetworkDesc = 'democracyReferenda_network_DESC',
  DemocracyReferendaStatusAsc = 'democracyReferenda_status_ASC',
  DemocracyReferendaStatusDesc = 'democracyReferenda_status_DESC',
  DemocracyReferendaTitleAsc = 'democracyReferenda_title_ASC',
  DemocracyReferendaTitleDesc = 'democracyReferenda_title_DESC',
  DemocracyReferendaUpdatedAtAsc = 'democracyReferenda_updatedAt_ASC',
  DemocracyReferendaUpdatedAtDesc = 'democracyReferenda_updatedAt_DESC',
  DemocracyReferendaVoteThresholdAsc = 'democracyReferenda_voteThreshold_ASC',
  DemocracyReferendaVoteThresholdDesc = 'democracyReferenda_voteThreshold_DESC',
  DepositAmountAsc = 'depositAmount_ASC',
  DepositAmountDesc = 'depositAmount_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalHashAsc = 'proposalHash_ASC',
  ProposalHashDesc = 'proposalHash_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TabledAtBlockAsc = 'tabledAtBlock_ASC',
  TabledAtBlockDesc = 'tabledAtBlock_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type SubstrateDemocracyProposalSecond = {
  __typename?: 'SubstrateDemocracyProposalSecond';
  account: SubstrateGovernanceAccount;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposal: SubstrateDemocracyProposal;
  rootAccount: Scalars['String'];
  upperBound?: Maybe<Scalars['Int']>;
};

export type SubstrateDemocracyProposalSecondEdge = {
  __typename?: 'SubstrateDemocracyProposalSecondEdge';
  cursor: Scalars['String'];
  node: SubstrateDemocracyProposalSecond;
};

export enum SubstrateDemocracyProposalSecondOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalBlockNumberAsc = 'proposal_blockNumber_ASC',
  ProposalBlockNumberDesc = 'proposal_blockNumber_DESC',
  ProposalDateAsc = 'proposal_date_ASC',
  ProposalDateDesc = 'proposal_date_DESC',
  ProposalDepositAmountAsc = 'proposal_depositAmount_ASC',
  ProposalDepositAmountDesc = 'proposal_depositAmount_DESC',
  ProposalDescriptionAsc = 'proposal_description_ASC',
  ProposalDescriptionDesc = 'proposal_description_DESC',
  ProposalIdAsc = 'proposal_id_ASC',
  ProposalIdDesc = 'proposal_id_DESC',
  ProposalNetworkAsc = 'proposal_network_ASC',
  ProposalNetworkDesc = 'proposal_network_DESC',
  ProposalProposalHashAsc = 'proposal_proposalHash_ASC',
  ProposalProposalHashDesc = 'proposal_proposalHash_DESC',
  ProposalProposalIndexAsc = 'proposal_proposalIndex_ASC',
  ProposalProposalIndexDesc = 'proposal_proposalIndex_DESC',
  ProposalRootAccountAsc = 'proposal_rootAccount_ASC',
  ProposalRootAccountDesc = 'proposal_rootAccount_DESC',
  ProposalStatusAsc = 'proposal_status_ASC',
  ProposalStatusDesc = 'proposal_status_DESC',
  ProposalTabledAtBlockAsc = 'proposal_tabledAtBlock_ASC',
  ProposalTabledAtBlockDesc = 'proposal_tabledAtBlock_DESC',
  ProposalTitleAsc = 'proposal_title_ASC',
  ProposalTitleDesc = 'proposal_title_DESC',
  ProposalUpdatedAtAsc = 'proposal_updatedAt_ASC',
  ProposalUpdatedAtDesc = 'proposal_updatedAt_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  UpperBoundAsc = 'upperBound_ASC',
  UpperBoundDesc = 'upperBound_DESC',
}

export type SubstrateDemocracyProposalSecondWhereInput = {
  AND?: InputMaybe<Array<SubstrateDemocracyProposalSecondWhereInput>>;
  OR?: InputMaybe<Array<SubstrateDemocracyProposalSecondWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposal?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  upperBound_eq?: InputMaybe<Scalars['Int']>;
  upperBound_gt?: InputMaybe<Scalars['Int']>;
  upperBound_gte?: InputMaybe<Scalars['Int']>;
  upperBound_in?: InputMaybe<Array<Scalars['Int']>>;
  upperBound_isNull?: InputMaybe<Scalars['Boolean']>;
  upperBound_lt?: InputMaybe<Scalars['Int']>;
  upperBound_lte?: InputMaybe<Scalars['Int']>;
  upperBound_not_eq?: InputMaybe<Scalars['Int']>;
  upperBound_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type SubstrateDemocracyProposalSecondWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateDemocracyProposalSecondsConnection = {
  __typename?: 'SubstrateDemocracyProposalSecondsConnection';
  edges: Array<SubstrateDemocracyProposalSecondEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SubstrateDemocracyProposalStatus {
  Cancelled = 'cancelled',
  Proposed = 'proposed',
  Tabled = 'tabled',
}

export type SubstrateDemocracyProposalWhereInput = {
  AND?: InputMaybe<Array<SubstrateDemocracyProposalWhereInput>>;
  OR?: InputMaybe<Array<SubstrateDemocracyProposalWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  democracyReferenda?: InputMaybe<SubstrateDemocracyReferendaWhereInput>;
  democracyReferenda_isNull?: InputMaybe<Scalars['Boolean']>;
  depositAmount_eq?: InputMaybe<Scalars['BigInt']>;
  depositAmount_gt?: InputMaybe<Scalars['BigInt']>;
  depositAmount_gte?: InputMaybe<Scalars['BigInt']>;
  depositAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositAmount_lt?: InputMaybe<Scalars['BigInt']>;
  depositAmount_lte?: InputMaybe<Scalars['BigInt']>;
  depositAmount_not_eq?: InputMaybe<Scalars['BigInt']>;
  depositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_endsWith?: InputMaybe<Scalars['String']>;
  description_eq?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_not_endsWith?: InputMaybe<Scalars['String']>;
  description_not_eq?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']>;
  description_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposalHash_contains?: InputMaybe<Scalars['String']>;
  proposalHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  proposalHash_endsWith?: InputMaybe<Scalars['String']>;
  proposalHash_eq?: InputMaybe<Scalars['String']>;
  proposalHash_gt?: InputMaybe<Scalars['String']>;
  proposalHash_gte?: InputMaybe<Scalars['String']>;
  proposalHash_in?: InputMaybe<Array<Scalars['String']>>;
  proposalHash_lt?: InputMaybe<Scalars['String']>;
  proposalHash_lte?: InputMaybe<Scalars['String']>;
  proposalHash_not_contains?: InputMaybe<Scalars['String']>;
  proposalHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  proposalHash_not_endsWith?: InputMaybe<Scalars['String']>;
  proposalHash_not_eq?: InputMaybe<Scalars['String']>;
  proposalHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposalHash_not_startsWith?: InputMaybe<Scalars['String']>;
  proposalHash_startsWith?: InputMaybe<Scalars['String']>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  seconds_every?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
  seconds_none?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
  seconds_some?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
  status_eq?: InputMaybe<SubstrateDemocracyProposalStatus>;
  status_in?: InputMaybe<Array<SubstrateDemocracyProposalStatus>>;
  status_not_eq?: InputMaybe<SubstrateDemocracyProposalStatus>;
  status_not_in?: InputMaybe<Array<SubstrateDemocracyProposalStatus>>;
  tabledAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  tabledAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  tabledAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  tabledAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tabledAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  tabledAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  tabledAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  tabledAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  tabledAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_containsInsensitive?: InputMaybe<Scalars['String']>;
  title_endsWith?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_isNull?: InputMaybe<Scalars['Boolean']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  title_not_endsWith?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_startsWith?: InputMaybe<Scalars['String']>;
  title_startsWith?: InputMaybe<Scalars['String']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type SubstrateDemocracyProposalWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateDemocracyProposalsConnection = {
  __typename?: 'SubstrateDemocracyProposalsConnection';
  edges: Array<SubstrateDemocracyProposalEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateDemocracyReferenda = {
  __typename?: 'SubstrateDemocracyReferenda';
  aye: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  democracyProposal?: Maybe<SubstrateDemocracyProposal>;
  description?: Maybe<Scalars['String']>;
  /** network:referendaIndex */
  id: Scalars['ID'];
  nay: Scalars['BigInt'];
  network: SubstrateNetwork;
  status: SubstrateDemocracyReferendaStatus;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  voteThreshold: Scalars['String'];
  votes: Array<SubstrateDemocracyReferendaVote>;
};

export type SubstrateDemocracyReferendaVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyReferendaVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
};

export type SubstrateDemocracyReferendaEdge = {
  __typename?: 'SubstrateDemocracyReferendaEdge';
  cursor: Scalars['String'];
  node: SubstrateDemocracyReferenda;
};

export enum SubstrateDemocracyReferendaOrderByInput {
  AyeAsc = 'aye_ASC',
  AyeDesc = 'aye_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DemocracyProposalBlockNumberAsc = 'democracyProposal_blockNumber_ASC',
  DemocracyProposalBlockNumberDesc = 'democracyProposal_blockNumber_DESC',
  DemocracyProposalDateAsc = 'democracyProposal_date_ASC',
  DemocracyProposalDateDesc = 'democracyProposal_date_DESC',
  DemocracyProposalDepositAmountAsc = 'democracyProposal_depositAmount_ASC',
  DemocracyProposalDepositAmountDesc = 'democracyProposal_depositAmount_DESC',
  DemocracyProposalDescriptionAsc = 'democracyProposal_description_ASC',
  DemocracyProposalDescriptionDesc = 'democracyProposal_description_DESC',
  DemocracyProposalIdAsc = 'democracyProposal_id_ASC',
  DemocracyProposalIdDesc = 'democracyProposal_id_DESC',
  DemocracyProposalNetworkAsc = 'democracyProposal_network_ASC',
  DemocracyProposalNetworkDesc = 'democracyProposal_network_DESC',
  DemocracyProposalProposalHashAsc = 'democracyProposal_proposalHash_ASC',
  DemocracyProposalProposalHashDesc = 'democracyProposal_proposalHash_DESC',
  DemocracyProposalProposalIndexAsc = 'democracyProposal_proposalIndex_ASC',
  DemocracyProposalProposalIndexDesc = 'democracyProposal_proposalIndex_DESC',
  DemocracyProposalRootAccountAsc = 'democracyProposal_rootAccount_ASC',
  DemocracyProposalRootAccountDesc = 'democracyProposal_rootAccount_DESC',
  DemocracyProposalStatusAsc = 'democracyProposal_status_ASC',
  DemocracyProposalStatusDesc = 'democracyProposal_status_DESC',
  DemocracyProposalTabledAtBlockAsc = 'democracyProposal_tabledAtBlock_ASC',
  DemocracyProposalTabledAtBlockDesc = 'democracyProposal_tabledAtBlock_DESC',
  DemocracyProposalTitleAsc = 'democracyProposal_title_ASC',
  DemocracyProposalTitleDesc = 'democracyProposal_title_DESC',
  DemocracyProposalUpdatedAtAsc = 'democracyProposal_updatedAt_ASC',
  DemocracyProposalUpdatedAtDesc = 'democracyProposal_updatedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NayAsc = 'nay_ASC',
  NayDesc = 'nay_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VoteThresholdAsc = 'voteThreshold_ASC',
  VoteThresholdDesc = 'voteThreshold_DESC',
}

export enum SubstrateDemocracyReferendaStatus {
  Cancelled = 'cancelled',
  Executed = 'executed',
  NotPassed = 'notPassed',
  Passed = 'passed',
  Started = 'started',
}

export type SubstrateDemocracyReferendaVote = {
  __typename?: 'SubstrateDemocracyReferendaVote';
  account: SubstrateGovernanceAccount;
  aye: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  democracyReferenda: SubstrateDemocracyReferenda;
  /** network:block:index */
  id: Scalars['ID'];
  nay: Scalars['BigInt'];
  network: SubstrateNetwork;
  rootAccount: Scalars['String'];
};

export type SubstrateDemocracyReferendaVoteEdge = {
  __typename?: 'SubstrateDemocracyReferendaVoteEdge';
  cursor: Scalars['String'];
  node: SubstrateDemocracyReferendaVote;
};

export enum SubstrateDemocracyReferendaVoteOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  AyeAsc = 'aye_ASC',
  AyeDesc = 'aye_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DemocracyReferendaAyeAsc = 'democracyReferenda_aye_ASC',
  DemocracyReferendaAyeDesc = 'democracyReferenda_aye_DESC',
  DemocracyReferendaBlockNumberAsc = 'democracyReferenda_blockNumber_ASC',
  DemocracyReferendaBlockNumberDesc = 'democracyReferenda_blockNumber_DESC',
  DemocracyReferendaDateAsc = 'democracyReferenda_date_ASC',
  DemocracyReferendaDateDesc = 'democracyReferenda_date_DESC',
  DemocracyReferendaDescriptionAsc = 'democracyReferenda_description_ASC',
  DemocracyReferendaDescriptionDesc = 'democracyReferenda_description_DESC',
  DemocracyReferendaIdAsc = 'democracyReferenda_id_ASC',
  DemocracyReferendaIdDesc = 'democracyReferenda_id_DESC',
  DemocracyReferendaNayAsc = 'democracyReferenda_nay_ASC',
  DemocracyReferendaNayDesc = 'democracyReferenda_nay_DESC',
  DemocracyReferendaNetworkAsc = 'democracyReferenda_network_ASC',
  DemocracyReferendaNetworkDesc = 'democracyReferenda_network_DESC',
  DemocracyReferendaStatusAsc = 'democracyReferenda_status_ASC',
  DemocracyReferendaStatusDesc = 'democracyReferenda_status_DESC',
  DemocracyReferendaTitleAsc = 'democracyReferenda_title_ASC',
  DemocracyReferendaTitleDesc = 'democracyReferenda_title_DESC',
  DemocracyReferendaUpdatedAtAsc = 'democracyReferenda_updatedAt_ASC',
  DemocracyReferendaUpdatedAtDesc = 'democracyReferenda_updatedAt_DESC',
  DemocracyReferendaVoteThresholdAsc = 'democracyReferenda_voteThreshold_ASC',
  DemocracyReferendaVoteThresholdDesc = 'democracyReferenda_voteThreshold_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NayAsc = 'nay_ASC',
  NayDesc = 'nay_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
}

export type SubstrateDemocracyReferendaVoteWhereInput = {
  AND?: InputMaybe<Array<SubstrateDemocracyReferendaVoteWhereInput>>;
  OR?: InputMaybe<Array<SubstrateDemocracyReferendaVoteWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  aye_eq?: InputMaybe<Scalars['BigInt']>;
  aye_gt?: InputMaybe<Scalars['BigInt']>;
  aye_gte?: InputMaybe<Scalars['BigInt']>;
  aye_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aye_lt?: InputMaybe<Scalars['BigInt']>;
  aye_lte?: InputMaybe<Scalars['BigInt']>;
  aye_not_eq?: InputMaybe<Scalars['BigInt']>;
  aye_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  democracyReferenda?: InputMaybe<SubstrateDemocracyReferendaWhereInput>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  nay_eq?: InputMaybe<Scalars['BigInt']>;
  nay_gt?: InputMaybe<Scalars['BigInt']>;
  nay_gte?: InputMaybe<Scalars['BigInt']>;
  nay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nay_lt?: InputMaybe<Scalars['BigInt']>;
  nay_lte?: InputMaybe<Scalars['BigInt']>;
  nay_not_eq?: InputMaybe<Scalars['BigInt']>;
  nay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
};

export type SubstrateDemocracyReferendaVoteWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateDemocracyReferendaVotesConnection = {
  __typename?: 'SubstrateDemocracyReferendaVotesConnection';
  edges: Array<SubstrateDemocracyReferendaVoteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateDemocracyReferendaWhereInput = {
  AND?: InputMaybe<Array<SubstrateDemocracyReferendaWhereInput>>;
  OR?: InputMaybe<Array<SubstrateDemocracyReferendaWhereInput>>;
  aye_eq?: InputMaybe<Scalars['BigInt']>;
  aye_gt?: InputMaybe<Scalars['BigInt']>;
  aye_gte?: InputMaybe<Scalars['BigInt']>;
  aye_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aye_lt?: InputMaybe<Scalars['BigInt']>;
  aye_lte?: InputMaybe<Scalars['BigInt']>;
  aye_not_eq?: InputMaybe<Scalars['BigInt']>;
  aye_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  democracyProposal?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
  democracyProposal_isNull?: InputMaybe<Scalars['Boolean']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_endsWith?: InputMaybe<Scalars['String']>;
  description_eq?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_not_endsWith?: InputMaybe<Scalars['String']>;
  description_not_eq?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']>;
  description_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  nay_eq?: InputMaybe<Scalars['BigInt']>;
  nay_gt?: InputMaybe<Scalars['BigInt']>;
  nay_gte?: InputMaybe<Scalars['BigInt']>;
  nay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nay_lt?: InputMaybe<Scalars['BigInt']>;
  nay_lte?: InputMaybe<Scalars['BigInt']>;
  nay_not_eq?: InputMaybe<Scalars['BigInt']>;
  nay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  status_eq?: InputMaybe<SubstrateDemocracyReferendaStatus>;
  status_in?: InputMaybe<Array<SubstrateDemocracyReferendaStatus>>;
  status_not_eq?: InputMaybe<SubstrateDemocracyReferendaStatus>;
  status_not_in?: InputMaybe<Array<SubstrateDemocracyReferendaStatus>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_containsInsensitive?: InputMaybe<Scalars['String']>;
  title_endsWith?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_isNull?: InputMaybe<Scalars['Boolean']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  title_not_endsWith?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_startsWith?: InputMaybe<Scalars['String']>;
  title_startsWith?: InputMaybe<Scalars['String']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  voteThreshold_contains?: InputMaybe<Scalars['String']>;
  voteThreshold_containsInsensitive?: InputMaybe<Scalars['String']>;
  voteThreshold_endsWith?: InputMaybe<Scalars['String']>;
  voteThreshold_eq?: InputMaybe<Scalars['String']>;
  voteThreshold_gt?: InputMaybe<Scalars['String']>;
  voteThreshold_gte?: InputMaybe<Scalars['String']>;
  voteThreshold_in?: InputMaybe<Array<Scalars['String']>>;
  voteThreshold_lt?: InputMaybe<Scalars['String']>;
  voteThreshold_lte?: InputMaybe<Scalars['String']>;
  voteThreshold_not_contains?: InputMaybe<Scalars['String']>;
  voteThreshold_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  voteThreshold_not_endsWith?: InputMaybe<Scalars['String']>;
  voteThreshold_not_eq?: InputMaybe<Scalars['String']>;
  voteThreshold_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteThreshold_not_startsWith?: InputMaybe<Scalars['String']>;
  voteThreshold_startsWith?: InputMaybe<Scalars['String']>;
  votes_every?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
  votes_none?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
  votes_some?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
};

export type SubstrateDemocracyReferendaWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateDemocracyReferendasConnection = {
  __typename?: 'SubstrateDemocracyReferendasConnection';
  edges: Array<SubstrateDemocracyReferendaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateElectionVote = {
  __typename?: 'SubstrateElectionVote';
  account: SubstrateGovernanceAccount;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  candidates: Array<Scalars['String']>;
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  rootAccount: Scalars['String'];
};

export type SubstrateElectionVoteEdge = {
  __typename?: 'SubstrateElectionVoteEdge';
  cursor: Scalars['String'];
  node: SubstrateElectionVote;
};

export enum SubstrateElectionVoteOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
}

export type SubstrateElectionVoteWhereInput = {
  AND?: InputMaybe<Array<SubstrateElectionVoteWhereInput>>;
  OR?: InputMaybe<Array<SubstrateElectionVoteWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  amount_eq?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not_eq?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  candidates_containsAll?: InputMaybe<Array<Scalars['String']>>;
  candidates_containsAny?: InputMaybe<Array<Scalars['String']>>;
  candidates_containsNone?: InputMaybe<Array<Scalars['String']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
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
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
};

export type SubstrateElectionVoteWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateElectionVotesConnection = {
  __typename?: 'SubstrateElectionVotesConnection';
  edges: Array<SubstrateElectionVoteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateGovernanceAccount = {
  __typename?: 'SubstrateGovernanceAccount';
  bountyProposals: Array<SubstrateBountyProposal>;
  councilProposals: Array<SubstrateCouncilProposal>;
  councilVotes: Array<SubstrateCouncilVote>;
  democracyProposalSeconds: Array<SubstrateDemocracyProposalSecond>;
  democracyProposals: Array<SubstrateDemocracyProposal>;
  democracyReferendaVotes: Array<SubstrateDemocracyReferendaVote>;
  electionVotes: Array<SubstrateElectionVote>;
  /** address */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposalVotes: Array<SubstrateProposalVote>;
  /** hex address */
  rootAccount: Scalars['String'];
  technicalCommitteeProposals: Array<SubstrateTechnicalCommitteeProposal>;
  totalBountyProposals: Scalars['Int'];
  totalCouncilProposals: Scalars['Int'];
  totalDemocracyProposalSeconds: Scalars['Int'];
  totalDemocracyProposals: Scalars['Int'];
  totalDemocracyReferendaVotes: Scalars['Int'];
  totalElectionVotes: Scalars['Int'];
  /** Deprecated in favour of totalDemocracyProposalSeconds */
  totalProposalSeconds: Scalars['Int'];
  /** Deprecated in favour of totalDemocracyReferendaVotes - includes both normal proposal votes and votes as a council member from council.vote() */
  totalProposalVotes: Scalars['Int'];
  totalTechnicalCommitteeProposals: Scalars['Int'];
  totalTreasurySpendProposals: Scalars['Int'];
  treasurySpendProposals: Array<SubstrateTreasuryProposal>;
};

export type SubstrateGovernanceAccountBountyProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateBountyProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateBountyProposalWhereInput>;
};

export type SubstrateGovernanceAccountCouncilProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateCouncilProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateCouncilProposalWhereInput>;
};

export type SubstrateGovernanceAccountCouncilVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateCouncilVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateCouncilVoteWhereInput>;
};

export type SubstrateGovernanceAccountDemocracyProposalSecondsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyProposalSecondOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
};

export type SubstrateGovernanceAccountDemocracyProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
};

export type SubstrateGovernanceAccountDemocracyReferendaVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateDemocracyReferendaVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
};

export type SubstrateGovernanceAccountElectionVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateElectionVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateElectionVoteWhereInput>;
};

export type SubstrateGovernanceAccountProposalVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateProposalVoteOrderByInput>>>;
  where?: InputMaybe<SubstrateProposalVoteWhereInput>;
};

export type SubstrateGovernanceAccountTechnicalCommitteeProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTechnicalCommitteeProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateTechnicalCommitteeProposalWhereInput>;
};

export type SubstrateGovernanceAccountTreasurySpendProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubstrateTreasuryProposalOrderByInput>>>;
  where?: InputMaybe<SubstrateTreasuryProposalWhereInput>;
};

export type SubstrateGovernanceAccountEdge = {
  __typename?: 'SubstrateGovernanceAccountEdge';
  cursor: Scalars['String'];
  node: SubstrateGovernanceAccount;
};

export enum SubstrateGovernanceAccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  TotalBountyProposalsAsc = 'totalBountyProposals_ASC',
  TotalBountyProposalsDesc = 'totalBountyProposals_DESC',
  TotalCouncilProposalsAsc = 'totalCouncilProposals_ASC',
  TotalCouncilProposalsDesc = 'totalCouncilProposals_DESC',
  TotalDemocracyProposalSecondsAsc = 'totalDemocracyProposalSeconds_ASC',
  TotalDemocracyProposalSecondsDesc = 'totalDemocracyProposalSeconds_DESC',
  TotalDemocracyProposalsAsc = 'totalDemocracyProposals_ASC',
  TotalDemocracyProposalsDesc = 'totalDemocracyProposals_DESC',
  TotalDemocracyReferendaVotesAsc = 'totalDemocracyReferendaVotes_ASC',
  TotalDemocracyReferendaVotesDesc = 'totalDemocracyReferendaVotes_DESC',
  TotalElectionVotesAsc = 'totalElectionVotes_ASC',
  TotalElectionVotesDesc = 'totalElectionVotes_DESC',
  TotalProposalSecondsAsc = 'totalProposalSeconds_ASC',
  TotalProposalSecondsDesc = 'totalProposalSeconds_DESC',
  TotalProposalVotesAsc = 'totalProposalVotes_ASC',
  TotalProposalVotesDesc = 'totalProposalVotes_DESC',
  TotalTechnicalCommitteeProposalsAsc = 'totalTechnicalCommitteeProposals_ASC',
  TotalTechnicalCommitteeProposalsDesc = 'totalTechnicalCommitteeProposals_DESC',
  TotalTreasurySpendProposalsAsc = 'totalTreasurySpendProposals_ASC',
  TotalTreasurySpendProposalsDesc = 'totalTreasurySpendProposals_DESC',
}

export type SubstrateGovernanceAccountWhereInput = {
  AND?: InputMaybe<Array<SubstrateGovernanceAccountWhereInput>>;
  OR?: InputMaybe<Array<SubstrateGovernanceAccountWhereInput>>;
  bountyProposals_every?: InputMaybe<SubstrateBountyProposalWhereInput>;
  bountyProposals_none?: InputMaybe<SubstrateBountyProposalWhereInput>;
  bountyProposals_some?: InputMaybe<SubstrateBountyProposalWhereInput>;
  councilProposals_every?: InputMaybe<SubstrateCouncilProposalWhereInput>;
  councilProposals_none?: InputMaybe<SubstrateCouncilProposalWhereInput>;
  councilProposals_some?: InputMaybe<SubstrateCouncilProposalWhereInput>;
  councilVotes_every?: InputMaybe<SubstrateCouncilVoteWhereInput>;
  councilVotes_none?: InputMaybe<SubstrateCouncilVoteWhereInput>;
  councilVotes_some?: InputMaybe<SubstrateCouncilVoteWhereInput>;
  democracyProposalSeconds_every?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
  democracyProposalSeconds_none?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
  democracyProposalSeconds_some?: InputMaybe<SubstrateDemocracyProposalSecondWhereInput>;
  democracyProposals_every?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
  democracyProposals_none?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
  democracyProposals_some?: InputMaybe<SubstrateDemocracyProposalWhereInput>;
  democracyReferendaVotes_every?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
  democracyReferendaVotes_none?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
  democracyReferendaVotes_some?: InputMaybe<SubstrateDemocracyReferendaVoteWhereInput>;
  electionVotes_every?: InputMaybe<SubstrateElectionVoteWhereInput>;
  electionVotes_none?: InputMaybe<SubstrateElectionVoteWhereInput>;
  electionVotes_some?: InputMaybe<SubstrateElectionVoteWhereInput>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposalVotes_every?: InputMaybe<SubstrateProposalVoteWhereInput>;
  proposalVotes_none?: InputMaybe<SubstrateProposalVoteWhereInput>;
  proposalVotes_some?: InputMaybe<SubstrateProposalVoteWhereInput>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  technicalCommitteeProposals_every?: InputMaybe<SubstrateTechnicalCommitteeProposalWhereInput>;
  technicalCommitteeProposals_none?: InputMaybe<SubstrateTechnicalCommitteeProposalWhereInput>;
  technicalCommitteeProposals_some?: InputMaybe<SubstrateTechnicalCommitteeProposalWhereInput>;
  totalBountyProposals_eq?: InputMaybe<Scalars['Int']>;
  totalBountyProposals_gt?: InputMaybe<Scalars['Int']>;
  totalBountyProposals_gte?: InputMaybe<Scalars['Int']>;
  totalBountyProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  totalBountyProposals_lt?: InputMaybe<Scalars['Int']>;
  totalBountyProposals_lte?: InputMaybe<Scalars['Int']>;
  totalBountyProposals_not_eq?: InputMaybe<Scalars['Int']>;
  totalBountyProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCouncilProposals_eq?: InputMaybe<Scalars['Int']>;
  totalCouncilProposals_gt?: InputMaybe<Scalars['Int']>;
  totalCouncilProposals_gte?: InputMaybe<Scalars['Int']>;
  totalCouncilProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCouncilProposals_lt?: InputMaybe<Scalars['Int']>;
  totalCouncilProposals_lte?: InputMaybe<Scalars['Int']>;
  totalCouncilProposals_not_eq?: InputMaybe<Scalars['Int']>;
  totalCouncilProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDemocracyProposalSeconds_eq?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposalSeconds_gt?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposalSeconds_gte?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposalSeconds_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDemocracyProposalSeconds_lt?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposalSeconds_lte?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposalSeconds_not_eq?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposalSeconds_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDemocracyProposals_eq?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposals_gt?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposals_gte?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDemocracyProposals_lt?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposals_lte?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposals_not_eq?: InputMaybe<Scalars['Int']>;
  totalDemocracyProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDemocracyReferendaVotes_eq?: InputMaybe<Scalars['Int']>;
  totalDemocracyReferendaVotes_gt?: InputMaybe<Scalars['Int']>;
  totalDemocracyReferendaVotes_gte?: InputMaybe<Scalars['Int']>;
  totalDemocracyReferendaVotes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDemocracyReferendaVotes_lt?: InputMaybe<Scalars['Int']>;
  totalDemocracyReferendaVotes_lte?: InputMaybe<Scalars['Int']>;
  totalDemocracyReferendaVotes_not_eq?: InputMaybe<Scalars['Int']>;
  totalDemocracyReferendaVotes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalElectionVotes_eq?: InputMaybe<Scalars['Int']>;
  totalElectionVotes_gt?: InputMaybe<Scalars['Int']>;
  totalElectionVotes_gte?: InputMaybe<Scalars['Int']>;
  totalElectionVotes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalElectionVotes_lt?: InputMaybe<Scalars['Int']>;
  totalElectionVotes_lte?: InputMaybe<Scalars['Int']>;
  totalElectionVotes_not_eq?: InputMaybe<Scalars['Int']>;
  totalElectionVotes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalProposalSeconds_eq?: InputMaybe<Scalars['Int']>;
  totalProposalSeconds_gt?: InputMaybe<Scalars['Int']>;
  totalProposalSeconds_gte?: InputMaybe<Scalars['Int']>;
  totalProposalSeconds_in?: InputMaybe<Array<Scalars['Int']>>;
  totalProposalSeconds_lt?: InputMaybe<Scalars['Int']>;
  totalProposalSeconds_lte?: InputMaybe<Scalars['Int']>;
  totalProposalSeconds_not_eq?: InputMaybe<Scalars['Int']>;
  totalProposalSeconds_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalProposalVotes_eq?: InputMaybe<Scalars['Int']>;
  totalProposalVotes_gt?: InputMaybe<Scalars['Int']>;
  totalProposalVotes_gte?: InputMaybe<Scalars['Int']>;
  totalProposalVotes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalProposalVotes_lt?: InputMaybe<Scalars['Int']>;
  totalProposalVotes_lte?: InputMaybe<Scalars['Int']>;
  totalProposalVotes_not_eq?: InputMaybe<Scalars['Int']>;
  totalProposalVotes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalTechnicalCommitteeProposals_eq?: InputMaybe<Scalars['Int']>;
  totalTechnicalCommitteeProposals_gt?: InputMaybe<Scalars['Int']>;
  totalTechnicalCommitteeProposals_gte?: InputMaybe<Scalars['Int']>;
  totalTechnicalCommitteeProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  totalTechnicalCommitteeProposals_lt?: InputMaybe<Scalars['Int']>;
  totalTechnicalCommitteeProposals_lte?: InputMaybe<Scalars['Int']>;
  totalTechnicalCommitteeProposals_not_eq?: InputMaybe<Scalars['Int']>;
  totalTechnicalCommitteeProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalTreasurySpendProposals_eq?: InputMaybe<Scalars['Int']>;
  totalTreasurySpendProposals_gt?: InputMaybe<Scalars['Int']>;
  totalTreasurySpendProposals_gte?: InputMaybe<Scalars['Int']>;
  totalTreasurySpendProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  totalTreasurySpendProposals_lt?: InputMaybe<Scalars['Int']>;
  totalTreasurySpendProposals_lte?: InputMaybe<Scalars['Int']>;
  totalTreasurySpendProposals_not_eq?: InputMaybe<Scalars['Int']>;
  totalTreasurySpendProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  treasurySpendProposals_every?: InputMaybe<SubstrateTreasuryProposalWhereInput>;
  treasurySpendProposals_none?: InputMaybe<SubstrateTreasuryProposalWhereInput>;
  treasurySpendProposals_some?: InputMaybe<SubstrateTreasuryProposalWhereInput>;
};

export type SubstrateGovernanceAccountWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateGovernanceAccountsConnection = {
  __typename?: 'SubstrateGovernanceAccountsConnection';
  edges: Array<SubstrateGovernanceAccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SubstrateNetwork {
  Kusama = 'kusama',
  Moonbeam = 'moonbeam',
  Phala = 'phala',
  Polkadot = 'polkadot',
}

export type SubstrateProposalVote = {
  __typename?: 'SubstrateProposalVote';
  account: SubstrateGovernanceAccount;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  refIndex: Scalars['Int'];
  rootAccount: Scalars['String'];
  /** not sure how to interpret this properly yet so using JSON.stringify() and saving raw */
  vote: Scalars['String'];
};

export type SubstrateProposalVoteEdge = {
  __typename?: 'SubstrateProposalVoteEdge';
  cursor: Scalars['String'];
  node: SubstrateProposalVote;
};

export enum SubstrateProposalVoteOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RefIndexAsc = 'refIndex_ASC',
  RefIndexDesc = 'refIndex_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  VoteAsc = 'vote_ASC',
  VoteDesc = 'vote_DESC',
}

export type SubstrateProposalVoteWhereInput = {
  AND?: InputMaybe<Array<SubstrateProposalVoteWhereInput>>;
  OR?: InputMaybe<Array<SubstrateProposalVoteWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  refIndex_eq?: InputMaybe<Scalars['Int']>;
  refIndex_gt?: InputMaybe<Scalars['Int']>;
  refIndex_gte?: InputMaybe<Scalars['Int']>;
  refIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  refIndex_lt?: InputMaybe<Scalars['Int']>;
  refIndex_lte?: InputMaybe<Scalars['Int']>;
  refIndex_not_eq?: InputMaybe<Scalars['Int']>;
  refIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  vote_contains?: InputMaybe<Scalars['String']>;
  vote_containsInsensitive?: InputMaybe<Scalars['String']>;
  vote_endsWith?: InputMaybe<Scalars['String']>;
  vote_eq?: InputMaybe<Scalars['String']>;
  vote_gt?: InputMaybe<Scalars['String']>;
  vote_gte?: InputMaybe<Scalars['String']>;
  vote_in?: InputMaybe<Array<Scalars['String']>>;
  vote_lt?: InputMaybe<Scalars['String']>;
  vote_lte?: InputMaybe<Scalars['String']>;
  vote_not_contains?: InputMaybe<Scalars['String']>;
  vote_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  vote_not_endsWith?: InputMaybe<Scalars['String']>;
  vote_not_eq?: InputMaybe<Scalars['String']>;
  vote_not_in?: InputMaybe<Array<Scalars['String']>>;
  vote_not_startsWith?: InputMaybe<Scalars['String']>;
  vote_startsWith?: InputMaybe<Scalars['String']>;
};

export type SubstrateProposalVoteWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateProposalVotesConnection = {
  __typename?: 'SubstrateProposalVotesConnection';
  edges: Array<SubstrateProposalVoteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateTechnicalCommitteeProposal = {
  __typename?: 'SubstrateTechnicalCommitteeProposal';
  account: SubstrateGovernanceAccount;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposalHash: Scalars['String'];
  proposalIndex: Scalars['Int'];
  rootAccount: Scalars['String'];
  threshold: Scalars['Int'];
};

export type SubstrateTechnicalCommitteeProposalEdge = {
  __typename?: 'SubstrateTechnicalCommitteeProposalEdge';
  cursor: Scalars['String'];
  node: SubstrateTechnicalCommitteeProposal;
};

export enum SubstrateTechnicalCommitteeProposalOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalHashAsc = 'proposalHash_ASC',
  ProposalHashDesc = 'proposalHash_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  ThresholdAsc = 'threshold_ASC',
  ThresholdDesc = 'threshold_DESC',
}

export type SubstrateTechnicalCommitteeProposalWhereInput = {
  AND?: InputMaybe<Array<SubstrateTechnicalCommitteeProposalWhereInput>>;
  OR?: InputMaybe<Array<SubstrateTechnicalCommitteeProposalWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposalHash_contains?: InputMaybe<Scalars['String']>;
  proposalHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  proposalHash_endsWith?: InputMaybe<Scalars['String']>;
  proposalHash_eq?: InputMaybe<Scalars['String']>;
  proposalHash_gt?: InputMaybe<Scalars['String']>;
  proposalHash_gte?: InputMaybe<Scalars['String']>;
  proposalHash_in?: InputMaybe<Array<Scalars['String']>>;
  proposalHash_lt?: InputMaybe<Scalars['String']>;
  proposalHash_lte?: InputMaybe<Scalars['String']>;
  proposalHash_not_contains?: InputMaybe<Scalars['String']>;
  proposalHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  proposalHash_not_endsWith?: InputMaybe<Scalars['String']>;
  proposalHash_not_eq?: InputMaybe<Scalars['String']>;
  proposalHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposalHash_not_startsWith?: InputMaybe<Scalars['String']>;
  proposalHash_startsWith?: InputMaybe<Scalars['String']>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  threshold_eq?: InputMaybe<Scalars['Int']>;
  threshold_gt?: InputMaybe<Scalars['Int']>;
  threshold_gte?: InputMaybe<Scalars['Int']>;
  threshold_in?: InputMaybe<Array<Scalars['Int']>>;
  threshold_lt?: InputMaybe<Scalars['Int']>;
  threshold_lte?: InputMaybe<Scalars['Int']>;
  threshold_not_eq?: InputMaybe<Scalars['Int']>;
  threshold_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type SubstrateTechnicalCommitteeProposalWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateTechnicalCommitteeProposalsConnection = {
  __typename?: 'SubstrateTechnicalCommitteeProposalsConnection';
  edges: Array<SubstrateTechnicalCommitteeProposalEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubstrateTreasuryProposal = {
  __typename?: 'SubstrateTreasuryProposal';
  account: SubstrateGovernanceAccount;
  beneficiary?: Maybe<Scalars['String']>;
  beneficiaryAccount?: Maybe<SubstrateGovernanceAccount>;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  /** network:block:index */
  id: Scalars['ID'];
  network: SubstrateNetwork;
  proposalIndex: Scalars['Int'];
  rootAccount: Scalars['String'];
  value: Scalars['BigInt'];
};

export type SubstrateTreasuryProposalEdge = {
  __typename?: 'SubstrateTreasuryProposalEdge';
  cursor: Scalars['String'];
  node: SubstrateTreasuryProposal;
};

export enum SubstrateTreasuryProposalOrderByInput {
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountNetworkAsc = 'account_network_ASC',
  AccountNetworkDesc = 'account_network_DESC',
  AccountRootAccountAsc = 'account_rootAccount_ASC',
  AccountRootAccountDesc = 'account_rootAccount_DESC',
  AccountTotalBountyProposalsAsc = 'account_totalBountyProposals_ASC',
  AccountTotalBountyProposalsDesc = 'account_totalBountyProposals_DESC',
  AccountTotalCouncilProposalsAsc = 'account_totalCouncilProposals_ASC',
  AccountTotalCouncilProposalsDesc = 'account_totalCouncilProposals_DESC',
  AccountTotalDemocracyProposalSecondsAsc = 'account_totalDemocracyProposalSeconds_ASC',
  AccountTotalDemocracyProposalSecondsDesc = 'account_totalDemocracyProposalSeconds_DESC',
  AccountTotalDemocracyProposalsAsc = 'account_totalDemocracyProposals_ASC',
  AccountTotalDemocracyProposalsDesc = 'account_totalDemocracyProposals_DESC',
  AccountTotalDemocracyReferendaVotesAsc = 'account_totalDemocracyReferendaVotes_ASC',
  AccountTotalDemocracyReferendaVotesDesc = 'account_totalDemocracyReferendaVotes_DESC',
  AccountTotalElectionVotesAsc = 'account_totalElectionVotes_ASC',
  AccountTotalElectionVotesDesc = 'account_totalElectionVotes_DESC',
  AccountTotalProposalSecondsAsc = 'account_totalProposalSeconds_ASC',
  AccountTotalProposalSecondsDesc = 'account_totalProposalSeconds_DESC',
  AccountTotalProposalVotesAsc = 'account_totalProposalVotes_ASC',
  AccountTotalProposalVotesDesc = 'account_totalProposalVotes_DESC',
  AccountTotalTechnicalCommitteeProposalsAsc = 'account_totalTechnicalCommitteeProposals_ASC',
  AccountTotalTechnicalCommitteeProposalsDesc = 'account_totalTechnicalCommitteeProposals_DESC',
  AccountTotalTreasurySpendProposalsAsc = 'account_totalTreasurySpendProposals_ASC',
  AccountTotalTreasurySpendProposalsDesc = 'account_totalTreasurySpendProposals_DESC',
  BeneficiaryAccountIdAsc = 'beneficiaryAccount_id_ASC',
  BeneficiaryAccountIdDesc = 'beneficiaryAccount_id_DESC',
  BeneficiaryAccountNetworkAsc = 'beneficiaryAccount_network_ASC',
  BeneficiaryAccountNetworkDesc = 'beneficiaryAccount_network_DESC',
  BeneficiaryAccountRootAccountAsc = 'beneficiaryAccount_rootAccount_ASC',
  BeneficiaryAccountRootAccountDesc = 'beneficiaryAccount_rootAccount_DESC',
  BeneficiaryAccountTotalBountyProposalsAsc = 'beneficiaryAccount_totalBountyProposals_ASC',
  BeneficiaryAccountTotalBountyProposalsDesc = 'beneficiaryAccount_totalBountyProposals_DESC',
  BeneficiaryAccountTotalCouncilProposalsAsc = 'beneficiaryAccount_totalCouncilProposals_ASC',
  BeneficiaryAccountTotalCouncilProposalsDesc = 'beneficiaryAccount_totalCouncilProposals_DESC',
  BeneficiaryAccountTotalDemocracyProposalSecondsAsc = 'beneficiaryAccount_totalDemocracyProposalSeconds_ASC',
  BeneficiaryAccountTotalDemocracyProposalSecondsDesc = 'beneficiaryAccount_totalDemocracyProposalSeconds_DESC',
  BeneficiaryAccountTotalDemocracyProposalsAsc = 'beneficiaryAccount_totalDemocracyProposals_ASC',
  BeneficiaryAccountTotalDemocracyProposalsDesc = 'beneficiaryAccount_totalDemocracyProposals_DESC',
  BeneficiaryAccountTotalDemocracyReferendaVotesAsc = 'beneficiaryAccount_totalDemocracyReferendaVotes_ASC',
  BeneficiaryAccountTotalDemocracyReferendaVotesDesc = 'beneficiaryAccount_totalDemocracyReferendaVotes_DESC',
  BeneficiaryAccountTotalElectionVotesAsc = 'beneficiaryAccount_totalElectionVotes_ASC',
  BeneficiaryAccountTotalElectionVotesDesc = 'beneficiaryAccount_totalElectionVotes_DESC',
  BeneficiaryAccountTotalProposalSecondsAsc = 'beneficiaryAccount_totalProposalSeconds_ASC',
  BeneficiaryAccountTotalProposalSecondsDesc = 'beneficiaryAccount_totalProposalSeconds_DESC',
  BeneficiaryAccountTotalProposalVotesAsc = 'beneficiaryAccount_totalProposalVotes_ASC',
  BeneficiaryAccountTotalProposalVotesDesc = 'beneficiaryAccount_totalProposalVotes_DESC',
  BeneficiaryAccountTotalTechnicalCommitteeProposalsAsc = 'beneficiaryAccount_totalTechnicalCommitteeProposals_ASC',
  BeneficiaryAccountTotalTechnicalCommitteeProposalsDesc = 'beneficiaryAccount_totalTechnicalCommitteeProposals_DESC',
  BeneficiaryAccountTotalTreasurySpendProposalsAsc = 'beneficiaryAccount_totalTreasurySpendProposals_ASC',
  BeneficiaryAccountTotalTreasurySpendProposalsDesc = 'beneficiaryAccount_totalTreasurySpendProposals_DESC',
  BeneficiaryAsc = 'beneficiary_ASC',
  BeneficiaryDesc = 'beneficiary_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export type SubstrateTreasuryProposalWhereInput = {
  AND?: InputMaybe<Array<SubstrateTreasuryProposalWhereInput>>;
  OR?: InputMaybe<Array<SubstrateTreasuryProposalWhereInput>>;
  account?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  beneficiaryAccount?: InputMaybe<SubstrateGovernanceAccountWhereInput>;
  beneficiaryAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  beneficiary_contains?: InputMaybe<Scalars['String']>;
  beneficiary_containsInsensitive?: InputMaybe<Scalars['String']>;
  beneficiary_endsWith?: InputMaybe<Scalars['String']>;
  beneficiary_eq?: InputMaybe<Scalars['String']>;
  beneficiary_gt?: InputMaybe<Scalars['String']>;
  beneficiary_gte?: InputMaybe<Scalars['String']>;
  beneficiary_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiary_isNull?: InputMaybe<Scalars['Boolean']>;
  beneficiary_lt?: InputMaybe<Scalars['String']>;
  beneficiary_lte?: InputMaybe<Scalars['String']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']>;
  beneficiary_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  beneficiary_not_endsWith?: InputMaybe<Scalars['String']>;
  beneficiary_not_eq?: InputMaybe<Scalars['String']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiary_not_startsWith?: InputMaybe<Scalars['String']>;
  beneficiary_startsWith?: InputMaybe<Scalars['String']>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  network_eq?: InputMaybe<SubstrateNetwork>;
  network_in?: InputMaybe<Array<SubstrateNetwork>>;
  network_not_eq?: InputMaybe<SubstrateNetwork>;
  network_not_in?: InputMaybe<Array<SubstrateNetwork>>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootAccount_contains?: InputMaybe<Scalars['String']>;
  rootAccount_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_eq?: InputMaybe<Scalars['String']>;
  rootAccount_gt?: InputMaybe<Scalars['String']>;
  rootAccount_gte?: InputMaybe<Scalars['String']>;
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_lt?: InputMaybe<Scalars['String']>;
  rootAccount_lte?: InputMaybe<Scalars['String']>;
  rootAccount_not_contains?: InputMaybe<Scalars['String']>;
  rootAccount_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rootAccount_not_endsWith?: InputMaybe<Scalars['String']>;
  rootAccount_not_eq?: InputMaybe<Scalars['String']>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootAccount_not_startsWith?: InputMaybe<Scalars['String']>;
  rootAccount_startsWith?: InputMaybe<Scalars['String']>;
  value_eq?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not_eq?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type SubstrateTreasuryProposalWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SubstrateTreasuryProposalsConnection = {
  __typename?: 'SubstrateTreasuryProposalsConnection';
  edges: Array<SubstrateTreasuryProposalEdge>;
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
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubstrateBountyProposal: ResolverTypeWrapper<SubstrateBountyProposal>;
  SubstrateBountyProposalEdge: ResolverTypeWrapper<SubstrateBountyProposalEdge>;
  SubstrateBountyProposalOrderByInput: SubstrateBountyProposalOrderByInput;
  SubstrateBountyProposalWhereInput: SubstrateBountyProposalWhereInput;
  SubstrateBountyProposalWhereUniqueInput: SubstrateBountyProposalWhereUniqueInput;
  SubstrateBountyProposalsConnection: ResolverTypeWrapper<SubstrateBountyProposalsConnection>;
  SubstrateCouncilProposal: ResolverTypeWrapper<SubstrateCouncilProposal>;
  SubstrateCouncilProposalEdge: ResolverTypeWrapper<SubstrateCouncilProposalEdge>;
  SubstrateCouncilProposalOrderByInput: SubstrateCouncilProposalOrderByInput;
  SubstrateCouncilProposalWhereInput: SubstrateCouncilProposalWhereInput;
  SubstrateCouncilProposalWhereUniqueInput: SubstrateCouncilProposalWhereUniqueInput;
  SubstrateCouncilProposalsConnection: ResolverTypeWrapper<SubstrateCouncilProposalsConnection>;
  SubstrateCouncilVote: ResolverTypeWrapper<SubstrateCouncilVote>;
  SubstrateCouncilVoteEdge: ResolverTypeWrapper<SubstrateCouncilVoteEdge>;
  SubstrateCouncilVoteOrderByInput: SubstrateCouncilVoteOrderByInput;
  SubstrateCouncilVoteWhereInput: SubstrateCouncilVoteWhereInput;
  SubstrateCouncilVoteWhereUniqueInput: SubstrateCouncilVoteWhereUniqueInput;
  SubstrateCouncilVotesConnection: ResolverTypeWrapper<SubstrateCouncilVotesConnection>;
  SubstrateDemocracyProposal: ResolverTypeWrapper<SubstrateDemocracyProposal>;
  SubstrateDemocracyProposalEdge: ResolverTypeWrapper<SubstrateDemocracyProposalEdge>;
  SubstrateDemocracyProposalOrderByInput: SubstrateDemocracyProposalOrderByInput;
  SubstrateDemocracyProposalSecond: ResolverTypeWrapper<SubstrateDemocracyProposalSecond>;
  SubstrateDemocracyProposalSecondEdge: ResolverTypeWrapper<SubstrateDemocracyProposalSecondEdge>;
  SubstrateDemocracyProposalSecondOrderByInput: SubstrateDemocracyProposalSecondOrderByInput;
  SubstrateDemocracyProposalSecondWhereInput: SubstrateDemocracyProposalSecondWhereInput;
  SubstrateDemocracyProposalSecondWhereUniqueInput: SubstrateDemocracyProposalSecondWhereUniqueInput;
  SubstrateDemocracyProposalSecondsConnection: ResolverTypeWrapper<SubstrateDemocracyProposalSecondsConnection>;
  SubstrateDemocracyProposalStatus: SubstrateDemocracyProposalStatus;
  SubstrateDemocracyProposalWhereInput: SubstrateDemocracyProposalWhereInput;
  SubstrateDemocracyProposalWhereUniqueInput: SubstrateDemocracyProposalWhereUniqueInput;
  SubstrateDemocracyProposalsConnection: ResolverTypeWrapper<SubstrateDemocracyProposalsConnection>;
  SubstrateDemocracyReferenda: ResolverTypeWrapper<SubstrateDemocracyReferenda>;
  SubstrateDemocracyReferendaEdge: ResolverTypeWrapper<SubstrateDemocracyReferendaEdge>;
  SubstrateDemocracyReferendaOrderByInput: SubstrateDemocracyReferendaOrderByInput;
  SubstrateDemocracyReferendaStatus: SubstrateDemocracyReferendaStatus;
  SubstrateDemocracyReferendaVote: ResolverTypeWrapper<SubstrateDemocracyReferendaVote>;
  SubstrateDemocracyReferendaVoteEdge: ResolverTypeWrapper<SubstrateDemocracyReferendaVoteEdge>;
  SubstrateDemocracyReferendaVoteOrderByInput: SubstrateDemocracyReferendaVoteOrderByInput;
  SubstrateDemocracyReferendaVoteWhereInput: SubstrateDemocracyReferendaVoteWhereInput;
  SubstrateDemocracyReferendaVoteWhereUniqueInput: SubstrateDemocracyReferendaVoteWhereUniqueInput;
  SubstrateDemocracyReferendaVotesConnection: ResolverTypeWrapper<SubstrateDemocracyReferendaVotesConnection>;
  SubstrateDemocracyReferendaWhereInput: SubstrateDemocracyReferendaWhereInput;
  SubstrateDemocracyReferendaWhereUniqueInput: SubstrateDemocracyReferendaWhereUniqueInput;
  SubstrateDemocracyReferendasConnection: ResolverTypeWrapper<SubstrateDemocracyReferendasConnection>;
  SubstrateElectionVote: ResolverTypeWrapper<SubstrateElectionVote>;
  SubstrateElectionVoteEdge: ResolverTypeWrapper<SubstrateElectionVoteEdge>;
  SubstrateElectionVoteOrderByInput: SubstrateElectionVoteOrderByInput;
  SubstrateElectionVoteWhereInput: SubstrateElectionVoteWhereInput;
  SubstrateElectionVoteWhereUniqueInput: SubstrateElectionVoteWhereUniqueInput;
  SubstrateElectionVotesConnection: ResolverTypeWrapper<SubstrateElectionVotesConnection>;
  SubstrateGovernanceAccount: ResolverTypeWrapper<SubstrateGovernanceAccount>;
  SubstrateGovernanceAccountEdge: ResolverTypeWrapper<SubstrateGovernanceAccountEdge>;
  SubstrateGovernanceAccountOrderByInput: SubstrateGovernanceAccountOrderByInput;
  SubstrateGovernanceAccountWhereInput: SubstrateGovernanceAccountWhereInput;
  SubstrateGovernanceAccountWhereUniqueInput: SubstrateGovernanceAccountWhereUniqueInput;
  SubstrateGovernanceAccountsConnection: ResolverTypeWrapper<SubstrateGovernanceAccountsConnection>;
  SubstrateNetwork: SubstrateNetwork;
  SubstrateProposalVote: ResolverTypeWrapper<SubstrateProposalVote>;
  SubstrateProposalVoteEdge: ResolverTypeWrapper<SubstrateProposalVoteEdge>;
  SubstrateProposalVoteOrderByInput: SubstrateProposalVoteOrderByInput;
  SubstrateProposalVoteWhereInput: SubstrateProposalVoteWhereInput;
  SubstrateProposalVoteWhereUniqueInput: SubstrateProposalVoteWhereUniqueInput;
  SubstrateProposalVotesConnection: ResolverTypeWrapper<SubstrateProposalVotesConnection>;
  SubstrateTechnicalCommitteeProposal: ResolverTypeWrapper<SubstrateTechnicalCommitteeProposal>;
  SubstrateTechnicalCommitteeProposalEdge: ResolverTypeWrapper<SubstrateTechnicalCommitteeProposalEdge>;
  SubstrateTechnicalCommitteeProposalOrderByInput: SubstrateTechnicalCommitteeProposalOrderByInput;
  SubstrateTechnicalCommitteeProposalWhereInput: SubstrateTechnicalCommitteeProposalWhereInput;
  SubstrateTechnicalCommitteeProposalWhereUniqueInput: SubstrateTechnicalCommitteeProposalWhereUniqueInput;
  SubstrateTechnicalCommitteeProposalsConnection: ResolverTypeWrapper<SubstrateTechnicalCommitteeProposalsConnection>;
  SubstrateTreasuryProposal: ResolverTypeWrapper<SubstrateTreasuryProposal>;
  SubstrateTreasuryProposalEdge: ResolverTypeWrapper<SubstrateTreasuryProposalEdge>;
  SubstrateTreasuryProposalOrderByInput: SubstrateTreasuryProposalOrderByInput;
  SubstrateTreasuryProposalWhereInput: SubstrateTreasuryProposalWhereInput;
  SubstrateTreasuryProposalWhereUniqueInput: SubstrateTreasuryProposalWhereUniqueInput;
  SubstrateTreasuryProposalsConnection: ResolverTypeWrapper<SubstrateTreasuryProposalsConnection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String'];
  SubstrateBountyProposal: SubstrateBountyProposal;
  SubstrateBountyProposalEdge: SubstrateBountyProposalEdge;
  SubstrateBountyProposalWhereInput: SubstrateBountyProposalWhereInput;
  SubstrateBountyProposalWhereUniqueInput: SubstrateBountyProposalWhereUniqueInput;
  SubstrateBountyProposalsConnection: SubstrateBountyProposalsConnection;
  SubstrateCouncilProposal: SubstrateCouncilProposal;
  SubstrateCouncilProposalEdge: SubstrateCouncilProposalEdge;
  SubstrateCouncilProposalWhereInput: SubstrateCouncilProposalWhereInput;
  SubstrateCouncilProposalWhereUniqueInput: SubstrateCouncilProposalWhereUniqueInput;
  SubstrateCouncilProposalsConnection: SubstrateCouncilProposalsConnection;
  SubstrateCouncilVote: SubstrateCouncilVote;
  SubstrateCouncilVoteEdge: SubstrateCouncilVoteEdge;
  SubstrateCouncilVoteWhereInput: SubstrateCouncilVoteWhereInput;
  SubstrateCouncilVoteWhereUniqueInput: SubstrateCouncilVoteWhereUniqueInput;
  SubstrateCouncilVotesConnection: SubstrateCouncilVotesConnection;
  SubstrateDemocracyProposal: SubstrateDemocracyProposal;
  SubstrateDemocracyProposalEdge: SubstrateDemocracyProposalEdge;
  SubstrateDemocracyProposalSecond: SubstrateDemocracyProposalSecond;
  SubstrateDemocracyProposalSecondEdge: SubstrateDemocracyProposalSecondEdge;
  SubstrateDemocracyProposalSecondWhereInput: SubstrateDemocracyProposalSecondWhereInput;
  SubstrateDemocracyProposalSecondWhereUniqueInput: SubstrateDemocracyProposalSecondWhereUniqueInput;
  SubstrateDemocracyProposalSecondsConnection: SubstrateDemocracyProposalSecondsConnection;
  SubstrateDemocracyProposalWhereInput: SubstrateDemocracyProposalWhereInput;
  SubstrateDemocracyProposalWhereUniqueInput: SubstrateDemocracyProposalWhereUniqueInput;
  SubstrateDemocracyProposalsConnection: SubstrateDemocracyProposalsConnection;
  SubstrateDemocracyReferenda: SubstrateDemocracyReferenda;
  SubstrateDemocracyReferendaEdge: SubstrateDemocracyReferendaEdge;
  SubstrateDemocracyReferendaVote: SubstrateDemocracyReferendaVote;
  SubstrateDemocracyReferendaVoteEdge: SubstrateDemocracyReferendaVoteEdge;
  SubstrateDemocracyReferendaVoteWhereInput: SubstrateDemocracyReferendaVoteWhereInput;
  SubstrateDemocracyReferendaVoteWhereUniqueInput: SubstrateDemocracyReferendaVoteWhereUniqueInput;
  SubstrateDemocracyReferendaVotesConnection: SubstrateDemocracyReferendaVotesConnection;
  SubstrateDemocracyReferendaWhereInput: SubstrateDemocracyReferendaWhereInput;
  SubstrateDemocracyReferendaWhereUniqueInput: SubstrateDemocracyReferendaWhereUniqueInput;
  SubstrateDemocracyReferendasConnection: SubstrateDemocracyReferendasConnection;
  SubstrateElectionVote: SubstrateElectionVote;
  SubstrateElectionVoteEdge: SubstrateElectionVoteEdge;
  SubstrateElectionVoteWhereInput: SubstrateElectionVoteWhereInput;
  SubstrateElectionVoteWhereUniqueInput: SubstrateElectionVoteWhereUniqueInput;
  SubstrateElectionVotesConnection: SubstrateElectionVotesConnection;
  SubstrateGovernanceAccount: SubstrateGovernanceAccount;
  SubstrateGovernanceAccountEdge: SubstrateGovernanceAccountEdge;
  SubstrateGovernanceAccountWhereInput: SubstrateGovernanceAccountWhereInput;
  SubstrateGovernanceAccountWhereUniqueInput: SubstrateGovernanceAccountWhereUniqueInput;
  SubstrateGovernanceAccountsConnection: SubstrateGovernanceAccountsConnection;
  SubstrateProposalVote: SubstrateProposalVote;
  SubstrateProposalVoteEdge: SubstrateProposalVoteEdge;
  SubstrateProposalVoteWhereInput: SubstrateProposalVoteWhereInput;
  SubstrateProposalVoteWhereUniqueInput: SubstrateProposalVoteWhereUniqueInput;
  SubstrateProposalVotesConnection: SubstrateProposalVotesConnection;
  SubstrateTechnicalCommitteeProposal: SubstrateTechnicalCommitteeProposal;
  SubstrateTechnicalCommitteeProposalEdge: SubstrateTechnicalCommitteeProposalEdge;
  SubstrateTechnicalCommitteeProposalWhereInput: SubstrateTechnicalCommitteeProposalWhereInput;
  SubstrateTechnicalCommitteeProposalWhereUniqueInput: SubstrateTechnicalCommitteeProposalWhereUniqueInput;
  SubstrateTechnicalCommitteeProposalsConnection: SubstrateTechnicalCommitteeProposalsConnection;
  SubstrateTreasuryProposal: SubstrateTreasuryProposal;
  SubstrateTreasuryProposalEdge: SubstrateTreasuryProposalEdge;
  SubstrateTreasuryProposalWhereInput: SubstrateTreasuryProposalWhereInput;
  SubstrateTreasuryProposalWhereUniqueInput: SubstrateTreasuryProposalWhereUniqueInput;
  SubstrateTreasuryProposalsConnection: SubstrateTreasuryProposalsConnection;
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

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
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
  substrateBountyProposalById?: Resolver<
    Maybe<ResolversTypes['SubstrateBountyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateBountyProposalByIdArgs, 'id'>
  >;
  substrateBountyProposalByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateBountyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateBountyProposalByUniqueInputArgs, 'where'>
  >;
  substrateBountyProposals?: Resolver<
    Array<ResolversTypes['SubstrateBountyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateBountyProposalsArgs, never>
  >;
  substrateBountyProposalsConnection?: Resolver<
    ResolversTypes['SubstrateBountyProposalsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateBountyProposalsConnectionArgs, 'orderBy'>
  >;
  substrateCouncilProposalById?: Resolver<
    Maybe<ResolversTypes['SubstrateCouncilProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilProposalByIdArgs, 'id'>
  >;
  substrateCouncilProposalByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateCouncilProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilProposalByUniqueInputArgs, 'where'>
  >;
  substrateCouncilProposals?: Resolver<
    Array<ResolversTypes['SubstrateCouncilProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilProposalsArgs, never>
  >;
  substrateCouncilProposalsConnection?: Resolver<
    ResolversTypes['SubstrateCouncilProposalsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilProposalsConnectionArgs, 'orderBy'>
  >;
  substrateCouncilVoteById?: Resolver<
    Maybe<ResolversTypes['SubstrateCouncilVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilVoteByIdArgs, 'id'>
  >;
  substrateCouncilVoteByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateCouncilVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilVoteByUniqueInputArgs, 'where'>
  >;
  substrateCouncilVotes?: Resolver<
    Array<ResolversTypes['SubstrateCouncilVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilVotesArgs, never>
  >;
  substrateCouncilVotesConnection?: Resolver<
    ResolversTypes['SubstrateCouncilVotesConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateCouncilVotesConnectionArgs, 'orderBy'>
  >;
  substrateDemocracyProposalById?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalByIdArgs, 'id'>
  >;
  substrateDemocracyProposalByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalByUniqueInputArgs, 'where'>
  >;
  substrateDemocracyProposalSecondById?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyProposalSecond']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalSecondByIdArgs, 'id'>
  >;
  substrateDemocracyProposalSecondByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyProposalSecond']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalSecondByUniqueInputArgs, 'where'>
  >;
  substrateDemocracyProposalSeconds?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyProposalSecond']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalSecondsArgs, never>
  >;
  substrateDemocracyProposalSecondsConnection?: Resolver<
    ResolversTypes['SubstrateDemocracyProposalSecondsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalSecondsConnectionArgs, 'orderBy'>
  >;
  substrateDemocracyProposals?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalsArgs, never>
  >;
  substrateDemocracyProposalsConnection?: Resolver<
    ResolversTypes['SubstrateDemocracyProposalsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyProposalsConnectionArgs, 'orderBy'>
  >;
  substrateDemocracyReferendaById?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyReferenda']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendaByIdArgs, 'id'>
  >;
  substrateDemocracyReferendaByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyReferenda']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendaByUniqueInputArgs, 'where'>
  >;
  substrateDemocracyReferendaVoteById?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyReferendaVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendaVoteByIdArgs, 'id'>
  >;
  substrateDemocracyReferendaVoteByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateDemocracyReferendaVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendaVoteByUniqueInputArgs, 'where'>
  >;
  substrateDemocracyReferendaVotes?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyReferendaVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendaVotesArgs, never>
  >;
  substrateDemocracyReferendaVotesConnection?: Resolver<
    ResolversTypes['SubstrateDemocracyReferendaVotesConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendaVotesConnectionArgs, 'orderBy'>
  >;
  substrateDemocracyReferendas?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyReferenda']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendasArgs, never>
  >;
  substrateDemocracyReferendasConnection?: Resolver<
    ResolversTypes['SubstrateDemocracyReferendasConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateDemocracyReferendasConnectionArgs, 'orderBy'>
  >;
  substrateElectionVoteById?: Resolver<
    Maybe<ResolversTypes['SubstrateElectionVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateElectionVoteByIdArgs, 'id'>
  >;
  substrateElectionVoteByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateElectionVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateElectionVoteByUniqueInputArgs, 'where'>
  >;
  substrateElectionVotes?: Resolver<
    Array<ResolversTypes['SubstrateElectionVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateElectionVotesArgs, never>
  >;
  substrateElectionVotesConnection?: Resolver<
    ResolversTypes['SubstrateElectionVotesConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateElectionVotesConnectionArgs, 'orderBy'>
  >;
  substrateGovernanceAccountById?: Resolver<
    Maybe<ResolversTypes['SubstrateGovernanceAccount']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateGovernanceAccountByIdArgs, 'id'>
  >;
  substrateGovernanceAccountByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateGovernanceAccount']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateGovernanceAccountByUniqueInputArgs, 'where'>
  >;
  substrateGovernanceAccounts?: Resolver<
    Array<ResolversTypes['SubstrateGovernanceAccount']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateGovernanceAccountsArgs, never>
  >;
  substrateGovernanceAccountsConnection?: Resolver<
    ResolversTypes['SubstrateGovernanceAccountsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateGovernanceAccountsConnectionArgs, 'orderBy'>
  >;
  substrateProposalVoteById?: Resolver<
    Maybe<ResolversTypes['SubstrateProposalVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateProposalVoteByIdArgs, 'id'>
  >;
  substrateProposalVoteByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateProposalVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateProposalVoteByUniqueInputArgs, 'where'>
  >;
  substrateProposalVotes?: Resolver<
    Array<ResolversTypes['SubstrateProposalVote']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateProposalVotesArgs, never>
  >;
  substrateProposalVotesConnection?: Resolver<
    ResolversTypes['SubstrateProposalVotesConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateProposalVotesConnectionArgs, 'orderBy'>
  >;
  substrateTechnicalCommitteeProposalById?: Resolver<
    Maybe<ResolversTypes['SubstrateTechnicalCommitteeProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTechnicalCommitteeProposalByIdArgs, 'id'>
  >;
  substrateTechnicalCommitteeProposalByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateTechnicalCommitteeProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTechnicalCommitteeProposalByUniqueInputArgs, 'where'>
  >;
  substrateTechnicalCommitteeProposals?: Resolver<
    Array<ResolversTypes['SubstrateTechnicalCommitteeProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTechnicalCommitteeProposalsArgs, never>
  >;
  substrateTechnicalCommitteeProposalsConnection?: Resolver<
    ResolversTypes['SubstrateTechnicalCommitteeProposalsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTechnicalCommitteeProposalsConnectionArgs, 'orderBy'>
  >;
  substrateTreasuryProposalById?: Resolver<
    Maybe<ResolversTypes['SubstrateTreasuryProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTreasuryProposalByIdArgs, 'id'>
  >;
  substrateTreasuryProposalByUniqueInput?: Resolver<
    Maybe<ResolversTypes['SubstrateTreasuryProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTreasuryProposalByUniqueInputArgs, 'where'>
  >;
  substrateTreasuryProposals?: Resolver<
    Array<ResolversTypes['SubstrateTreasuryProposal']>,
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTreasuryProposalsArgs, never>
  >;
  substrateTreasuryProposalsConnection?: Resolver<
    ResolversTypes['SubstrateTreasuryProposalsConnection'],
    ParentType,
    ContextType,
    RequireFields<QuerySubstrateTreasuryProposalsConnectionArgs, 'orderBy'>
  >;
};

export type SubstrateBountyProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateBountyProposal'] = ResolversParentTypes['SubstrateBountyProposal'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposalIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateBountyProposalEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateBountyProposalEdge'] = ResolversParentTypes['SubstrateBountyProposalEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateBountyProposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateBountyProposalsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateBountyProposalsConnection'] = ResolversParentTypes['SubstrateBountyProposalsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateBountyProposalEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateCouncilProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateCouncilProposal'] = ResolversParentTypes['SubstrateCouncilProposal'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  ayeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUpdate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  pallet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proposalHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposalId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  proposalIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votes?: Resolver<
    Array<ResolversTypes['SubstrateCouncilVote']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateCouncilProposalVotesArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateCouncilProposalEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateCouncilProposalEdge'] = ResolversParentTypes['SubstrateCouncilProposalEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateCouncilProposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateCouncilProposalsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateCouncilProposalsConnection'] = ResolversParentTypes['SubstrateCouncilProposalsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateCouncilProposalEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateCouncilVoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateCouncilVote'] = ResolversParentTypes['SubstrateCouncilVote'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  approve?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['SubstrateCouncilProposal'], ParentType, ContextType>;
  proposalIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateCouncilVoteEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateCouncilVoteEdge'] = ResolversParentTypes['SubstrateCouncilVoteEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateCouncilVote'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateCouncilVotesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateCouncilVotesConnection'] = ResolversParentTypes['SubstrateCouncilVotesConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateCouncilVoteEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyProposal'] = ResolversParentTypes['SubstrateDemocracyProposal'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  democracyReferenda?: Resolver<Maybe<ResolversTypes['SubstrateDemocracyReferenda']>, ParentType, ContextType>;
  depositAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposalHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposalIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seconds?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyProposalSecond']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateDemocracyProposalSecondsArgs, never>
  >;
  status?: Resolver<ResolversTypes['SubstrateDemocracyProposalStatus'], ParentType, ContextType>;
  tabledAtBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyProposalEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyProposalEdge'] = ResolversParentTypes['SubstrateDemocracyProposalEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateDemocracyProposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyProposalSecondResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyProposalSecond'] = ResolversParentTypes['SubstrateDemocracyProposalSecond'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['SubstrateDemocracyProposal'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  upperBound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyProposalSecondEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyProposalSecondEdge'] = ResolversParentTypes['SubstrateDemocracyProposalSecondEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateDemocracyProposalSecond'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyProposalSecondsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyProposalSecondsConnection'] = ResolversParentTypes['SubstrateDemocracyProposalSecondsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateDemocracyProposalSecondEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyProposalsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyProposalsConnection'] = ResolversParentTypes['SubstrateDemocracyProposalsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateDemocracyProposalEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyReferendaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyReferenda'] = ResolversParentTypes['SubstrateDemocracyReferenda'],
> = {
  aye?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  democracyProposal?: Resolver<Maybe<ResolversTypes['SubstrateDemocracyProposal']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SubstrateDemocracyReferendaStatus'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  voteThreshold?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyReferendaVote']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateDemocracyReferendaVotesArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyReferendaEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyReferendaEdge'] = ResolversParentTypes['SubstrateDemocracyReferendaEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateDemocracyReferenda'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyReferendaVoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyReferendaVote'] = ResolversParentTypes['SubstrateDemocracyReferendaVote'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  aye?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  democracyReferenda?: Resolver<ResolversTypes['SubstrateDemocracyReferenda'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyReferendaVoteEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyReferendaVoteEdge'] = ResolversParentTypes['SubstrateDemocracyReferendaVoteEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateDemocracyReferendaVote'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyReferendaVotesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyReferendaVotesConnection'] = ResolversParentTypes['SubstrateDemocracyReferendaVotesConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateDemocracyReferendaVoteEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateDemocracyReferendasConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateDemocracyReferendasConnection'] = ResolversParentTypes['SubstrateDemocracyReferendasConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateDemocracyReferendaEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateElectionVoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateElectionVote'] = ResolversParentTypes['SubstrateElectionVote'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  candidates?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateElectionVoteEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateElectionVoteEdge'] = ResolversParentTypes['SubstrateElectionVoteEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateElectionVote'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateElectionVotesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateElectionVotesConnection'] = ResolversParentTypes['SubstrateElectionVotesConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateElectionVoteEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateGovernanceAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateGovernanceAccount'] = ResolversParentTypes['SubstrateGovernanceAccount'],
> = {
  bountyProposals?: Resolver<
    Array<ResolversTypes['SubstrateBountyProposal']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountBountyProposalsArgs, never>
  >;
  councilProposals?: Resolver<
    Array<ResolversTypes['SubstrateCouncilProposal']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountCouncilProposalsArgs, never>
  >;
  councilVotes?: Resolver<
    Array<ResolversTypes['SubstrateCouncilVote']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountCouncilVotesArgs, never>
  >;
  democracyProposalSeconds?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyProposalSecond']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountDemocracyProposalSecondsArgs, never>
  >;
  democracyProposals?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyProposal']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountDemocracyProposalsArgs, never>
  >;
  democracyReferendaVotes?: Resolver<
    Array<ResolversTypes['SubstrateDemocracyReferendaVote']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountDemocracyReferendaVotesArgs, never>
  >;
  electionVotes?: Resolver<
    Array<ResolversTypes['SubstrateElectionVote']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountElectionVotesArgs, never>
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposalVotes?: Resolver<
    Array<ResolversTypes['SubstrateProposalVote']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountProposalVotesArgs, never>
  >;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  technicalCommitteeProposals?: Resolver<
    Array<ResolversTypes['SubstrateTechnicalCommitteeProposal']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountTechnicalCommitteeProposalsArgs, never>
  >;
  totalBountyProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCouncilProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDemocracyProposalSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDemocracyProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDemocracyReferendaVotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalElectionVotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalProposalSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalProposalVotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalTechnicalCommitteeProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalTreasurySpendProposals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  treasurySpendProposals?: Resolver<
    Array<ResolversTypes['SubstrateTreasuryProposal']>,
    ParentType,
    ContextType,
    RequireFields<SubstrateGovernanceAccountTreasurySpendProposalsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateGovernanceAccountEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateGovernanceAccountEdge'] = ResolversParentTypes['SubstrateGovernanceAccountEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateGovernanceAccountsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateGovernanceAccountsConnection'] = ResolversParentTypes['SubstrateGovernanceAccountsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateGovernanceAccountEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateProposalVoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateProposalVote'] = ResolversParentTypes['SubstrateProposalVote'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  refIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vote?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateProposalVoteEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateProposalVoteEdge'] = ResolversParentTypes['SubstrateProposalVoteEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateProposalVote'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateProposalVotesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateProposalVotesConnection'] = ResolversParentTypes['SubstrateProposalVotesConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateProposalVoteEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTechnicalCommitteeProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTechnicalCommitteeProposal'] = ResolversParentTypes['SubstrateTechnicalCommitteeProposal'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposalHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposalIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTechnicalCommitteeProposalEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTechnicalCommitteeProposalEdge'] = ResolversParentTypes['SubstrateTechnicalCommitteeProposalEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateTechnicalCommitteeProposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTechnicalCommitteeProposalsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTechnicalCommitteeProposalsConnection'] = ResolversParentTypes['SubstrateTechnicalCommitteeProposalsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateTechnicalCommitteeProposalEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTreasuryProposalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTreasuryProposal'] = ResolversParentTypes['SubstrateTreasuryProposal'],
> = {
  account?: Resolver<ResolversTypes['SubstrateGovernanceAccount'], ParentType, ContextType>;
  beneficiary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiaryAccount?: Resolver<Maybe<ResolversTypes['SubstrateGovernanceAccount']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['SubstrateNetwork'], ParentType, ContextType>;
  proposalIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTreasuryProposalEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTreasuryProposalEdge'] = ResolversParentTypes['SubstrateTreasuryProposalEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SubstrateTreasuryProposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstrateTreasuryProposalsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubstrateTreasuryProposalsConnection'] = ResolversParentTypes['SubstrateTreasuryProposalsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['SubstrateTreasuryProposalEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SubstrateBountyProposal?: SubstrateBountyProposalResolvers<ContextType>;
  SubstrateBountyProposalEdge?: SubstrateBountyProposalEdgeResolvers<ContextType>;
  SubstrateBountyProposalsConnection?: SubstrateBountyProposalsConnectionResolvers<ContextType>;
  SubstrateCouncilProposal?: SubstrateCouncilProposalResolvers<ContextType>;
  SubstrateCouncilProposalEdge?: SubstrateCouncilProposalEdgeResolvers<ContextType>;
  SubstrateCouncilProposalsConnection?: SubstrateCouncilProposalsConnectionResolvers<ContextType>;
  SubstrateCouncilVote?: SubstrateCouncilVoteResolvers<ContextType>;
  SubstrateCouncilVoteEdge?: SubstrateCouncilVoteEdgeResolvers<ContextType>;
  SubstrateCouncilVotesConnection?: SubstrateCouncilVotesConnectionResolvers<ContextType>;
  SubstrateDemocracyProposal?: SubstrateDemocracyProposalResolvers<ContextType>;
  SubstrateDemocracyProposalEdge?: SubstrateDemocracyProposalEdgeResolvers<ContextType>;
  SubstrateDemocracyProposalSecond?: SubstrateDemocracyProposalSecondResolvers<ContextType>;
  SubstrateDemocracyProposalSecondEdge?: SubstrateDemocracyProposalSecondEdgeResolvers<ContextType>;
  SubstrateDemocracyProposalSecondsConnection?: SubstrateDemocracyProposalSecondsConnectionResolvers<ContextType>;
  SubstrateDemocracyProposalsConnection?: SubstrateDemocracyProposalsConnectionResolvers<ContextType>;
  SubstrateDemocracyReferenda?: SubstrateDemocracyReferendaResolvers<ContextType>;
  SubstrateDemocracyReferendaEdge?: SubstrateDemocracyReferendaEdgeResolvers<ContextType>;
  SubstrateDemocracyReferendaVote?: SubstrateDemocracyReferendaVoteResolvers<ContextType>;
  SubstrateDemocracyReferendaVoteEdge?: SubstrateDemocracyReferendaVoteEdgeResolvers<ContextType>;
  SubstrateDemocracyReferendaVotesConnection?: SubstrateDemocracyReferendaVotesConnectionResolvers<ContextType>;
  SubstrateDemocracyReferendasConnection?: SubstrateDemocracyReferendasConnectionResolvers<ContextType>;
  SubstrateElectionVote?: SubstrateElectionVoteResolvers<ContextType>;
  SubstrateElectionVoteEdge?: SubstrateElectionVoteEdgeResolvers<ContextType>;
  SubstrateElectionVotesConnection?: SubstrateElectionVotesConnectionResolvers<ContextType>;
  SubstrateGovernanceAccount?: SubstrateGovernanceAccountResolvers<ContextType>;
  SubstrateGovernanceAccountEdge?: SubstrateGovernanceAccountEdgeResolvers<ContextType>;
  SubstrateGovernanceAccountsConnection?: SubstrateGovernanceAccountsConnectionResolvers<ContextType>;
  SubstrateProposalVote?: SubstrateProposalVoteResolvers<ContextType>;
  SubstrateProposalVoteEdge?: SubstrateProposalVoteEdgeResolvers<ContextType>;
  SubstrateProposalVotesConnection?: SubstrateProposalVotesConnectionResolvers<ContextType>;
  SubstrateTechnicalCommitteeProposal?: SubstrateTechnicalCommitteeProposalResolvers<ContextType>;
  SubstrateTechnicalCommitteeProposalEdge?: SubstrateTechnicalCommitteeProposalEdgeResolvers<ContextType>;
  SubstrateTechnicalCommitteeProposalsConnection?: SubstrateTechnicalCommitteeProposalsConnectionResolvers<ContextType>;
  SubstrateTreasuryProposal?: SubstrateTreasuryProposalResolvers<ContextType>;
  SubstrateTreasuryProposalEdge?: SubstrateTreasuryProposalEdgeResolvers<ContextType>;
  SubstrateTreasuryProposalsConnection?: SubstrateTreasuryProposalsConnectionResolvers<ContextType>;
};

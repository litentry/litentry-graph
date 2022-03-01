import {Resolvers} from '../generated/resolvers-types';
import {Context} from '../types';
import {Query} from './Query';

export const resolvers: Resolvers<Context> = {
  Query,
  CouncilMember: {
    account: Query.account,
  },
  CouncilCandidate: {
    account: Query.account,
  },
  Proposer: {
    account: Query.account,
  },
  Registrar: {
    account: Query.account,
  },
  ProposalSecond: {
    account: Query.account,
  },
  Depositor: {
    account: Query.account,
  },
  Contribution: {
    contribution: Query.crowdloanContribution,
  },
  Finder: {
    account: Query.account,
  },
  Who: {
    account: Query.account,
  },
  Tipper: {
    account: Query.account,
  },
  Curator: {
    account: Query.account,
  },
  Beneficiary: {
    account: Query.account,
  },
  SubAccount: {
    account: Query.account,
  },
};

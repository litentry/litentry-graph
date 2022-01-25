import { Resolvers } from '../generated/resolvers-types';
import { Query } from './Query';

export const resolvers: Resolvers = {
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
};

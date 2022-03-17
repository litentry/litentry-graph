import {Resolvers} from '../generated/resolvers-types';
import {Context} from '../types';
import {Query} from './Query';

export const resolvers: Resolvers<Context> = {
  Query,
  NestedAccount: {
    account: Query.account,
  },
  CouncilMember: {
    account: Query.account,
  },
  Registrar: {
    account: Query.account,
  },
  Contribution: {
    contribution: Query.crowdloanContribution,
  },
  Tipper: {
    account: Query.account,
  },
};

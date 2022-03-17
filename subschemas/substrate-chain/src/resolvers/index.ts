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
  Tipper: {
    account: Query.account,
  },
  Crowdloan: {
    contribution: Query.crowdloanContribution,
  },
};

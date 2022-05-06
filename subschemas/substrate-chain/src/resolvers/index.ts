import {Resolvers} from '../generated/resolvers-types';
import {Context} from '../types';
import {Query} from './Query';

export const resolvers: Resolvers<Context> = {
  Query,
  AccountInfo: {
    account: Query.account,
  },
  Registrar: {
    account: Query.account,
  },
  Crowdloan: {
    contribution: Query.crowdloanContribution,
  },
};

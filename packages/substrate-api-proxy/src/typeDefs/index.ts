import account from './account';
import balance from './balance';
import chainInfo from './chainInfo';
import council from './council';
import tips from './tips';

const base = /* GraphQL */ `
  type Query {
    _empty: String
  }
`;

export default [base, chainInfo, tips, council, account, balance];

import { account } from './account';
import balance from './balance';
import chainInfo from './chainInfo';
import { council } from './council';
import { tips, tip } from './tips';

export const Query = {
  balance,
  chainInfo,
  tip,
  tips,
  council,
  account,
};

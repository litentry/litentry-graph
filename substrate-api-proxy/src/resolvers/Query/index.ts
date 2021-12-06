import { account } from './account';
import balance from './balance';
import chainInfo from './chainInfo';
import { council } from './council';
import { tips, tip } from './tips';
import {bountiesSummary, bounties, bounty} from './bounties'
import { eventsResolver as events } from './events';

export const Query = {
  balance,
  chainInfo,
  tip,
  tips,
  council,
  account,
  bountiesSummary,
  bounties,
  bounty,
  events,
};

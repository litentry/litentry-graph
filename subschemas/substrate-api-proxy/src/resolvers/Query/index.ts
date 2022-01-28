import { account } from './account';
import balance from './balance';
import chainInfo from './chainInfo';
import { council } from './council';
import { tips, tip } from './tips';
import { bountiesSummary, bounties, bounty } from './bounties';
import { events } from './events';
import { democracySummary, democracyProposals, democracyReferendums } from './democracy';
import { treasurySummary, treasury } from './treasury';
import { councilMotions } from './councilMotions';
import { registrars } from './registrars';
import moduleElection from './moduleElection'

export const Query = {
  balance,
  chainInfo,
  tip,
  tips,
  council,
  councilMotions,
  account,
  bountiesSummary,
  bounties,
  bounty,
  events,
  democracySummary,
  democracyProposals,
  democracyReferendums,
  treasurySummary,
  treasury,
  registrars,
  moduleElection,
};

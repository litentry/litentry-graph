import {account} from './account';
import balance from './balance';
import chainInfo from './chainInfo';
import {council} from './council';
import {tips, tip} from './tips';
import {bountiesSummary, bounties, bounty} from './bounties';
import {events} from './events';
import {
  democracySummary,
  democracyProposals,
  democracyProposal,
  democracyReferendums,
  democracyReferendum,
} from './democracy';
import {treasurySummary, treasury} from './treasury';
import {councilMotions} from './councilMotions';
import {registrars} from './registrars';
import moduleElection from './moduleElection';
import {parachainsInfo} from './parachains';
import {crowdloanSummary, activeCrowdloans} from './crowdloan';

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
  democracyProposal,
  democracyReferendums,
  democracyReferendum,
  treasurySummary,
  treasury,
  registrars,
  moduleElection,
  parachainsInfo,
  crowdloanSummary,
  activeCrowdloans,
};

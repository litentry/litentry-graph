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
import {crowdloanSummary} from './crowdloan';
import {treasurySummary, treasury} from './treasury';
import {councilMotions} from './councilMotions';
import {registrars} from './registrars';
import moduleElection from './moduleElection';
import {parachainsInfo} from './parachains';
import {convictions} from './convictions';

export const Query = {
  account,
  balance,
  bountiesSummary,
  bounties,
  bounty,
  chainInfo,
  council,
  councilMotions,
  convictions,
  crowdloanSummary,
  democracySummary,
  democracyProposals,
  democracyProposal,
  democracyReferendums,
  democracyReferendum,
  events,
  moduleElection,
  parachainsInfo,
  registrars,
  tip,
  tips,
  treasurySummary,
  treasury,
};

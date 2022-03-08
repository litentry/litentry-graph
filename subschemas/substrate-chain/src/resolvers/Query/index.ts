import {account} from './account';
import {auctionsSummary} from './auctions';
import balance from './balance';
import {bountiesSummary, bounties, bounty} from './bounties';
import chainInfo from './chainInfo';
import {council} from './council';
import {councilVote} from './councilVote';
import {convictions} from './convictions';
import {crowdloanSummary, activeCrowdloans, endedCrowdloans, crowdloan} from './crowdloan';
import {councilMotions, councilMotionDetail} from './councilMotions';
import {crowdloanContribution} from './CrowdloanContribution';
import {
  democracySummary,
  democracyProposals,
  democracyProposal,
  democracyReferendums,
  democracyReferendum,
} from './democracy';
import {calendarEvents} from './events';
import moduleElection from './moduleElection';
import {parachainsInfo, parachains, parachain} from './parachains';
import {tips, tip} from './tips';
import {treasurySummary, treasury} from './treasury';
import {registrarsSummary} from './registrars';
import {parathreads} from './parathreads';

export const Query = {
  account,
  auctionsSummary,
  balance,
  bountiesSummary,
  bounties,
  bounty,
  chainInfo,
  council,
  councilMotions,
  councilMotionDetail,
  councilVote,
  convictions,
  crowdloanSummary,
  activeCrowdloans,
  endedCrowdloans,
  crowdloan,
  crowdloanContribution,
  democracySummary,
  democracyProposals,
  democracyProposal,
  democracyReferendums,
  democracyReferendum,
  calendarEvents,
  moduleElection,
  parachainsInfo,
  parachains,
  parachain,
  parathreads,
  registrarsSummary,
  tip,
  tips,
  treasurySummary,
  treasury,
};

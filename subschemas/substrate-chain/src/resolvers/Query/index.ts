import {account} from './account';
import {auctionsSummary} from './auctions';
import balance from './balance';
import {bountiesSummary, bounties, bounty} from './bounties';
import chainInfo from './chainInfo';
import {council} from './council';
import {convictions} from './convictions';
import {crowdloanSummary, activeCrowdloans, endedCrowdloans, crowdloan} from './crowdloan';
import {councilMotions} from './councilMotions';
import {crowdloanContribution} from './CrowdloanContribution';
import {
  democracySummary,
  democracyProposals,
  democracyProposal,
  democracyReferendums,
  democracyReferendum,
} from './democracy';
import {events} from './events';
import moduleElection from './moduleElection';
import {parachainsInfo, parachains} from './parachains';
import {tips, tip} from './tips';
import {treasurySummary, treasury} from './treasury';
import {registrarsSummary} from './registrars';

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
  events,
  moduleElection,
  parachainsInfo,
  parachains,
  registrarsSummary,
  tip,
  tips,
  treasurySummary,
  treasury,
};

import type { Context } from '../../types';
import { CouncilMotion } from '../../generated/resolvers-types';
import { getCallParams } from '../../utils/call';

export async function councilMotions(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<CouncilMotion[]> {
  const motions = await api.derive.council.proposals();

  return motions.map((motion) => {
    const proposal = {
      hash: String(motion.proposal.hash),
      ...getCallParams(motion.proposal),
    };

    return {
      hash: String(motion.hash),
      proposal,
      votes: motion.votes
        ? {
            index: motion.votes.index.toNumber(),
            threshold: motion.votes.threshold.toNumber(),
            ayes: motion.votes.ayes.map((a) => String(a)),
            nays: motion.votes.nays.map((n) => String(n)),
            end: String(motion.votes.end),
          }
        : undefined,
    };
  });
}

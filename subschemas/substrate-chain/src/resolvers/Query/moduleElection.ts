import type {Context} from '../../types';

export default async function moduleElection(_: Record<string, never>, __: Record<string, never>, {api}: Context) {
  const moduleElections = api.tx.phragmenElection
    ? 'phragmenElection'
    : api.tx.electionsPhragmen
    ? 'electionsPhragmen'
    : api.tx.elections
    ? 'elections'
    : null;

  return {
    module: moduleElections,
    hasElections: Boolean(moduleElections),
  };
}

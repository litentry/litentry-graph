import { ServerContext } from '../../types';

export const democracy = async (
  parent: { address?: string },
  args: { address?: string },
  context: ServerContext,
) => {
  const { api } = context;

  return 'democracy1';
};

import fetch from 'node-fetch';

export const UserBadgeQuery = async (
  parent: {},
  args: { username: string },
) => {
  const { username } = args;
  const url = `https://forum.phala.network/user-badges/${username}.json`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

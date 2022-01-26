import fetch from 'node-fetch';

export const Mee6PlayerQuery = async (
  parent: {},
  args: { username: string; guild_id: string },
) => {
  const { username, guild_id } = args;
  const url = `https://mee6.xyz/api/plugins/levels/leaderboard/${guild_id}`;

  const response = await fetch(url);
  const data = await response.json();
  for (const player of data.players) {
    if (player.username === username) {
      return player;
    }
  }
  return {};
};

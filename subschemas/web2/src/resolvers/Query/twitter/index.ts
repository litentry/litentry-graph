import config from '../../../config';
import { TwitterClient } from 'twitter-api-client';

const client = new TwitterClient({
  apiKey: <string>config.twitter.api_key,
  apiSecret: <string>config.twitter.api_secret,
  accessToken: <string>config.twitter.access_token,
  accessTokenSecret: <string>config.twitter.access_token_secret,
  disableCache: true,
  maxByteSize: 32000000,
  ttl: 360,
});

export const TwitterUserQuery = async (
  parent: {},
  args: { screen_name: string },
) => {
  const { screen_name } = args;

  const resp = await client.accountsAndUsers.usersLookup({
    screen_name,
    include_entities: true,
  });
  return resp[0];
};

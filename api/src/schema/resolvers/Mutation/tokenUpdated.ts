import { Token } from 'nft-models';
import pubsub from '../pubsub';

export default async function tokenUpdated(
  _: unknown,
  { token }: { token: Token }
): Promise<Token> {
  pubsub.publish('TOKEN_UPDATED', {
    token,
  });
  return token;
}

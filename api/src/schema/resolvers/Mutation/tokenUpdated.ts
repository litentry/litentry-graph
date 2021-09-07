import pubsub from '../pubsub';

export default async function tokenUpdated(
  _: unknown,
  args: {
    _id: string;
    tokenId: number;
    classId: number;
    type: string;
    owner: string;
  }
): Promise<void> {
  pubsub.publish('TOKEN_UPDATED', {
    tokenUpdated: args,
  });
}

import pubsub from '../pubsub';

export default async function tokenChanged(
  _: unknown,
  args: {
    _id: string;
    tokenId: number;
    classId: number;
    type: string;
    owner: string;
  }
): Promise<void> {
  pubsub.publish('TOKEN_CHANGED', {
    tokenChanged: args,
  });
}

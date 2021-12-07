import BlockEventModel from './models/BlockEventModel';

type Event<T> = {
  _id: string;
  data: string[];
  method: T;
  blockNumber: number;
};

export default async function getEvents<T>(
  eventNames: T[]
): Promise<Event<T>[]> {
  const limit = 2000;
  let skip = 0;
  let hasResults = true;
  const events: Event<T>[] = [];

  while (hasResults) {
    const eventBatch = await BlockEventModel.find(
      {
        section: 'identity',
      },
      'data method blockNumber'
    )
      .where('method')
      .in(eventNames)
      .limit(limit)
      .skip(skip);

    if (!eventBatch.length) {
      hasResults = false;
    } else {
      skip += limit;

      events.push(
        ...eventBatch.map((event) => event.toObject() as unknown as Event<T>)
      );
    }
  }

  return events.sort(({ blockNumber: a }, { blockNumber: b }) => a - b);
}

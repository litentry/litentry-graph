import BlockEventModel from './models/BlockEventModel';

export default async function getUniqueAccounts(): Promise<string[]> {
  const limit = 2000;
  let skip = 0;
  let hasResults = true;
  const accounts: string[] = [];

  while (hasResults) {
    const setIdentityEvents = await BlockEventModel.find(
      {
        section: 'identity',
        method: 'IdentitySet',
      },
      'data'
    )
      .limit(limit)
      .skip(skip);

    if (!setIdentityEvents.length) {
      hasResults = false;
    } else {
      skip += limit;

      accounts.push(
        ...setIdentityEvents.map((event) => event.data[0] as string)
      );
    }
  }

  // filter duplicates
  return [...new Set(accounts)];
}

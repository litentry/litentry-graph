import type { ApiPromise } from '@polkadot/api';

export interface Resolvers {
  [pallet: string]: {
    [event: string]: {
      eventName: string;
      handler: (
        api: ApiPromise,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any
      ) => Promise<void>;
    };
  };
}

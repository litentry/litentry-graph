import type { ApiPromise } from '@polkadot/api';

/** @public */
export interface Handlers {
  [pallet: string]: {
    [event: string]: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any,
      api: ApiPromise
    ) => Promise<void>;
  };
}

import type { ApiPromise } from '@polkadot/api';
/** @public */
export interface Handlers {
    [pallet: string]: {
        [event: string]: (data: any, api: ApiPromise) => Promise<void>;
    };
}
//# sourceMappingURL=types.d.ts.map
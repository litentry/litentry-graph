import type { ApiPromise } from '@polkadot/api';
import type { Handlers } from './types';
export declare function polkadotChainListener(api: ApiPromise, handlers: Handlers, getLatestIndexedBlock: () => Promise<number>, saveBlock: (_id: number) => Promise<void>): Promise<void>;
//# sourceMappingURL=polkadot-chain-listener.d.ts.map
/** @public */
export type BlockEvent = {
  _id: string;
  blockNumber: number;
  phase: string;
  phaseIndex: number;
  section: string;
  method: string;
  data: unknown[];
  topics: unknown[];
};

/** @public */
export type BlockExtrinsic = {
  _id: string;
  blockNumber: number;
  index: number;
  section: string;
  method: string;
  args: string[];
  tip: number;
  isSigned: boolean;
  signer?: string;
  nonce?: number;
  signature?: string;
  immortalEra?: string;
  mortalEra?: {
    period: number;
    phase: number;
  };
};

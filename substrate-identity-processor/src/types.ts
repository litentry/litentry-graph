/** @public */
export type BlockEvent = {
  _id: string;
  blockNumber: number;
  phase: string;
  phaseIndex?: number;
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

/** @public */
export type AccountIdentity = {
  _id: string;
  judgements: {
    registrar: number;
    judgement: string;
  }[];
  deposit: number;
  display: string;
  legal?: string;
  web?: string;
  riot?: string;
  email?: string;
  image?: string;
  twitter?: string;
  pgpFingerprint?: string;
  additional: string[];
};

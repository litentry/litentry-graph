import { ApiPromise } from '@polkadot/api';
import { BlockEvent, BlockExtrinsic } from './types';

export default async function parseBlock(
  blockNumber: number,
  api: ApiPromise,
  callback: (
    extrinsics: BlockExtrinsic[],
    events: BlockEvent[]
  ) => Promise<void>
): Promise<void> {
  const extrinsicModels: BlockExtrinsic[] = [];
  const eventModels: BlockEvent[] = [];

  const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
  const signedBlock = await api.rpc.chain.getBlock(blockHash);

  signedBlock.block.extrinsics.forEach((ex, index) => {
    extrinsicModels.push({
      // id prevents duplicates
      _id: `${blockNumber}:${index}`,
      blockNumber,
      index,
      section: ex.method.section.toString(),
      method: ex.method.method.toString(),
      args: ex.method.args.map((a) => a.toString()),
      isSigned: ex.isSigned,
      signer: ex.isSigned ? ex.signer.toString() : undefined,
      signature: ex.isSigned ? ex.signature.toString() : undefined,
      nonce: ex.isSigned ? ex.nonce.toNumber() : undefined,
      tip: ex.tip.toNumber(),
      immortalEra: ex.era.isImmortalEra
        ? ex.era.asImmortalEra.toString()
        : undefined,
      mortalEra: ex.era.isMortalEra
        ? {
            period: ex.era.asMortalEra.period.toNumber(),
            phase: ex.era.asMortalEra.phase.toNumber(),
          }
        : undefined,
    });
  });

  const allRecords = await (await api.at(blockHash)).query.system.events();

  eventModels.push(
    ...allRecords.map((record, index) => {
      const phase = record.phase.type;
      const phaseIndex = record.phase.isNone
        ? undefined
        : parseInt(record.phase.value.toString());
      const section = record.event.section.toString();
      const method = record.event.method.toString();

      return {
        // id prevents duplicates
        _id: `${blockNumber}:${index}`,
        blockNumber,
        phase,
        phaseIndex,
        section,
        method,
        data: record.event.data.toJSON() as unknown[],
        topics: record.topics.map((item) => item.toString()),
      };
    })
  );

  callback(extrinsicModels, eventModels);
}

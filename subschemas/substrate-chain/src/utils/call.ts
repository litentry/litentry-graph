import { ApiPromise } from '@polkadot/api';
import type { Compact } from '@polkadot/types';
import type { FunctionMetadataLatest, Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import { isAscii, isHex, isU8a, u8aToHex, u8aToString } from '@polkadot/util';
import { formatBalance } from '../services/substrateChainService';

export function getCallParams(call: Proposal) {
  const { method, section } = call?.registry.findMetaCall(call.callIndex) ?? {};
  const meta = formatCallMeta(call.registry.findMetaCall(call.callIndex).meta);

  return {
    method,
    section,
    meta,
    args: call.meta.args.map((a, index) => {
      let subCalls: any[] = [];

      let value: unknown = call.args?.[index];

      if (value) {
        if (Array.isArray(value) && a.type.toString() === 'Vec<Call>') {
          subCalls = value.map(getCallParams);
          value = 'SubCalls';
        } else if (a.type.toString() === 'Bytes') {
          value =
            isU8a(value) && isAscii(value)
              ? u8aToString(value)
              : isHex(value)
              ? value
              : u8aToHex(value as Uint8Array, 256);
        }
      }

      return {
        name: a.name.toString(),
        type: a.type.toString(),
        value: String(value),
        subCalls,
      };
    }),
  };
}

const METHOD_TREA = ['approveProposal', 'rejectProposal'];

export async function getMotionProposalTreasuryInfo(proposal: Proposal, api: ApiPromise) {
  const { method, section } = proposal.registry.findMetaCall(proposal.callIndex) ?? {};
  const isTreasury = section === 'treasury' && METHOD_TREA.includes(method);
  if (isTreasury) {
    const proposalId = (proposal.args[0] as Compact<ProposalIndex>).unwrap();
    const treasuryProposal = (await api.query.treasury.proposals(proposalId)).unwrap();

    return {
      beneficiary: { address: treasuryProposal.beneficiary.toString() },
      proposer: { address: treasuryProposal.proposer.toString() },
      payout: formatBalance(api, treasuryProposal.value),
      bond: formatBalance(api, treasuryProposal.bond),
    };
  }

  return {};
}

export function formatCallMeta(meta?: FunctionMetadataLatest): string {
  if (!meta || !meta.docs.length) {
    return '';
  }

  const strings = meta.docs.map((doc) => doc.toString().trim());
  const firstEmpty = strings.findIndex((doc) => !doc.length);
  const combined = (firstEmpty === -1 ? strings : strings.slice(0, firstEmpty))
    .join(' ')
    .replace(/#(<weight>| <weight>).*<\/weight>/, '');
  const parts = splitParts(combined.replace(/\\/g, '').replace(/`/g, ''));

  return parts.join(' ');
}

function splitParts(value: string): string[] {
  return ['[', ']'].reduce((result: string[], sep) => splitSingle(result, sep), [value]);
}

function splitSingle(value: string[], sep: string): string[] {
  return value.reduce((result: string[], _value: string): string[] => {
    return _value.split(sep).reduce((_result: string[], __value: string) => _result.concat(__value), result);
  }, []);
}

import Web3 from 'web3';
import {AbiItem} from 'web3-utils';
import abi from './uniswap-abi.json';
import BigNumber from 'bignumber.js';

export async function liquidityProvidedByAccount(
  parent: unknown,
  {address, contract: contractAddress}: {address: string; contract: string},
  {web3}: {web3: Web3},
) {
  try {
    const contract = new web3.eth.Contract(abi as unknown as AbiItem, contractAddress);

    const decimals = await contract.methods.decimals().call();
    const balance = await contract.methods.balanceOf(address).call();
    const totalSupplyRaw = await contract.methods.totalSupply().call();

    const totalSupply = toNiceNumber(totalSupplyRaw, decimals);
    const liquidityProvided = toNiceNumber(balance, decimals);
    const percentageOfPool = asPercentage(liquidityProvided, totalSupply);

    return {
      contract: contractAddress,
      address,
      totalSupply,
      liquidityProvided,
      percentageOfPool,
    };
  } catch ({message}) {
    throw new Error(message as string);
  }
}

const toNiceNumber = (expanded: number | string, decimals: number) => {
  return new BigNumber(expanded).shiftedBy(-decimals).toNumber();
};
const asPercentage = (portion: number, whole: number) => {
  return new BigNumber(portion).dividedBy(whole).multipliedBy(100).toFixed(2);
};

export default {
  Query: {
    liquidityProvidedByAccount,
  },
};

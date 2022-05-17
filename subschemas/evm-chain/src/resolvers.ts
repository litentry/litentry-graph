import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import abiPancakeswap from './pancakeswap-abi.json';
import abiUniswap from './uniswap-abi.json';
import BigNumber from 'bignumber.js';

enum Platform {
  uniswap = 'uniswap',
  pancakeswap = 'pancakeswap',
}

export async function liquidityProvidedByAccount(
  parent: unknown,
  { platform, address, contract: contractAddress }: { platform: Platform; address: string; contract: string },
  { web3, web3BSC }: { web3: Web3; web3BSC: Web3 },
) {
  try {
    let contract: Contract;
    if (platform === Platform.uniswap) {
      contract = new web3.eth.Contract(abiUniswap as unknown as AbiItem, contractAddress);
    } else if (platform === Platform.pancakeswap) {
      contract = new web3BSC.eth.Contract(abiPancakeswap as unknown as AbiItem, contractAddress);
    } else {
      throw new Error('Platform not supported');
    }

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
  } catch ({ message }) {
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

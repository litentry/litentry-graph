import axios from 'axios';

export async function getMetadata(cid: string): Promise<{
  [key: string]: unknown;
}> {
  try {
    const { data } = await axios.get(
      `https://ipfs.fleek.co/ipfs/${cid.toString().replace('ipfs://', '')}`
    );

    return data;
  } catch (e) {
    return {};
  }
}

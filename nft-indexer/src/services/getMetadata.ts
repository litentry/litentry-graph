import axios from 'axios';

export async function getMetadata<T>(cid: string): Promise<T> {
  try {
    const { data } = await axios.get(
      `https://ipfs.fleek.co/ipfs/${cid.toString().replace('ipfs://', '')}`
    );

    return data;
  } catch (e) {
    return {};
  }
}

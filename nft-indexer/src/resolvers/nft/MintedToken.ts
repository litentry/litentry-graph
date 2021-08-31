import { saveEvent } from '../../repositories/events';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MintedToken
  [from, to, class_id, start_token_id, quantity]: [
    string,
    string,
    number,
    number,
    number
  ]
): Promise<void> {
  await saveEvent({
    name: 'MintedToken',
    data: [from, to, class_id, start_token_id, quantity],
  });
}
/*
SIMPLE 4
TOKEN 0
OWNER 46eAnLMETBDqiXozKQkjDX1ZRK841LJwzUy1UyqFPgfjGpqA
MINTER 4AwUTvxKFzWRxqH2eK5wjt6USqtZD5cFnFeYdLK4M98CrnfP
[
    '4AwUTvxKFzWRxqH2eK5wjt6USqtZD5cFnFeYdLK4M98CrnfP',
    '46eAnLMETBDqiXozKQkjDX1ZRK841LJwzUy1UyqFPgfjGpqA',
    4,
    0,
    1
  ]


4AwUTvxKFzWRxqH2eK5wjt6USqtZD5cFnFeYdLK4M98CrnfP,46eAnLMETBDqiXozKQkjDX1ZRK841LJwzUy1UyqFPgfjGpqA,4BCh5fGornubJSotBzw9fJakxmdedQN6JJc5RsY4hsixpYQh,49dXob6fj4uh9SKNm4yCuxfnrvcmArxkoUTkNWQPdtoj3Xvn

CLAIM
"4AwUTvxKFzWRxqH2eK5wjt6USqtZD5cFnFeYdLK4M98CrnfP" claimer
28 - class ID
0 - token ID
  */

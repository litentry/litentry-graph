import { Account } from '../types/interface';
import { queryPoapGraphQL, sortPoapData, tokensByAddress } from './query';
import { request } from 'graphql-request';

jest.mock('graphql-request');

describe('POAP GraphQL', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('queryPoapGraphQL', () => {
    it('should throw error if query returs error array', async () => {
      const address = '0x000001f568875f378bf6d170b790967fe429c81a';
      const endpoint = ['https://api.thegraph.com/subgraphs/name/poap-xyz/poap'];

      (request as jest.Mock).mockResolvedValueOnce({
        data: {
          errors: [
            {
              message: 'some error',
            },
          ],
        },
      });

      try {
        await queryPoapGraphQL(address, endpoint);
      } catch (err) {
        expect(err).toEqual(new Error('some error'));
      }
    });

    it('should return a single array with data from multiple endpoints', async () => {
      const address = '0x000001f568875f378bf6d170b790967fe429c81a';
      const endpoints = [
        'https://api.thegraph.com/subgraphs/name/poap-xyz/poap',
        'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai',
        'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-sokol',
      ];

      (request as jest.Mock).mockResolvedValueOnce({
        account: {
          id: address,
          tokensOwned: '2',
          tokens: [
            {
              id: '1677705',
              event: {
                id: '9016',
              },
              created: '1632964873',
            },
            {
              id: '1668075',
              event: {
                id: '8975',
              },
              created: '1632938735',
            },
          ],
        },
      });

      (request as jest.Mock).mockResolvedValueOnce({
        account: {
          id: address,
          tokensOwned: '1',
          tokens: [
            {
              id: '705819',
              event: {
                id: '5146',
              },
              created: '1628167308',
            },
          ],
        },
      });

      (request as jest.Mock).mockResolvedValueOnce({
        account: null,
      });

      expect(await queryPoapGraphQL(address, endpoints)).toEqual([
        {
          id: '0x000001f568875f378bf6d170b790967fe429c81a',
          tokensOwned: '2',
          tokens: [
            {
              id: '1677705',
              event: {
                id: '9016',
              },
              created: '1632964873',
            },
            {
              id: '1668075',
              event: {
                id: '8975',
              },
              created: '1632938735',
            },
          ],
        },
        {
          id: '0x000001f568875f378bf6d170b790967fe429c81a',
          tokensOwned: '1',
          tokens: [
            {
              id: '705819',
              event: {
                id: '5146',
              },
              created: '1628167308',
            },
          ],
        },
        {},
      ]);
    });
  });

  describe('sortPoapData', () => {
    it('should return a sorted object', () => {
      const data = [
        {
          id: '0x000001f568875f378bf6d170b790967fe429c81a',
          tokensOwned: '2',
          tokens: [
            {
              id: '1677705',
              event: {
                id: '9016',
              },
              created: '1632964873',
            },
            {
              id: '1668075',
              event: {
                id: '8975',
              },
              created: '1632938735',
            },
          ],
        },
        {
          id: '0x000001f568875f378bf6d170b790967fe429c81a',
          tokensOwned: '1',
          tokens: [
            {
              id: '705819',
              event: {
                id: '5146',
              },
              created: '1628167308',
            },
          ],
        },
        {},
      ] as Account[];

      expect(sortPoapData(data, '0x000001f568875f378bf6d170b790967fe429c81a')).toEqual({
        id: '0x000001f568875f378bf6d170b790967fe429c81a',
        tokensOwned: '3',
        tokens: [
          { id: '1677705', event: { id: '9016' }, created: '1632964873' },
          { id: '1668075', event: { id: '8975' }, created: '1632938735' },
          { id: '705819', event: { id: '5146' }, created: '1628167308' },
        ],
      });
    });
  });

  describe('tokensByAddress', () => {
    it('should return data', async () => {
      const address = '0x000001f568875f378bf6d170b790967fe429c81a';

      (request as jest.Mock).mockResolvedValueOnce({
        account: {
          id: address,
          tokensOwned: '2',
          tokens: [
            {
              id: '1677705',
              event: {
                id: '9016',
              },
              created: '1632964873',
            },
            {
              id: '1668075',
              event: {
                id: '8975',
              },
              created: '1632938735',
            },
          ],
        },
      });

      (request as jest.Mock).mockResolvedValueOnce({
        account: {
          id: address,
          tokensOwned: '1',
          tokens: [
            {
              id: '705819',
              event: {
                id: '5146',
              },
              created: '1628167308',
            },
          ],
        },
      });

      (request as jest.Mock).mockResolvedValueOnce({
        account: null,
      });

      expect(await tokensByAddress({}, { address })).toEqual({
        id: '0x000001f568875f378bf6d170b790967fe429c81a',
        tokensOwned: '3',
        tokens: [
          {
            id: '1677705',
            event: {
              id: '9016',
            },
            created: '1632964873',
          },
          {
            id: '1668075',
            event: {
              id: '8975',
            },
            created: '1632938735',
          },
          {
            id: '705819',
            event: {
              id: '5146',
            },
            created: '1628167308',
          },
        ],
      });
    });

    it('should return data with no tokens', async () => {
      const address = '0x000001f568875f378bf6d170b790967fe429c81a';
      (request as jest.Mock).mockResolvedValueOnce({
        account: null,
      });

      (request as jest.Mock).mockResolvedValueOnce({
        account: null,
      });

      (request as jest.Mock).mockResolvedValueOnce({
        account: null,
      });

      expect(await tokensByAddress({}, { address })).toEqual({
        id: '0x000001f568875f378bf6d170b790967fe429c81a',
        tokensOwned: 0,
        tokens: [],
      });
    });

    it('should throw an error', async () => {
      const address = '0x000001f568875f378bf6d170b790967fe429c81a';

      (request as jest.Mock).mockRejectedValueOnce(null);

      try {
        await tokensByAddress({}, { address });
      } catch (err) {
        expect(err).toEqual(new Error('Error calling https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai'));
      }
    });

    it('should return error messages', async () => {
      const address = '0x000001f568875f378bf6d170b790967fe429c81a';

      (request as jest.Mock).mockResolvedValue({
        data: {
          errors: [
            {
              message: 'some error',
            },
          ],
        },
      });

      try {
        await tokensByAddress({}, { address });
      } catch (err) {
        expect(err).toEqual(new Error('some error'));
      }
    });
  });
});

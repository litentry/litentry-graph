/* eslint-disable @typescript-eslint/no-unused-vars */
import {queryGalaxyGraphQL, dataByAddress} from './query';
import {request} from 'graphql-request';
import {Chain} from '../types/interface';

jest.mock('graphql-request');

describe('Galaxy GraphQL', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('queryGalaxyGraphQL', () => {
    it('should throw an error if request fails', async () => {
      const address = '0x111AE6Fe1ad173def8dC36e9dff5144c713F2880';

      (request as jest.Mock).mockResolvedValue(null);
      try {
        await queryGalaxyGraphQL(address, Chain.ETHEREUM);
      } catch (err) {
        expect(err).toEqual(new Error('Error calling https://graphigo.prd.galaxy.eco/query'));
      }
    });

    it('should return error messages from response', async () => {
      const address = '0x111AE6Fe1ad173def8dC36e9dff5144c713F2880';

      (request as jest.Mock).mockResolvedValue({
        errors: [
          {
            message: 'something went wrong',
          },
        ],
      });

      try {
        await queryGalaxyGraphQL(address, Chain.ETHEREUM);
      } catch (err) {
        expect(err).toEqual(new Error('something went wrong'));
      }
    });
  });
  describe('dataByAddress', () => {
    it('should return data', async () => {
      const address = '0x111AE6Fe1ad173def8dC36e9dff5144c713F2880';

      const response = {
        addressInfo: {
          id: 'vygsfZAoYqt7R4a7vxhgvc',
          address: '0xba375954a95685a1af259c838846b84e560983ec',
          username: '',
          hasEmail: false,
          avatar: 'https://source.boringavatars.com/marble/120/0xba375954a95685a1af259c838846b84e560983ec',
          recentParticipation: {
            totalCount: 0,
            list: [],
          },
          eligibleCredentials: {
            totalCount: 0,
            list: [],
          },
          nfts: {
            totalCount: 0,
            list: [],
          },
        },
      };

      (request as jest.Mock).mockResolvedValue(response);

      expect(await dataByAddress({}, {address, chain: Chain.ETHEREUM})).toEqual({
        id: 'vygsfZAoYqt7R4a7vxhgvc',
        address: '0xba375954a95685a1af259c838846b84e560983ec',
        username: '',
        hasEmail: false,
        avatar: 'https://source.boringavatars.com/marble/120/0xba375954a95685a1af259c838846b84e560983ec',
        recentParticipation: {
          totalCount: 0,
          list: [],
        },
        eligibleCredentials: {
          totalCount: 0,
          list: [],
        },
        nfts: {
          totalCount: 0,
          list: [],
        },
      });
    });

    it('should throw an error', async () => {
      const address = '0x111AE6Fe1ad173def8dC36e9dff5144c713F2880';

      (request as jest.Mock).mockResolvedValue(null);

      try {
        await dataByAddress({}, {address, chain: Chain.ETHEREUM});
      } catch (err) {
        expect(err).toEqual(new Error('Error calling https://graphigo.prd.galaxy.eco/query'));
      }
    });
  });
});

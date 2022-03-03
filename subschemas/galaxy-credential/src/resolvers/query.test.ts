/* eslint-disable @typescript-eslint/no-unused-vars */
import {queryGalaxyGraphQL} from './query';
import {request} from 'graphql-request';

jest.mock('graphql-request');

describe('Galaxy GraphQL', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('dataByAddress', () => {
    it('should return error if request fails', async () => {
      const address = '0x111AE6Fe1ad173def8dC36e9dff5144c713F2880';

      (request as jest.Mock).mockResolvedValue({
        errors: [
          {
            message: 'something went wrong',
          },
        ],
      });

      try {
        await queryGalaxyGraphQL(address);
      } catch (err) {
        expect(err).toEqual(new Error('something went wrong'));
      }
    });
  });
});

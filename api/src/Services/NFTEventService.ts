import {
  NFTBurnedTokenData,
  NFTBurnedTokenWithRemarkData,
  NFTClaimedTokenData,
  NFTCreatedClassData,
  NFTDestroyedClassData,
  NFTEvent,
  NFTEventData,
  NFTMergedTokenData,
  NFTMintedTokenData,
  NFTTransferredTokenData,
  Response,
} from '../@types';
import { getAllEvents } from '../Model/NFTEvent';

export const getNFTEvents = async () => {
  let events: NFTEvent[] = [];
  const data = await getAllEvents();
  data.forEach((e) => {
    let eventData: NFTEventData = null;
    if (Array.isArray(e.data)) {
      eventData = mapEventData(e.name, e.data);
    }
    let event = {
      data: eventData,
      id: e.id,
      name: e.name,
      createdAt: e.createdAt.toISOString(),
      updatedAt: e.updatedAt.toISOString(),
    };
    events.push(event);
  });

  const response: Response = {
    data: events,
    error: null,
  };
  return response;
};

const mapEventData = (name: string, data: any[]): NFTEventData => {
  let eventData = null;

  switch (name) {
    case 'BurnedToken':
      let burnedTokenEvent: NFTBurnedTokenData = {
        owner: data[0],
        classId: data[1],
        tokenId: data[2],
      };
      eventData = burnedTokenEvent;
      break;

    case 'BurnedTokenWithRemark':
      let burnedTokenWithRemark: NFTBurnedTokenWithRemarkData = {
        owner: data[0],
        classId: data[1],
        tokenId: data[2],
        remarkHash: data[3],
      };
      eventData = burnedTokenWithRemark;
      break;

    case 'ClaimedToken':
      let claimedToken: NFTClaimedTokenData = {
        claimer: data[0],
        classId: data[1],
      };
      eventData = claimedToken;
      break;

    case 'CreatedClass':
      let createdClass: NFTCreatedClassData = {
        owner: data[0],
        classId: data[1],
      };
      eventData = createdClass;
      break;

    case 'DestroyedClass':
      let destroyedClass: NFTDestroyedClassData = {
        owner: data[0],
        classId: data[1],
      };
      eventData = destroyedClass;
      break;

    case 'MergedToken':
      let mergedToken: NFTMergedTokenData = {
        owner: data[0],
        classId: data[1],
      };
      eventData = mergedToken;
      break;

    case 'MintedToken':
      let mintedToken: NFTMintedTokenData = {
        from: data[0],
        to: data[1],
        classId: data[2],
        quantity: data[3],
      };
      eventData = mintedToken;
      break;

    case 'TransferredToken':
      let transferredToken: NFTTransferredTokenData = {
        from: data[0],
        to: data[1],
        classId: data[2],
        tokenId: data[3],
      };
      eventData = transferredToken;
      break;
    default:
      break;
  }
  return eventData;
};

import { IdentityEvent, EventHandler } from '../types';
import IdentitySet from './IdentitySet';

const handlers: {
  [key in IdentityEvent]: EventHandler;
} = {
  IdentitySet,
};

export default handlers;

import { gql } from 'apollo-server-core';
import classes from './classes';
import events from './events';
import tokens from './tokens';

const base = gql`
  enum ClassType {
    Simple
    Merge
    Claim
  }

  enum ClassProperties {
    None
    Transferable
    Burnable
    Both
  }
`;

export default [base, classes, events, tokens];

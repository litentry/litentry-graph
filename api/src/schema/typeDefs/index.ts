import { gql } from 'apollo-server-core';
import classes from './classes';
import events from './events';
import tokens from './tokens';

const base = gql`
  scalar EventData
  scalar Date
  scalar JSON
  scalar JSONObject

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

  type Query {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`;

export default [base, classes, events, tokens];

import { gql } from 'apollo-server-core';
import classes from './classes';
import events from './events';
import tokens from './tokens';

const base = gql`
  scalar EventData
  scalar Date

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`;

export default [base, classes, events, tokens];

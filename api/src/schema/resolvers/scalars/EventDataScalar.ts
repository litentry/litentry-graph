import { GraphQLScalarType, Kind } from 'graphql';

const EventScalar = new GraphQLScalarType({
  name: 'EventData',
  description: 'Event Data',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.OBJECT) {
      return ast.fields;
    }
    return null; // Invalid hard-coded value (not an object)
  },
});

export default EventScalar;

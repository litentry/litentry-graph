import { GraphQLScalarType, Kind } from 'graphql';

const EventScalar = new GraphQLScalarType({
  name: 'EventData',
  description: 'Event Data',
  serialize(value) {
    console.log(`HIT 1`);
    return value;
  },
  parseValue(value) {
    console.log(`HIT 2`);
    return value;
  },
  parseLiteral(ast) {
    console.log(`HIT  3`);

    if (ast.kind === Kind.OBJECT) {
      return ast.fields;
    }
    return null; // Invalid hard-coded value (not an object)
  },
});

export default EventScalar;

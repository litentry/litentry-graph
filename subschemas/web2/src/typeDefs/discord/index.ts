export default /* GraphQL */ `
  type Mee6Player {
    avatar: String
    detailed_xp: [Int]
    discriminator: String
    guild_id: String
    id: String
    level: String
    message_count: Int
    username: String
    xp: String
  }

  type Query {
    Mee6PlayerQuery(guild_id: String!, username: String!): Mee6Player
  }
`;

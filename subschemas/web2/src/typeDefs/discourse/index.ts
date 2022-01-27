export default `
type _Badge {
  id: Int
  name: String
  description: String
  grant_count: Int
  allow_title: Boolean
  multiple_grant: Boolean
  icon: String
  image_url: String
  listable: Boolean
  enabled: Boolean
  badge_grouping_id: Int
  system: Boolean
  long_description: String
  slug: String
  manually_grantable: Boolean
  query: String
  trigger: Int,
  target_posts: Boolean
  auto_revoke: Boolean
  show_posts: Boolean
  i18n_name: String
  badge_type_id: Int
}

type _BadgeType {
  id: Int
  name: String
  sort_order: Int
}

type _BadgeGrouping {
  id: Int
  name: String
  description: String
  position: Int
  system: Boolean
}

type Badge {
  badges: [_Badge]
  badge_types: [_BadgeType]
  badge_grouping: [_BadgeGrouping]
}

type Query {
  DiscourseUserBadgeQuery(username: String!): Badge
}
`;

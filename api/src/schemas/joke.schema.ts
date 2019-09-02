import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Joke {
    categories: [String]
    created_at: String
    icon_url: String
    id: String
    updated_at: String
    url: String
    value: String!
  }
  type Query {
    jokeCategories: [String]
    jokeByCategory(category:String!): Joke
  }
`;
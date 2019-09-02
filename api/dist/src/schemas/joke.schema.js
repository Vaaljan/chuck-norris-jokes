"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
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
//# sourceMappingURL=joke.schema.js.map
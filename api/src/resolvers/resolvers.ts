import { IResolvers } from "graphql-tools";

export const resolvers :  IResolvers | Array<IResolvers> = {
    Query: {
        jokeCategories: (root, args, { dataSources }) => {
        return dataSources.jokeAPI.getJokeCategories();
        
      },
      jokeByCategory: (root, { category }, { dataSources }) => {
        return dataSources.jokeAPI.getJokeByCategory(category);
      },
    }
  }
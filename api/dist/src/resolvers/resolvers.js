"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        jokeCategories: (root, args, { dataSources }) => {
            return dataSources.jokeAPI.getJokeCategories();
        },
        jokeByCategory: (root, { category }, { dataSources }) => {
            return dataSources.jokeAPI.getJokeByCategory(category);
        },
    }
};
//# sourceMappingURL=resolvers.js.map
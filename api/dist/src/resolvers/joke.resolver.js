"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        jokeCategories: (root, args, { dataSources }) => {
            return dataSources.norrisAPI.getJokeCategories();
        },
        jokeByCategory: (root, category, { dataSources }) => {
            console.log("category", category);
            console.log(dataSources);
            return dataSources.norrisAPI.getJokeByCategory(category);
        },
    }
};
//# sourceMappingURL=joke.resolver.js.map
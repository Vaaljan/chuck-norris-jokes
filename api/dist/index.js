"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joke_schema_1 = require("./src/schemas/joke.schema");
const resolvers_1 = require("./src/resolvers/resolvers");
const joke_datasource_1 = require("./src/datasources/joke.datasource");
const apollo_server_1 = require("apollo-server");
const server = new apollo_server_1.ApolloServer({
    typeDefs: joke_schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    dataSources: () => {
        return {
            jokeAPI: new joke_datasource_1.JokeDataSource()
        };
    }
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map
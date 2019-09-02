import { typeDefs } from './src/schemas/joke.schema';
import { resolvers } from './src/resolvers/resolvers';
import { JokeDataSource } from './src/datasources/joke.datasource';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            jokeAPI: new JokeDataSource()
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})



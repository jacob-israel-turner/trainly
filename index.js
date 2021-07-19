import { ApolloServer } from 'apollo-server'
import typeDefs from './graphql/schema.js'
import resolvers from './graphql/resolvers/index.js'
import { API_PORT } from './utils/constants.js'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: API_PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

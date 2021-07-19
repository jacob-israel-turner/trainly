import { gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

export default typeDefs

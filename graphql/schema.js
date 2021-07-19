import { gql } from 'apollo-server'

const typeDefs = gql`
  type Station {
    author: String!
    name: String!
    lines: [Line!]!
  }

  type Line {
    name: String!
    station: Station!
  }

  type Query {
    stations: [Station!]!
  }
`

export default typeDefs

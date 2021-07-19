import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Time

  type Station {
    author: String!
    id: ID!
    name: String!
    lines: [Line!]!
  }

  type Line {
    name: String!
    id: ID!
    station: Station!
    schedule: [Time!]!
  }

  type Query {
    stations: [Station!]!
  }
`

export default typeDefs

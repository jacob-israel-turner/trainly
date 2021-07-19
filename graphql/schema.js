import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Time

  type Line {
    name: String!
    id: ID!
    station: Station!
    stops: [Stop!]!
  }

  type Station {
    author: String!
    id: ID!
    name: String!
    lines: [Line!]!
  }

  type Stop {
    station: Station!
    time: Time!
  }

  type Query {
    stations: [Station!]!
  }
`

export default typeDefs

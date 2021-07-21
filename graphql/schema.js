import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Time

  input StationInput {
    id: ID!
  }

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
    station(input: StationInput!): Station!
    stations: [Station!]!
  }
`

export default typeDefs

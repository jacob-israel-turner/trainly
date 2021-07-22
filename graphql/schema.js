import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Time

  input AddLineInput {
    stationId: ID!
    name: String!
  }

  input SetLineStopsInput {
    lineId: ID!
    stops: [StopInput!]!
  }

  input StationInput {
    id: ID!
  }

  input StopInput {
    station: ID!
    time: Time!
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

  type Mutation {
    addLine(input: AddLineInput!): Line!
    setLineStops(input: SetLineStopsInput!): Line!
  }
`

export default typeDefs

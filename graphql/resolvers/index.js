import * as Mutation from './mutations/index.js'
import * as Query from './queries/index.js'
import * as scalars from './scalars/index.js'
import * as types from './types/index.js'

export default {
  ...types,
  ...scalars,
  Mutation,
  Query
}

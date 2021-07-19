import { isNil, isString } from 'lodash-es'
import { GraphQLScalarType } from 'graphql'
import { UserInputError } from 'apollo-server'

export default new GraphQLScalarType({
  name: 'Time',
  description: 'Time custom scalar type',
  parseValue (value) {
    if (isNil(value)) return null
    validateTime(value)
    return value
  },
  serialize (value) {
    if (isNil(value)) return null
    validateTime(value)
    return value
  }
})

function validateTime (value) {
  if (!isString(value) || value.length !== 5) throw new UserInputError('Invalid time')

  const split = value.split(':')

  if (split.length !== 2) throw new UserInputError('Invalid time')

  const hours = parseInt(split[0], 10)
  const minutes = parseInt(split[1], 10)

  if (isNaN(hours) || isNaN(minutes) || hours >= 24 || hours < 0 || minutes >= 60 || minutes < 0) throw new UserInputError('Invalid time')
}

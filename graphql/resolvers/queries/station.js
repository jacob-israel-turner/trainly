import { isNil } from 'lodash-es'
import { UserInputError } from 'apollo-server'
import { stations } from '../../../data/index.js'

export default async function (_, { input: { id } }) {
  const station = stations.fetch(id)
  if (isNil(station)) throw new UserInputError(`Station with id ${id} does not exist`) // TODO: Ensure this throws a 400 error
  return {
    id,
    ...station
  }
}

import { UserInputError } from 'apollo-server'
import { isNil } from 'lodash-es'
import { lines, stations, stops as stopsData } from '../../../data/index.js'

export default async function setLineStops (_, { input: { lineId, stops } }) {
  const line = lines.fetch(lineId)
  if (isNil(line)) throw new UserInputError('Invalid line provided')
  stops.forEach(({ station }) => {
    if (isNil(stations.fetch(station))) throw new UserInputError(`Station with id ${station} not found`)
  })

  stopsData.set(lineId, stops)

  return {
    id: lineId,
    ...line
  }
}

import { UserInputError } from 'apollo-server'
import { isNil } from 'lodash-es'
import { lines, stations } from '../../../data/index.js'

export default async function addLine (_, { input: { stationId, name } }) {
  if (isNil(stations.fetch(stationId))) throw new UserInputError('Invalid station provided')
  const lineId = `${stationId}-${name}`.toUpperCase()
  if (!isNil(lines.fetch(lineId))) throw new UserInputError('Line already exists')
  const lineObject = { name, station: stationId }
  lines.set(lineId, lineObject)

  return {
    id: lineId,
    ...lineObject
  }
}

import { isNil } from 'lodash-es'
import { UserInputError } from 'apollo-server'
import { lines, stations, stops } from '../../../data/index.js'

export default async function nextOverlap (_, { input: { after, stationId } }) {
  const station = stations.fetch(stationId)
  if (isNil(station)) throw new UserInputError(`Station with id ${stationId} does not exist`)
  const stopKeys = stops.keys()
  const schedules = stopKeys.map(key => ({ lineId: key, stops: stops.fetch(key) }))
  const times = new Set()
  const timesHash = {}
  schedules.forEach(({ lineId, stops }) => {
    stops.forEach(({ station, time }) => {
      if (station !== stationId) return
      times.add(time)
      if (isNil(timesHash[time])) timesHash[time] = [lineId]
      else timesHash[time].push(lineId)
    })
  })
  const timesArray = Array.from(times.values())
  const sortedTimes = timesArray.sort((a, b) => {
    if (timeIsGreater(a, b)) return 1
    else return -1
  })
  const firstOverlapAfter = sortedTimes.find(time => {
    if (timeIsGreater(time, after) && timesHash[time].length >= 2) return true
    return false
  })
  if (firstOverlapAfter) {
    const lineKeys = timesHash[firstOverlapAfter]
    return {
      station: { id: stationId, ...station },
      time: firstOverlapAfter,
      lines: lineKeys.map(lineKey => ({ id: lineKey, ...lines.fetch(lineKey) }))
    }
  } else {
    const overlapNextDay = sortedTimes.find(time => {
      if (timesHash[time].length >= 2) return true
      return false
    })
    const lineKeys = timesHash[overlapNextDay]
    return {
      station: { id: stationId, ...station },
      time: overlapNextDay,
      lines: lineKeys.map(lineKey => ({ id: lineKey, ...lines.fetch(lineKey) }))
    }
  }
}

function timeIsGreater (a, b) {
  const hourA = Number(a.split(':')[0])
  const hourB = Number(b.split(':')[0])
  const minuteA = Number(a.split(':')[1])
  const minuteB = Number(b.split(':')[1])
  if (hourB < hourA) {
    return true
  } else if (hourB === hourA && minuteB < minuteA) {
    return true
  } else {
    return false
  }
}

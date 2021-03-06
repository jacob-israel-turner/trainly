import { stops, stations } from '../../../data/index.js'

export default {
  station: ({ station }) => {
    return {
      id: station,
      ...stations.fetch(station)
    }
  },
  stops: ({ id }) => {
    return stops.fetch(id)
  }
}

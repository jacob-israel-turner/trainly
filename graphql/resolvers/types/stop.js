import { stations } from '../../../data/index.js'

export default {
  station: ({ station }) => {
    return {
      id: station,
      ...stations.fetch(station)
    }
  }
}

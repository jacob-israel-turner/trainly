import { stations } from '../../../data/index.js'

export default {
  station: ({ station }) => stations.fetch(station)
}

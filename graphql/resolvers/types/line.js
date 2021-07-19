import { stations } from '../../../data/index.js'

export default {
  id: ({ _key }) => _key,
  station: ({ station }) => stations.fetch(station)
}

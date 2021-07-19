import { lines } from '../../../data/index.js'

export default {
  lines ({ _key }) {
    return lines.keys()
      .map(key => lines.fetch(key))
      .filter(line => line.station === _key)
  }
}

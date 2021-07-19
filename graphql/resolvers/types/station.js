import { lines } from '../../../data/index.js'

export default {
  id: ({ _key }) => _key,
  lines: ({ _key }) => {
    return lines.keys()
      .map(key => lines.fetch(key))
      .filter(line => line.station === _key)
  }
}

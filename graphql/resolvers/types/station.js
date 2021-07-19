import { lines } from '../../../data/index.js'

export default {
  lines: ({ id }) => {
    return lines.keys()
      .map(key => {
        return {
          id: key,
          ...lines.fetch(key)
        }
      })
      .filter(line => line.station === id)
  }
}

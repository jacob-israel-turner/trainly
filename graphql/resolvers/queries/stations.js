import { stations } from '../../../data/index.js'

export default async function () {
  const keys = stations.keys()
  return keys.map(key => {
    return {
      id: key,
      ...stations.fetch(key)
    }
  })
}

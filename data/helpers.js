export class DataStore {
  constructor (initialData) {
    this.store = initialData
  }

  set (key, val) {
    this.store[key] = val
  }

  fetch (key) {
    return this.store[key]
  }

  keys () {
    return Object.keys(this.store)
  }
}

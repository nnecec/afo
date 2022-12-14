import { Storage } from '../types'

export const createCacheStorage = (): Storage => {
  let state: Record<string, string> = {}
  return {
    set: (key: string, value: string) => {
      state[key] = value
    },
    get: (key: string) => {
      return state[key] ?? null
    },
    remove: (key: string) => {
      delete state[key]
    },
    clear: () => {
      state = {}
    }
  }
}

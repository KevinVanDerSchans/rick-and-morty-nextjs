export type Episode = Readonly<{
  id: number
  name: string
  airDate: string
  code: string
  characterIds: number[]
  url?: string
  created?: string
}>

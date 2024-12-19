/* eslint-disable no-unused-vars */
import { Episode } from '@entities/Episode'

export class EpisodesRepository implements Repository<Episode> {
  constructor(public url: string) {
    this.url += 'episode'
  }

  async getAll(): Promise<Episode[]> {
    try {
      const response = await fetch(this.url)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      const answer = await response.json()
      return answer.results as Episode[]
    } catch (error) {
      throw error
    }
  }

  async getById(id: number): Promise<Episode> {
    try {
      const response = await fetch(`${this.url}/${id}`)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      return (await response.json()) as Episode
    } catch (error) {
      throw error
    }
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(): Promise<X[]>
  getById?(id: X['id']): Promise<X>
}

/* eslint-disable no-unused-vars */
import { Character } from '@entities/Character'

export class CharactersRepository implements Repository<Character> {
  constructor(public url: string) {
    this.url += 'character'
  }

  async getAll(ids: number[]): Promise<Character[]> {
    try {
      const response = await fetch(`${this.url}/${ids.join(',')}`)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      return (await response.json()) as Character[]
    } catch (error) {
      throw error
    }
  }

  async getById(id: number): Promise<Character> {
    try {
      const response = await fetch(`${this.url}/${id}`)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      return (await response.json()) as Character
    } catch (error) {
      throw error
    }
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(ids?: X['id'][]): Promise<X[]>
  getById?(id: X['id']): Promise<X>
}

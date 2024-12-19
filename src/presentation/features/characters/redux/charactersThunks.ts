/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Character } from '@entities/Character'
import { CharactersRepository } from '@characters/repositories/CharactersRepository'
import { errorService } from '@errors/services/ErrorService'
import CharactersErrors from '@characters/errors/CharactersError'

export const getCharactersById = createAsyncThunk<Character[], { ids: number[]; repo: CharactersRepository }>(
  'characters/loadByIds',
  async ({ ids, repo }) => {
    try {
      const character = await repo.getAll(ids)
      return character
    } catch (error) {
      errorService.handleError(new CharactersErrors.CharracterErrorFetchingById())
      throw error
    }
  }
)

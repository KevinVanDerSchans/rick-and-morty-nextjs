/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Episode } from '@entities/Episode'
import { EpisodesRepository } from '@episodes/repositories/EpisodesRepository'
import { errorService } from '@errors/services/ErrorService'
import EpisodesErrors from '@episodes/errors/EpisodesError'

export const getEpisodesAsync = createAsyncThunk<Episode[], { repo: EpisodesRepository }>(
  'episodes/load',
  async ({ repo }) => {
    try {
      const episodes = await repo.getAll()
      return episodes
    } catch (error) {
      errorService.handleError(new EpisodesErrors.EpisodesErrorFetching())
      throw error
    }
  }
)

export const getEpisodeByIdAsync = createAsyncThunk<Episode, { id: number; repo: EpisodesRepository }>(
  'episodes/loadById',
  async ({ id, repo }) => {
    try {
      const episode = await repo.getById(id)
      return episode
    } catch (error) {
      errorService.handleError(new EpisodesErrors.EpisodeErrorFetchingById())
      throw error
    }
  }
)

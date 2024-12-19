import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store/store'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { EpisodesRepository } from '@episodes/repositories/EpisodesRepository'
import { getEpisodesAsync } from '@episodes/redux/episodesThunks'
import { errorService } from '@errors/services/ErrorService'
import EpisodesErrors from '@episodes/errors/EpisodesError'

export function useFetchEpisodes() {
  const repo = useMemo(() => new EpisodesRepository(NEXT_PUBLIC_API_URL), [])

  const { episodes, status, fetchErrorMessage } = useSelector((state: RootState) => state.episodes)
  const dispatch = useDispatch<AppDispatch>()

  const loadEpisodes = useCallback(async () => {
    try {
      await dispatch(getEpisodesAsync({ repo }))
    } catch (error) {
      errorService.handleError(new EpisodesErrors.EpisodesErrorFetching())
      throw error
    }
  }, [repo, dispatch])

  return {
    loadEpisodes,
    episodes,
    status,
    fetchErrorMessage,
  }
}

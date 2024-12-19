import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store/store'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { EpisodesRepository } from '@episodes/repositories/EpisodesRepository'
import { getEpisodeByIdAsync } from '@episodes/redux/episodesThunks'
import { errorService } from '@errors/services/ErrorService'
import EpisodesErrors from '@episodes/errors/EpisodesError'

export function useFetchEpisode() {
  const repo = useMemo(() => new EpisodesRepository(NEXT_PUBLIC_API_URL), [])

  const { selectedEpisode, status, fetchErrorMessage } = useSelector((state: RootState) => state.episodes)
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const { id } = router.query

  const loadEpisode = useCallback(
    async (id: number) => {
      try {
        await dispatch(getEpisodeByIdAsync({ id, repo }))
      } catch (error) {
        errorService.handleError(new EpisodesErrors.EpisodeErrorFetchingById())
        throw error
      }
    },
    [repo, dispatch]
  )

  useEffect(() => {
    if (id) {
      loadEpisode(Number(id))
    }
  }, [id, loadEpisode])

  return {
    loadEpisode,
    selectedEpisode,
    status,
    fetchErrorMessage,
  }
}

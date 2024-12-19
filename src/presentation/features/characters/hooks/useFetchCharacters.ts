import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store/store'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { CharactersRepository } from '@characters/repositories/CharactersRepository'
import { getCharactersById } from '@characters/redux/charactersThunks'
import { errorService } from '@errors/services/ErrorService'
import CharactersErrors from '@characters/errors/CharactersError'

export function useFetchCharacters(ids: number[]) {
  const repo = useMemo(() => new CharactersRepository(NEXT_PUBLIC_API_URL), [])

  const { characters, status, fetchErrorMessage } = useSelector((state: RootState) => state.characters)
  const dispatch = useDispatch<AppDispatch>()

  const loadedIdsRef = useRef<Set<number>>(new Set())

  const loadCharacters = useCallback(async () => {
    try {
      const idsToLoad = ids.filter(id => !loadedIdsRef.current.has(id))
      if (idsToLoad.length > 0) {
        await dispatch(getCharactersById({ ids: idsToLoad, repo }))
        idsToLoad.forEach(id => loadedIdsRef.current.add(id))
      }
    } catch (error) {
      errorService.handleError(new CharactersErrors.CharracterErrorFetchingById())
      throw error
    }
  }, [repo, dispatch, ids])

  useEffect(() => {
    if (status === 'idle' && ids.length > 0) {
      loadCharacters()
    }
  }, [status, loadCharacters, ids])

  return {
    characters,
    status,
    fetchErrorMessage,
    loadCharacters,
  }
}

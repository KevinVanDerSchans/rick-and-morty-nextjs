import { useCallback, useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useFetchCharacters } from '@characters/hooks/useFetchCharacters'

type UseCharactersCarouselProps = {
  characterUrls: string[]
}

export function useCharactersCarousel({ characterUrls }: UseCharactersCarouselProps) {
  const characterIds = useMemo(() => characterUrls.map(url => parseInt(url.split('/').pop()!, 10)), [characterUrls])
  const { characters, loadCharacters, status, fetchErrorMessage } = useFetchCharacters(characterIds)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  useEffect(() => {
    loadCharacters()
  }, [characterIds, loadCharacters])

  return {
    emblaRef,
    characters,
    status,
    fetchErrorMessage,
    scrollNext,
    scrollPrev,
    loadCharacters,
  }
}

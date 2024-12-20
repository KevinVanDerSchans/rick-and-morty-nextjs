import Image from 'next/image'
import { Character } from '@entities/Character'
import { useCharactersCarousel } from '@characters/hooks/useCharactersCarousel'
import { CharactersCarouselButton } from '@characters/components/CharactersCarouselButton'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from '@errors/components/ErrorFeedback'

type Props = {
  characterUrls: string[]
}

export function CharactersCarousel({ characterUrls }: Props) {
  const { emblaRef, characters, status, fetchErrorMessage, scrollNext, scrollPrev, loadCharacters } =
    useCharactersCarousel({ characterUrls })

  if (status === RequestStatus.Error) {
    return (
      <ErrorFeedback
        message={fetchErrorMessage || 'Failed to load characters.'}
        onRetry={loadCharacters}
      />
    )
  }

  if (status === RequestStatus.Idle) {
    return (
      <div
        aria-busy='true'
        className='flex w-full items-center justify-center min-h-screen'
      >
        <MainSpinner />
      </div>
    )
  }

  if (status === RequestStatus.Loaded) {
    return (
      <div className='relative'>
        <div
          className='overflow-hidden'
          ref={emblaRef}
        >
          <div className='flex space-x-4'>
            {characters.map((character: Character) => (
              <div
                key={character.id}
                className='flex-shrink-0 w-40 text-center'
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  className='rounded-xl shadow-md'
                  width={160}
                  height={160}
                />
                <p className='mt-2 text-sm font-semibold text-gray-800'>{character.name}</p>
              </div>
            ))}
          </div>
        </div>

        <CharactersCarouselButton
          onClick={scrollPrev}
          direction='left'
          ariaLabel='left'
        />
        <CharactersCarouselButton
          onClick={scrollNext}
          direction='right'
          ariaLabel='right'
        />
      </div>
    )
  }

  return null
}

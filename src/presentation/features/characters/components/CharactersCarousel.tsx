import { useEffect } from 'react'
import Image from 'next/image'
import { Character } from '@entities/Character'
import { useFetchCharacters } from '@characters/hooks/useFetchCharacters'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from '@errors/components/ErrorFeedback'

type Props = {
  characterUrls: string[]
}

export function CharactersCarousel({ characterUrls }: Props) {
  const characterIds = characterUrls.map(url => parseInt(url.split('/').pop()!, 10))
  const { characters, status, fetchErrorMessage, loadCharacters } = useFetchCharacters(characterIds)

  useEffect(() => {
    loadCharacters()
  }, [characterIds, loadCharacters])

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
      <div className='flex space-x-4 overflow-x-scroll py-12'>
        {characters.map((character: Character) => (
          <div
            key={character.id}
            className='flex-shrink-0 w-32 text-center'
          >
            <Image
              src={character.image}
              alt={character.name}
              className='rounded-lg shadow-md'
              width={128}
              height={128}
            />
            <p className='mt-2 text-sm font-semibold text-gray-800'>{character.name}</p>
          </div>
        ))}
      </div>
    )
  }

  return null
}

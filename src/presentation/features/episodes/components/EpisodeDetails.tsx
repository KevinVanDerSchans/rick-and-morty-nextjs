import { useFetchEpisode } from '@episodes/hooks/useFetchEpisode'
import EpisodeDetailsContent from './EpisodeDetailsContent'
import { CharactersCarousel } from '@characters/components/CharactersCarousel'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from '@errors/components/ErrorFeedback'

export default function EpisodeDetails() {
  const { selectedEpisode, status } = useFetchEpisode()

  if (status === RequestStatus.Error || !selectedEpisode) {
    return (
      <div
        aria-live='polite'
        className='flex w-full items-center justify-center min-h-screen'
      >
        <ErrorFeedback message='This Episode is not available at this time.' />
      </div>
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

  if (status === RequestStatus.Loaded && selectedEpisode) {
    return (
      <main className='flex flex-col items-center min-h-screen bg-gradient-to-br from-greenPortal to-white p-6 py-20'>
        <section className='max-w-5xl w-full p-4 rounded-xl'>
          <EpisodeDetailsContent episode={selectedEpisode} />
        </section>

        <section className='max-w-5xl w-full'>
          <CharactersCarousel characterUrls={selectedEpisode.characters} />
        </section>
      </main>
    )
  }

  return null
}

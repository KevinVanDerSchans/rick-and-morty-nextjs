import { useFetchEpisode } from '@episodes/hooks/useFetchEpisode'
import EpisodeDetailsContent from './EpisodeDetailsContent'
import { CharactersCarousel } from '@characters/components/CharactersCarousel'
import CommentEpisodeForm from '@comments/components/CommentEpisodeForm/CommentEpisodeForm'
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
      <main className='flex flex-col items-center min-h-screen bg-gradient-to-br from-greenPortal to-white p-6 py-20 space-y-16'>
        <section className='max-w-5xl w-full rounded-xl shadow-lg bg-white'>
          <EpisodeDetailsContent episode={selectedEpisode} />
        </section>

        <section className='max-w-5xl w-full p-6 rounded-xl shadow-lg bg-white'>
          <h3 className='text-2xl font-semibold text-black mb-4 text-center'>Characters</h3>
          <CharactersCarousel characterUrls={selectedEpisode.characters} />
        </section>

        <section className='max-w-5xl w-full p-6 rounded-xl shadow-lg bg-white'>
          <h3 className='text-2xl font-semibold text-black mb-4 text-center'>Share Your Thoughts</h3>
          <CommentEpisodeForm />
        </section>
      </main>
    )
  }

  return null
}

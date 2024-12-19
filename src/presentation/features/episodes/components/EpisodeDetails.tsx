import { useFetchEpisode } from '@episodes/hooks/useFetchEpisode'
import EpisodeDetailsContent from './EpisodeDetailsContent'
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
      <main className='flex-grow'>
        <EpisodeDetailsContent episode={selectedEpisode} />
      </main>
    )
  }

  return null
}
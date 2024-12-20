import { useFetchEpisodes } from '@episodes/hooks/useFetchEpisodes'
import { EpisodeCard } from '@episodes/components/EpisodeCard'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from '@errors/components/ErrorFeedback'

export default function EpisodesList() {
  const { loadEpisodes, episodes, status } = useFetchEpisodes()

  return (
    <>
      {status === RequestStatus.Error && (
        <div
          aria-live='polite'
          className='flex w-full items-center justify-center min-h-screen'
        >
          <ErrorFeedback
            message='Episodes are not available at this time.'
            onRetry={loadEpisodes}
          />
        </div>
      )}

      {status === RequestStatus.Idle && (
        <div
          aria-busy='true'
          className='flex w-full items-center justify-center min-h-screen'
        >
          <MainSpinner />
        </div>
      )}

      {status === RequestStatus.Loaded && episodes.length > 0 && (
        <section className='flex-grow py-20'>
          <ul
            role='list'
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 list-none px-12 py-12 pb-16 justify-center items-center'
          >
            {episodes.map(item => (
              <EpisodeCard
                key={item.id}
                item={item}
              />
            ))}
          </ul>
        </section>
      )}

      {status === RequestStatus.Loaded && episodes.length === 0 && (
        <p className='text-center text-xl mt-10'>There are no episodes available. Please try again later.</p>
      )}
    </>
  )
}

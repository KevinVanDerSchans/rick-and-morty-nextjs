import Seo from '@pages/Seo'
import EpisodeDetails from '@episodes/components/EpisodeDetails'

export default function EpisodeDetailsPage() {
  return (
    <>
      <Seo
        title='Rick & Morty - Episode details'
        description='Discover in-depth details about this episode, including air date, unique episode codes and the characters that brought it to life.'
      />

      <main className='episode-detail-page flex-1 items-center'>
        <EpisodeDetails />
      </main>
    </>
  )
}

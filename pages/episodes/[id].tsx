import Seo from '@pages/Seo'
import EpisodeDetails from '@episodes/components/EpisodeDetails'

export default function EpisodeDetailPage() {
  return (
    <>
      <Seo
        title='Rick & Morty - Episode details'
        description='Review and check the details of your favorite chapters'
      />

      <main className='episode-detail-page flex items-center bg-gray-100'>
        <EpisodeDetails />
      </main>
    </>
  )
}

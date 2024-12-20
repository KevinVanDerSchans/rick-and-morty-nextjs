import Seo from '@pages/Seo'
import EpisodesList from '@episodes/components/EpisodesList'

export default function HomePage() {
  return (
    <>
      <Seo
        title='Rick & Morty App'
        description='Explore all episodes of Rick & Morty, browse detailed information and dive into the multiverse adventures of your favorite characters.'
      />

      <main className='flex items-center bg-gray-100'>
        <EpisodesList />
      </main>
    </>
  )
}

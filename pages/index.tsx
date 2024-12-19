import Seo from './Seo'
import EpisodesList from '@episodes/components/EpisodesList'

export default function HomePage() {
  return (
    <>
      <Seo
        title='Rick & Morty App'
        description='Review and check the details of your favorite chapters'
      />

      <main className='flex items-center bg-gray-100'>
        <EpisodesList />
      </main>
    </>
  )
}

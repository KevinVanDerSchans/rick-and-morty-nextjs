import { Episode } from '@entities/Episode'

type PropsType = {
  episode: Episode
}

export function EpisodeDetailsContent({ episode }: PropsType) {
  const { name, episode: code, air_date } = episode

  return (
    <main className='min-h-screen p-6 py-20 bg-gradient-to-br from-greenPortal to-white shadow-lg'>
      <h1 className='text-2xl font-extrabold mb-6 text-black border-b border-greenPortal pb-2'>{name.toUpperCase()}</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <p className='text-gray-800 text-lg'>
          <span className='font-semibold text-black'>Episode:</span> {code}
        </p>

        <p className='text-gray-800 text-lg'>
          <span className='font-semibold text-black'>Air Date:</span> {air_date}
        </p>
      </div>

      <div className='mt-8'>
        <h2 className='text-xl font-bold text-black mb-4'>CHARACTERS</h2>
      </div>
    </main>
  )
}

export default EpisodeDetailsContent

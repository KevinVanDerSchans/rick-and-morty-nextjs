import { Episode } from '@entities/Episode'

type PropsType = {
  episode: Episode
}

export function EpisodeDetailsContent({ episode }: PropsType) {
  const { name, episode: code, air_date } = episode

  return (
    <main className='flex-1'>
      <h1 className='text-2xl font-extrabold mb-6 text-black border-b border-greenPortal pb-2'>{name.toUpperCase()}</h1>

      <div className='gap-6'>
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

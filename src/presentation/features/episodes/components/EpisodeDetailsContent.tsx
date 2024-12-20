import { Episode } from '@entities/Episode'

type PropsType = {
  episode: Episode
}

export function EpisodeDetailsContent({ episode }: PropsType) {
  const { name, episode: code, air_date } = episode

  return (
    <main className='flex flex-col items-center bg-gradient-to-r from-green-100 via-white to-green-50 p-6 md:p-8 rounded-lg shadow-md'>
      <h1 className='text-2xl md:text-4xl font-bold text-greenPortal mb-4 md:mb-6 text-center tracking-wide drop-shadow-sm'>
        {name.toUpperCase()}
      </h1>

      <div className='w-full flex flex-col md:flex-row justify-center text-center gap-y-4 md:gap-y-0 md:gap-x-8 text-lg text-gray-800'>
        <p className='flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2'>
          <span className='font-semibold bg-green-200 text-greenPortal px-2 py-1 rounded-full shadow-sm'>Episode:</span>
          <span>{code}</span>
        </p>
        <p className='flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2'>
          <span className='font-semibold bg-green-200 text-greenPortal px-2 py-1 rounded-full shadow-sm'>
            Air Date:
          </span>
          <span>{air_date}</span>
        </p>
      </div>

      <div className='mt-8 md:mt-10 w-full'>
        <div className='border-b-2 border-greenPortal'></div>
      </div>
    </main>
  )
}

export default EpisodeDetailsContent

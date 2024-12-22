import Image from 'next/image'
import SVGS from '@constants/svgs'
import { useRouter } from 'next/router'
import { Episode } from '@entities/Episode'

type PropsType = {
  item: Episode
}

export function EpisodeCard({ item }: PropsType) {
  const router = useRouter()
  const { id, name, episode, air_date } = item

  const handleNavigateToEpisodeDetails = () => {
    router.push(`episodes/${id}`)
  }

  return (
    <li
      onClick={handleNavigateToEpisodeDetails}
      data-testid='episode-card'
      aria-labelledby={`episode-title-${item.id}`}
      className='relative p-6 bg-gradient-to-b from-rickAndMortyLogo via-green-300 to-greenLightPortal border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col items-center group'
    >
      <div className='w-20 h-20 bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full flex items-center justify-center mb-4 shadow-md'>
        <Image
          src={SVGS.EpisodeAvatar}
          alt='Episode avatar'
          className='h-16 w-auto'
          priority
        />
      </div>

      <div className='w-full text-center text-black'>
        <h3 className='text-lg group-hover:text-gray-600 font-extrabold transition-colors duration-300'>
          {name.toUpperCase()}
        </h3>
        <p className='text-sm font-bold mt-2 group-hover:text-gray-600 transition-colors duration-300'>{episode}</p>
        <p className='text-sm mt-1 group-hover:text-gray-600 transition-colors duration-300'>{air_date}</p>
      </div>

      <div className='mt-4 w-full h-1 bg-emerald-500 rounded-full group-hover:bg-lime-400 transition-colors duration-300'></div>
    </li>
  )
}

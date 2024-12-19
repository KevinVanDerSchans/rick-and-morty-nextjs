import Image from 'next/image'
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
      className='relative p-6 min-h-[20rem] bg-gradient-to-b from-greenPortal via-green-300 to-greenLightPortal hover:from-greenLightPortal hover:via-green-200 hover:to-greenPortal rounded-xl flex flex-col items-center hover:shadow-lg hover:shadow-greenPortal primary-hover-card-transition'
    >
      <div>
        <Image
          src='/svgs/rick-and-morty-shadows.svg'
          alt='Episode avatar'
          width={80}
          height={80}
        />
      </div>

      <div className='w-full flex-col justify-center text-center border-b border-green-500 flex items-center relative mt-6'>
        <span className='text-lg text-center text-black line-clamp-3 font-bold'>{episode.toUpperCase()}</span>
        <p className='text-sm leading-5 line-clamp-4 my-4 text-black'>({air_date})</p>
      </div>

      <div className='flex-col h-12 mt-4 flex justify-center items-center'></div>

      <p className='text-lg text-center leading-5 line-clamp-4 text-black font-semibold'>{name.toUpperCase()}</p>

      <div className='w-10 bg-green-400 h-[1px] my-4'></div>
    </li>
  )
}

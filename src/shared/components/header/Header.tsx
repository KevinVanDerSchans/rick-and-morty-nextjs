import Link from 'next/link'
import Image from 'next/image'

import SVGS from '@constants/svgs'
import MainNavigation from '@sharedComponents/navigation/MainNavigation'

const Header = () => {
  return (
    <header className='bg-black fixed z-10 flex items-center w-full h-16 p-1 px-4 md:px-8 m-0'>
      <div className='flex justify-between w-full'>
        <Link
          href='/'
          aria-label='Home'
          className='flex items-center'
        >
          <figure className='flex items-center primary-hover-color-transition gap-x-4 hover:brightness-75'>
            <Image
              src={SVGS.LOGO}
              width={150}
              height={150}
              priority
              alt='Rick & Morty logo'
            />
          </figure>
        </Link>
      </div>

      <nav
        className='flex gap-x-6'
        aria-label='Main navigation'
      >
        <MainNavigation />
      </nav>
    </header>
  )
}

export default Header

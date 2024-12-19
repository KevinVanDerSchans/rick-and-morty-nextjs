import Image from 'next/image'

type Props = {
  onClick: () => void
  direction: 'left' | 'right'
  ariaLabel: 'left' | 'right'
}

export function CharactersCarouselButton({ onClick, direction }: Props) {
  const buttonImage = direction === 'left' ? '/svgs/left-arrow.svg' : '/svgs/right-arrow.svg'
  const ariaLabel = direction === 'left' ? 'Scroll to previous characters' : 'Scroll to next characters'

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 ${
        direction === 'left' ? 'left-0' : 'right-0'
      } transform -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-greenPortal focus:outline-none`}
    >
      <Image
        src={buttonImage}
        alt={`${direction === 'left' ? 'Left' : 'Right'} arrow`}
        width={40}
        height={40}
      />
    </button>
  )
}

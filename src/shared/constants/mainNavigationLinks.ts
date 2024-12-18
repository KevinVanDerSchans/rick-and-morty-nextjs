import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const MAIN_NAVIGATION_LINKS = (): InternalLink[] => {
  return [
    {
      url: '/',
      label: 'HomePage',
      ariaLabel: 'HomePage',
      icon: ICONS.HomeIcon,
      testId: 'homepage',
    },
  ]
}

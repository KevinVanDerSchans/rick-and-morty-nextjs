import { PluginAPI } from 'tailwindcss/types/config'

export const tailwindPlugins = ({ addBase, addUtilities }: PluginAPI) => {
  addBase({})

  addUtilities({
    '.primary-hover-color-transition': {
      'transition-property': 'color',
      'transition-duration': '500ms',
      color: 'white',
      '&:hover': {
        color: 'grey',
      },
    },

    '.primary-hover-scale-up': {
      'transition-property': 'transform',
      'transition-duration': '500ms',
      'transition-timing-function': 'ease-in-out',
      transform: 'scale(1)',
      '&:hover': {
        transform: 'scale(1.25)',
      },
    },
  })
}

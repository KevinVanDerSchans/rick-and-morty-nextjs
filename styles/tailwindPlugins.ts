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

    '.primary-hover-card-transition': {
      'box-shadow': '0 0 20px rgba(65, 11, 31, 0.3)',
      'transition-property': 'all',
      'transition-duration': '300ms',
      '&:hover': {
        'box-shadow': '0 0 20px rgba(65, 11, 31, 0.9)',
      },
      cursor: 'pointer',
    },

    '.primary-hover-button-transition': {
      'transition-property': 'background-color, color',
      'transition-duration': '500ms',
      'background-color': 'black',
      color: 'white',
      'font-weight': 'semibold',
      '&:hover': {
        'background-color': '#6ab840',
        color: 'black',
        'font-weight': 'semibold',
      },
    },
  })
}

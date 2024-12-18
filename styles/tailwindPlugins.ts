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
  })
}

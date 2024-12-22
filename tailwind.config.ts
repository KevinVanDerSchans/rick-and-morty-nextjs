import type { Config } from 'tailwindcss'
import themeConfig from './styles/themeConfig'
import { tailwindPlugins } from './styles/tailwindPlugins'

const config: Config = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ...themeConfig,
        greenPortal: '#2c9143',
        greenLightPortal: '#6ab840',
        rickAndMortyLogo: '#42b3c9',
      },
    },
  },
  plugins: [tailwindPlugins],
}

export default config

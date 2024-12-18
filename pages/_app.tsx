import type { AppProps } from 'next/app'
import '@layouts/MainLayout'
import '@styles/globals.css'
import MainLayout from '@layouts/MainLayout'

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App

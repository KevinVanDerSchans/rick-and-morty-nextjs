import type { AppProps } from 'next/app'
import { ErrorProvider } from '@context/ErrorProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ErrorProvider>
  )
}

export default App

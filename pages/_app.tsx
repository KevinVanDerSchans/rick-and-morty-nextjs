import type { AppProps } from 'next/app'
import { ErrorProvider } from '@context/ErrorProvider'
import ReduxProvider from '@context/ReduxProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <ReduxProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ReduxProvider>
    </ErrorProvider>
  )
}

export default App

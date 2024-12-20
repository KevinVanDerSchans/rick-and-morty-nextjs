import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en-US'>
      <Head>
        <meta charSet='UTF-8' />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='robots'
          content='index, follow'
        />
        <meta
          property='og:title'
          content='Template'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          name='description'
          content='Rick & Morty App built with NextJS, React, Redux and TailwindCSS'
        />
        <meta
          name='author'
          content='Kevin van der Schans Delgado'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <body>
        <Main />
        <NextScript aria-hidden='true' />
      </body>
    </Html>
  )
}

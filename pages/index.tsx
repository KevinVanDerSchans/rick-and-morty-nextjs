import React from 'react'
import Seo from './Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        title='Rick & Morty App'
        description='Review and check the details of your favorite chapters'
      />

      <main className='flex h-screen items-center justify-center bg-gray-100'>
        <h1 className='text-3xl'>Rick & Morty</h1>
      </main>
    </>
  )
}

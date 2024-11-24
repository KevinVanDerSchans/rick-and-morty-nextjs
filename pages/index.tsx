import React from 'react'
import Seo from './Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        title='Template'
        description='Welcome to this project.'
      />

      <main className='flex h-screen items-center justify-center bg-gray-100'>
        <h1 className='text-3xl'>Template</h1>
      </main>
    </>
  )
}

import Seo from '@pages/Seo'

export default function Custom404() {
  return (
    <>
      <Seo
        title='Rick & Morty App - Page Not Found'
        description="The page you're looking for doesn't exist. Explore Rick & Morty App or return to the homepage."
      />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-3xl font-bold text-black'>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  )
}

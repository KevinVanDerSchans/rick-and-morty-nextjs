import React from 'react'
import ICONS from '@constants/icons'

interface ErrorFeedbackProps {
  message: string
  onRetry?: () => void
}

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ message, onRetry }) => {
  return (
    <div
      role='alert'
      aria-live='assertive'
      className='flex items-center justify-between p-4 mb-4 bg-green-300 border border-green-500 text-black rounded-lg shadow-lg animate-fade-in'
    >
      <div className='flex items-center gap-2'>
        <ICONS.ExclamationErrorIcon className='h-6 w-6 text-red-500 mr-2' />

        <div>
          <h3 className='text-lg font-bold'>Oops! Something went wrong.</h3>
          <p className='text-sm'>{message}</p>
        </div>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          aria-label='Try again to reload the content'
          className='ml-4 bg-black hover:bg-green-500 text-green-300 hover:text-black px-4 py-2 rounded-lg focus:ring-4 focus:ring-green-200 transition ease-in-out duration-200'
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorFeedback

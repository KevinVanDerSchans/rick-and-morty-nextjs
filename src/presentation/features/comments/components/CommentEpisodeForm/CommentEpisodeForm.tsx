'use client'
import { useCommentForm } from 'src/presentation/features/comments/hooks/useCommentForm'
import NameInput from '@comments/components/CommentEpisodeForm/NameInput'
import EmailInput from '@comments/components/CommentEpisodeForm/EmailInput'
import CommentInput from '@comments/components/CommentEpisodeForm/CommentInput'
import SubmitButton from '@comments/components/CommentEpisodeForm/SubmitButton'

export default function CommentEpisodeForm() {
  const { name, setName, email, setEmail, comment, setComment, isSubmitting, handleSubmit } = useCommentForm()

  return (
    <form
      onSubmit={handleSubmit}
      className='p-8 bg-gradient-to-br rounded-lg shadow-lg w-full max-w-lg mx-auto'
    >
      <fieldset className='space-y-6'>
        <legend className='sr-only'>Comment data</legend>

        <NameInput
          name={name}
          setName={setName}
        />

        <EmailInput
          email={email}
          setEmail={setEmail}
        />

        <CommentInput
          comment={comment}
          setComment={setComment}
        />
      </fieldset>

      <SubmitButton
        label='Submit Comment'
        isSubmitting={isSubmitting}
      />
    </form>
  )
}

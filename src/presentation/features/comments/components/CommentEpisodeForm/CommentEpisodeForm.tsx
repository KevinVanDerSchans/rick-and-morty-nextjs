'use client'
import { useCommentForm } from 'src/presentation/features/comments/hooks/useCommentForm'
import NameInput from '@comments/components/CommentEpisodeForm/NameInput'
import EmailInput from '@comments/components/CommentEpisodeForm/EmailInput'
import CommentInput from '@comments/components/CommentEpisodeForm/CommentInput'
import SubmitButton from '@comments/components/CommentEpisodeForm/SubmitButton'

export default function CommentEpisodeForm() {
  const { name, setName, email, setEmail, comment, setComment, isSubmitting, handleSubmit } = useCommentForm()

  return (
    <main className='inset-0 flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='p-12 bg-greenLightPortal w-80'
      >
        <fieldset>
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
          label='Comment'
          isSubmitting={isSubmitting}
          aria-busy={isSubmitting}
        />
      </form>
    </main>
  )
}

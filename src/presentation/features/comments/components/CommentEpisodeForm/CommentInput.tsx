/* eslint-disable no-unused-vars */
import ICONS from '@constants/icons'

interface CommentInputProps {
  comment: string
  setComment: (comment: string) => void
}

const CommentInput = ({ comment, setComment }: CommentInputProps) => (
  <div className='gap-y-2'>
    <label
      htmlFor='comment'
      className='flex justify-center text-xl'
    >
      <ICONS.CommentMessageIcon
        data-testid='comment-input'
        aria-hidden='true'
        className='inline-block w-6 h-6 text-black'
      />
      <span className='sr-only'>comment</span>
    </label>

    <textarea
      value={comment}
      onChange={e => setComment(e.target.value)}
      rows={4}
      maxLength={500}
      name='comment'
      id='comment'
      required
      placeholder='Type your comment here'
      aria-label='Type your comment here'
      className='w-full p-2 my-2 text-center focus:outline-none text-black'
    />
  </div>
)

export default CommentInput

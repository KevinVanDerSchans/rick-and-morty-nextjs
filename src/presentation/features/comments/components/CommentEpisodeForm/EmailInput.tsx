/* eslint-disable no-unused-vars */
import ICONS from '@constants/icons'

interface EmailInputProps {
  email: string
  setEmail: (email: string) => void
}

const EmailInput = ({ email, setEmail }: EmailInputProps) => (
  <div className='gap-y-2'>
    <label
      htmlFor='email'
      className='flex justify-center text-xl'
    >
      <ICONS.CommentEmailIcon
        data-testid='comment-email-input'
        aria-hidden='true'
        className='inline-block w-6 h-6 text-black'
      />
      <span className='sr-only'>Email Address</span>
    </label>

    <input
      value={email}
      onChange={e => setEmail(e.target.value)}
      type='email'
      name='email'
      id='email'
      required
      autoComplete='email'
      placeholder='E-mail address'
      aria-label='Email address input'
      className='w-full p-2 my-2 text-center focus:outline-none text-black'
    />
  </div>
)

export default EmailInput

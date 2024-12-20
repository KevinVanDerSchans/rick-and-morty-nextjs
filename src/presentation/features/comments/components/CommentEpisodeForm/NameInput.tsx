/* eslint-disable no-unused-vars */
import ICONS from '@constants/icons'

interface NameInputProps {
  name: string
  setName: (name: string) => void
}

const NameInput = ({ name, setName }: NameInputProps) => (
  <div className='gap-y-2'>
    <label
      htmlFor='name'
      className='flex justify-center text-xl'
    >
      <ICONS.CommentNameIcon
        data-testid='comment-name-input'
        aria-hidden='true'
        className='inline-block w-6 h-6 text-black'
      />
      <span className='sr-only'>name</span>
    </label>

    <input
      value={name}
      onChange={e => setName(e.target.value)}
      type='name'
      name='name'
      id='name'
      required
      placeholder='Your name'
      aria-label='Type your name here'
      className='w-full p-2 my-2 text-center focus:outline-none text-black'
    />
  </div>
)

export default NameInput

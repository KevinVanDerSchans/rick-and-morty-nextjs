import { BounceLoader } from 'react-spinners'

export function MainSpinner() {
  return (
    <BounceLoader
      size={60}
      speedMultiplier={0.6}
      data-testid='spinner'
      role='status'
      color='green'
      aria-label='Loading'
    />
  )
}

import { LoadingCircle } from '../loading-circle/loading-circle'

export function LoadingCard () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <LoadingCircle />
    </div>
  )
}

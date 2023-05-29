import { Loading } from '@nextui-org/react'

export function LoadingCard () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Loading>Loading</Loading>
    </div>
  )
}

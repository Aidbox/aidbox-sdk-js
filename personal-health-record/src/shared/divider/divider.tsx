import { HTMLAttributes } from 'react'

interface Props {
  verticalMargin?: string
}

export function Divider (props: Props & HTMLAttributes<HTMLHRElement>) {
  const { verticalMargin, ...other } = props
  return (
    <hr
      {...other}
      style={{ padding: '0 1rem', margin: `${verticalMargin ?? 0} 0`, background: '#E1E1E1' }}
    />
  )
}

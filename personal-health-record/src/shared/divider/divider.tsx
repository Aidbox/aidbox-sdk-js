import { HTMLAttributes } from 'react'

interface Props {
  verticalMargin?: string

}
export function Divider (props: Props & HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      {...props}
      style={{ padding: '0 1rem', margin: `${props.verticalMargin ?? 0} 0`, background: '#E1E1E1' }}
    />
  )
}

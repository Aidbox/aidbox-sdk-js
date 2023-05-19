import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './card.module.css'
import { LoadingCard } from './loading-card'
import { NoDateCard } from './no-date-card'

interface BottomAction {
  label: string
  onClick: () => void
}

interface Props {
  title: string
  empty?: boolean
  children: ReactNode | ReactNode[]
  bottomActions?: BottomAction | BottomAction[]
  alignCenter?: boolean
  loading?: boolean
}

export function CardWrapper ({ title, children, bottomActions, alignCenter, empty, loading }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4>{title}</h4>

      <div
        className={cx(styles.cardWrapper, {
          [styles.withActions]: bottomActions,
          [styles.alignCenter]: alignCenter
        })}
      >
        <Content
          loading={loading}
          empty={empty}
          component={children}
        />
      </div>
      {bottomActions && <BottomActions bottomActions={bottomActions} />}
    </div>
  )
}

interface ContentProps {
  loading?: boolean
  empty?: boolean
  component: ReactNode | ReactNode[]

}
export function Content ({
  loading, empty, component
}:ContentProps) {
  if (loading) {
    return (
      <LoadingCard />
    )
  }

  if (empty) {
    return (
      <NoDateCard />
    )
  }

  return component as JSX.Element
}

interface BottomActionsProps {
  bottomActions?: BottomAction | BottomAction[]
}
export function BottomActions ({ bottomActions }: BottomActionsProps) {
  const isArray = Array.isArray(bottomActions)

  return (
    <div
      className={cx(styles.bottomActionsContainer, {
        [styles.grid2]: isArray
      })}
    >
      {Array.isArray(bottomActions)
        ? bottomActions.slice(0, 2).map((action, index) => (
          <button key={index}>{action.label}</button>
        ))
        : <button>{bottomActions?.label}</button>
      }
    </div>
  )
}

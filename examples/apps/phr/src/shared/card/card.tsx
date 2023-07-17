import cx from 'classnames'
import { JSX } from 'react'

import styles from './card.module.css'
import { LoadingCard } from './loading-card'
import { NoDataCard } from './no-data-card'

interface BottomAction {
  label: string;
  onClick: () => void;
}

interface Props {
  title: string;
  empty?: boolean;
  children?: JSX.Element | JSX.Element[];
  bottomActions?: BottomAction | BottomAction[];
  alignCenter?: boolean;
  loading?: boolean;
}

export function CardWrapper ({
  title,
  children,
  bottomActions,
  alignCenter,
  empty,
  loading
}: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4 style={{ marginBottom: '.5rem', fontWeight: 500 }}>{title}</h4>

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
  loading?: boolean;
  empty?: boolean;
  component?: JSX.Element | JSX.Element[];
}

export function Content ({ loading, empty, component }: ContentProps) {
  if (loading) {
    return <LoadingCard />
  }

  if (empty || !component) {
    return <NoDataCard />
  }

  return Array.isArray(component) ? <>{component}</> : component
}

interface BottomActionsProps {
  bottomActions?: BottomAction | BottomAction[];
}

export function BottomActions ({ bottomActions }: BottomActionsProps) {
  return (
    <div
      className={cx(styles.bottomActionsContainer, {
        [styles.grid2]: Array.isArray(bottomActions)
      })}
    >
      {Array.isArray(bottomActions)
        ? (
          bottomActions
            .slice(0, 2)
            .map((action, index) => <button key={index}>{action.label}</button>)
        )
        : (
          <button>{bottomActions?.label}</button>
        )}
    </div>
  )
}

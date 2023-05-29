import NoDataIcon from '../../assets/no-date.svg'
import styles from '../../components/workspace.module.css'

export function NoDataCard () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <NoDataIcon />
      <p className={styles.cardSmallText}>There are no entries</p>
    </div>
  )
}

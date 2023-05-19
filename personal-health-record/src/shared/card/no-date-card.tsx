import NoDateIcon from '../../assets/no-date.svg'
import styles from '../../components/dashboard/components/workspace.module.css'

export function NoDateCard () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <NoDateIcon />
      <p className={styles.cardSmallText}>There are no entries</p>
    </div>
  )
}

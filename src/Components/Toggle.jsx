import styles from './Toggle.module.css';

const Toggle = ({toggleName, toggleId}) => {
  return (
    <div className='toggle-card'>
        <p className={styles.toggleName}>{toggleName}</p>
        <div className={styles.container}>
            <input type="checkbox" className={styles.checkbox} id={toggleId}/>
            <label className={styles.switch} htmlFor={toggleId}>
                <span className={styles.slider}></span>
            </label>
        </div>
      </div>
  )
}

export default Toggle
import styles from './Toggle.module.css';

const Toggle = ({toggleName, toggleId, checked, onChange}) => {
  return (
    <div className='toggle-card'>
        <p className={styles.toggleName}>{toggleName}</p>
        <div className={styles.container}>
            <input type="checkbox" className={styles.checkbox} id={toggleId} checked={checked}
        onChange={onChange}/>
            <label className={styles.switch} htmlFor={toggleId}>
                <span className={styles.slider}></span>
            </label>
        </div>
      </div>
  )
}

export default Toggle
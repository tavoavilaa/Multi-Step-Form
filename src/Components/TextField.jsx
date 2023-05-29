import useInputs from '../hooks/useInputs'
import styles from './TextField.module.css';
const TextField = ({placeholder, name, label, value, handleChange}) => {
  const {handleBlur, isNotEmpty} = useInputs()
  return (
    <>
      <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <p>{label}</p>
          <input type="text" name={name} className={styles.input} placeholder={placeholder} value={value} onChange={e => handleChange(e)} onBlur={handleBlur}/>
          <div className={isNotEmpty ? styles.highlight : styles.highlightRed}></div>
        </div>
    </div>
    </>
  )
}

export default TextField
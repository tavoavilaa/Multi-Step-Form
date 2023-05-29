import useInputs from '../hooks/useInputs'
import styles from './TextField.module.css';
const EmailField = ({label,name,placeholder, value, handleChange}) => {

  const {handleBlur, isValidEmail} = useInputs()

  return (
    <>
        <div className={styles.textField}>
            <div className={styles.inputContainer}>
            <p>{label}</p>
                <input type="email" name={name} className={styles.input} placeholder={placeholder} value={value}  onChange={e => handleChange(e)} onBlur={handleBlur}/>
                <div className={isValidEmail ? styles.highlight : styles.highlightRed}></div>
            </div>
        </div>
    </>
  )
}

export default EmailField
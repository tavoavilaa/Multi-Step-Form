import useInputs from '../hooks/useInputs'
import styles from './TextField.module.css';
const NumberField = ({label, name, placeholder, value}) => {

  const {handleChangeFloor, isValidNumber, handleBlur} = useInputs()
  return (
    <>
    <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <p>{label}</p>
          <input type="number" name={name} value={value} className={styles.input} placeholder={placeholder} min={1} max={50} onChange={e => handleChangeFloor(e)} onBlur={handleBlur}/>
          <div className={isValidNumber ? styles.highlight : styles.highlightRed}></div>
        </div>
    </div>
    </>
  ) 
}

export default NumberField
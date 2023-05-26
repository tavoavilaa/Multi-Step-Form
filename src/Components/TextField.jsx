import styles from './TextField.module.css';

const TextField = ({placeholder, name, label}) => {
  
  return (
    <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <p>{label}</p>
          <input type="text" name={name} className={styles.input} placeholder={placeholder}/>
          <div className={styles.highlight}></div>
        </div>
    </div>
  )
}

export default TextField
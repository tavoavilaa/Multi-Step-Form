import { useState } from 'react';
import styles from './TextField.module.css';

const EmailField = ({label,name,placeholder}) => {
    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input);
    setIsValidEmail(isValid);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    validateEmail(input);
  };

  const handleBlur = () => {
    setTouched(true);
  };
  return (
    <>
        <div className={styles.textField}>
            <div className={styles.inputContainer}>
            <p>{label}</p>
                <input type="email" name={name} className={styles.input} placeholder={placeholder} value={email} onChange={handleChange} onBlur={handleBlur}/>
                <div className={isValidEmail ? styles.highlight : styles.highlightRed}></div>
            </div>
        </div>
        <div>
       

{touched && !isValidEmail && (
        <span style={{ color: 'rgb(194 1 1)' }}>Ingrese un correo electrónico válido</span>
      )}
        </div>
    </>
  )
}

export default EmailField
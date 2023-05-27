import { useState } from 'react';
import styles from './TextField.module.css';

const TextField = ({placeholder, name, label}) => {
  const [text, setText] = useState('');
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateText = (input) => {
    const isValid = input.trim() !== '';
    setIsNotEmpty(isValid);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);
    validateText(input);
  };

  const handleBlur = () => {
    setTouched(true);
  };
  return (
    <>
      <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <p>{label}</p>
          <input type="text" name={name} className={styles.input} placeholder={placeholder} value={text} onChange={handleChange} onBlur={handleBlur}/>
          <div className={isNotEmpty ? styles.highlight : styles.highlightRed}></div>
        </div>
    </div>
    <div>
      {touched && !isNotEmpty && (
        <span style={{ color: 'rgb(194 1 1)' }}>Este campo no puede estar vacío</span>
      )}
    </div>
    </>
  )
}

export default TextField
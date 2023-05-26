import React, { useState } from 'react';
import styles from './TextField.module.css';

const NumberField = ({label, name, placeholder}) => {
    const [piso, setNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(true);

  const validateNumber = (input) => {
    const parsedNumber = parseInt(input, 10);
    const isValid = !isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 50;
    setIsValidNumber(isValid);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setNumber(input);
    validateNumber(input);
  };
  return (
    <>
    <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <p>{label}</p>
          <input type="number" name={name} className={styles.input} placeholder={placeholder} min={1} max={50} value={piso} onChange={handleChange}/>
          <div className={isValidNumber ? styles.highlight : styles.highlightRed}></div>
          
        </div>
    </div>
        <div>
        {!isValidNumber && (
            <span style={{ color: 'rgb(194 1 1)' }}>Ingrese un número válido entre 1 y 50</span>
            )}
        </div>
    </>
  ) 
}

export default NumberField
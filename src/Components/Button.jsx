import React from 'react'
import styles from './Button.module.css';

const Button = ({ handleStepChange, direction, currentStep, totalSteps }) => {

  const handleClick = () => {
    if (direction === 'forward') {
      handleStepChange(1); // Incrementar el paso
    } else if (direction === 'backward') {
      handleStepChange(-1); // Decrementar el paso
    }
  };
  
  return (
    <button className={styles.button} onClick={handleClick}>
      {direction === 'forward' ? 'Siguiente' : 'Anterior'}
    </button>
  )
}

export default Button
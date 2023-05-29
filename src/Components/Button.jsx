import { Link } from 'react-router-dom'
import styles from './Button.module.css';

const Button = ({ direction, destiny }) => {

  return (
    <Link className={direction == 'forward' ? styles.button : styles.buttonSecundary} to={destiny}>
      {direction === 'forward' ? 'Siguiente' : 'Anterior'}
    </Link>
  )
}

export default Button
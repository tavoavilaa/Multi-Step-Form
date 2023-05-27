import { Link } from 'react-router-dom'
import styles from './Button.module.css';

const Button = ({ direction, destiny }) => {

  return (
    <Link className={styles.button} to={destiny} disabled>
      {direction === 'forward' ? 'Siguiente' : 'Anterior'}
    </Link>
  )
}

export default Button
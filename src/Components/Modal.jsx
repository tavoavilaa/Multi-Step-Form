import { useState } from 'react';
import useInputs from '../hooks/useInputs'
import styles from './Button.module.css';

const Modal = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);

    const toggleClassModal = () => {
      setIsActiveModal(!isActiveModal);
    };
    const {summaryData} = useInputs()
  return (
    <>
        <div className={isActiveModal ? 'activeModal' : 'hideModal'}>
            <div className='modalContent'>
                <h2><b>Resumen</b></h2>
                <div>
                {Object.entries(summaryData).map(([key, value]) => (
                <p key={key}>
                    <strong>{key}: </strong>
                    {value}
                </p>
                ))}
                </div>
            </div>
        </div>
        <div className='btn-group'>
            <button className={styles.buttonModal} onClick={toggleClassModal}>Resumen</button>
        </div>
    </>
  )
}

export default Modal
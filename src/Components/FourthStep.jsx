import React from 'react'
import Button from './Button'
import useInputs from '../hooks/useInputs'

const FourthStep = () => {
  const {name, mail, address, floor, bbq, salon, juegos, summaryData} = useInputs()

  

  return (
    <>
      <h2>Tu resumen</h2>
      <div>
        {Object.entries(summaryData).map(([key, value]) => (
          <p key={key}>
            <strong>{key}: </strong>
            {value}
          </p>
        ))}
      </div>
     <div className='btn-group'>
         <Button
            destiny="/caracteristicas"
            direction="backward"
          />
      </div>
    </>
  )
}

export default FourthStep
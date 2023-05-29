import TextField from './TextField'
import NumberField from './NumberField'
import Button from './Button'

import useInputs from '../hooks/useInputs'

const SecondStep = () => {
  const {address, floor, isValidNumber, isNotEmpty, touched} = useInputs()
  const {handleChangeAddress} = useInputs()
  return (
    <div className='input-group'>
      <h2>Introduce los datos de tu apartamento</h2>
      <TextField 
        placeholder="Ejemplo: Calle 123, Bogotá, Colombia" 
        name="direction" 
        label="Dirección" 
        value={address}
        handleChange={handleChangeAddress}
      />
      {touched && !isNotEmpty && <p style={{ color: 'rgb(194 1 1)', marginTop: '-8px' }}>Este campo no puede estar vacío</p>}

      <NumberField placeholder="Max: 50" name="piso" label="Piso" pisoMin="1" pisoMax="50" value={floor}/>
      {!isValidNumber && (
            <span style={{ color: 'rgb(194 1 1)' }}>Ingrese un número válido entre 1 y 50</span>
            )}
      <div className='btn-group'>
         <Button
            destiny="/datos-cliente"
            direction="backward"
          />
          <Button
            destiny={address != '' && isValidNumber ? '/caracteristicas' : null}
            direction="forward"
          />
         </div>
    </div>
  )
}

export default SecondStep
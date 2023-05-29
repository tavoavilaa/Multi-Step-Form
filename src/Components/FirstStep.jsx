

import TextField from './TextField'
import EmailField from './EmailField'
import Button from './Button'

import useInputs from '../hooks/useInputs'

const FirstStep = () => {

  const {name, mail, isValidEmail, isNotEmpty, touched} = useInputs()
  const {handleChangeName,handleChangeMail} = useInputs()

  

  return (
    <div className='input-group'>
      <h2>Introduce tus  datos</h2>
      <TextField 
        placeholder="Ejemplo: Gustavo Avila Pedraza" 
        name="name" 
        label="Nombre y apellidos"
        value={name}
        handleChange={handleChangeName}
        />
      {touched && !isNotEmpty && <p style={{ color: 'rgb(194 1 1)', marginTop: '-8px' }}>Este campo no puede estar vacío</p>}
      <EmailField 
        placeholder="ejemplo@ejemplo.com" 
        name="email" 
        label="Correo" 
        value={mail}
        handleChange={handleChangeMail}
        />
          {touched && !isValidEmail && <p style={{ color: 'rgb(194 1 1)', marginTop: '-8px' }}>Ingrese un correo electrónico válido</p>}
      <div className='btn-group'>
        <Button
        destiny={isNotEmpty && isValidEmail ? '/direccion-apartamento' : null}
        direction="forward"

      />
      </div>
    </div>
  )
}

export default FirstStep
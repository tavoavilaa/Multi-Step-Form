import TextField from './TextField'
import EmailField from './EmailField'

const FirstStep = () => {
  return (
    <div className='input-group'>
      <h2>Introduce tus  datos</h2>
      <TextField placeholder="Ejemplo: Gustavo Avila Pedraza" name="name" label="Nombre y apellidos"/>
      <EmailField placeholder="ejemplo@ejemplo.com" name="email" label="Correo" isEmail={true}/>
    </div>
  )
}

export default FirstStep
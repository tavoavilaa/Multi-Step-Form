import TextField from './TextField'
import NumberField from './NumberField'

const SecondStep = () => {
  return (
    <div className='input-group'>
      <h2>Introduce los datos de tu apartamento</h2>
      <TextField placeholder="Ejemplo: Calle 123, Bogotá, Colombia" name="direction" label="Dirección"/>
      <NumberField placeholder="Max: 50" name="piso" label="Piso" pisoMin="1" pisoMax="50"/>
     
    </div>
  )
}

export default SecondStep
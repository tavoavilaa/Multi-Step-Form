import useInputs from '../hooks/useInputs'
import Toggle from "./Toggle"
import Button from "./Button"

const ThirdStep = () => {
  const {bbq, salon, juegos} = useInputs()
  const {handleToggleBbq, handleToggleSalon, handleToggleJuegos} = useInputs()
  return (
    <>
      <h2>Selecciona las opciones con las que cuenta tu apartamento</h2>
      <Toggle 
        toggleName='Zona BBQ' 
        toggleId='bbq' 
        checked={bbq}
        onChange={handleToggleBbq}/>
      <Toggle 
        toggleName='Salón comunal' 
        toggleId='salon' 
        checked={salon}
        onChange={handleToggleSalon}/>
      <Toggle 
        toggleName='Parque de juegos' 
        toggleId='juegos' 
        checked={juegos}
        onChange={handleToggleJuegos}/>

       <div className='btn-group'>
         <Button
            destiny="/direccion-apartamento"
            direction="backward"
          />
          <Button
            destiny="/resumen"
            direction="forward"
          />
         </div>
    </>
  )
}

export default ThirdStep
import Button from '../Button'
import SecondStep from '../SecondStep'

const DireccionApartamento = () => {
  return (
    <div>
        <SecondStep/>
        <div className='btn-group'>
         <Button
            destiny="/datos-cliente"
            direction="backward"
          />
          <Button
            destiny="/caracteristicas"
            direction="forward"
          />
         </div>
        </div>
  )
}

export default DireccionApartamento
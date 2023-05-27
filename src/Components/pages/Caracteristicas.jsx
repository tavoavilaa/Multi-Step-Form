import Button from '../Button'
import ThirdStep from '../ThirdStep'

const Caracteristicas = () => {
  return (
    <div>
          <ThirdStep/>
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
        </div>
  )
}

export default Caracteristicas
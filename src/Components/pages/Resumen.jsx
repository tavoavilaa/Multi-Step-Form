import Button from '../Button'
import FourthStep from '../FourthStep'

const Resumen = () => {
  return (
    <div>
          <FourthStep/>
          <div className='btn-group'>
         <Button
            destiny="/caracteristicas"
            direction="backward"
          />
         </div>
        </div>
  )
}

export default Resumen
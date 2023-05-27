import Button from '../Button'
import FirstStep from '../FirstStep'

const DatosCliente = () => {
  return (
    <div>
    <FirstStep/>
    <div className='btn-group'>
     <Button
      destiny="/direccion-apartamento"
       direction="forward"
     />
 
    </div>
   </div>
  )
}

export default DatosCliente
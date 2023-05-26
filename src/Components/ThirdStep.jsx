import Toggle from "./Toggle"

const ThirdStep = () => {
  return (
    <>
      <h2>Selecciona las opciones con las que cuenta tu apartamento</h2>
      <Toggle toggleName='Zona BBQ' toggleId='bbq'/>
      <Toggle toggleName='Salón comunal' toggleId='salon'/>
      <Toggle toggleName='Parque de juegos' toggleId='juegos'/>
    </>
  )
}

export default ThirdStep
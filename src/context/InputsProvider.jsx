import { useState, createContext } from "react";

const InputsContext = createContext();

const InputsProvider = ({children}) =>  {
    // states inputs    
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const [floor, setFloor] = useState(1);

    // toggle states
    const [bbq, setBbq] = useState(false);
    const [salon, setSalon] = useState(false);
    const [juegos, setJuegos] = useState(false);

  

     // states validations
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidNumber, setIsValidNumber] = useState(true);
    const [isNotEmpty, setIsNotEmpty] = useState(false);
    const [touched, setTouched] = useState(false);

 

    const handleToggleBbq = (event) => {
        setBbq(event.target.checked);
    };
    const handleToggleSalon = (event) => {
        setSalon(event.target.checked);
    };
    const handleToggleJuegos = (event) => {
        setJuegos(event.target.checked);
    };
  

    const handleChangeName = e => {
        const inputName = e.target.value;
        const isValid = inputName.trim() !== '';
        setIsNotEmpty(isValid);

        setName(e.target.value);
    }

    const handleChangeMail = e => {

        const email = e.target.value;


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);


        setMail(e.target.value);
    }

    const handleChangeAddress = e => {
        const inputAddr = e.target.value;
        const isValid = inputAddr.trim() !== '';
        setIsNotEmpty(isValid);
        setAddress(e.target.value);
    }

    const handleChangeFloor = e => {    

        const piso = e.target.value;

        const parsedNumber = parseInt(piso, 10);

        const isValid = !isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 50;

        setIsValidNumber(isValid);


        setFloor(e.target.value);
    }

    const handleBlur = () => {
        setTouched(true);
      };

      
      const summaryData = {
        Nombre: name,
        Correo: mail,
        'Dirección del apartamento': address,
        Piso: floor,
        'Zona BBQ': bbq ? 'Sí' : 'No',
        'Salón comunal': salon ? 'Sí' : 'No',
        'Parque de juegos': juegos ? 'Sí' : 'No',
      };
      


    return(
        <InputsContext.Provider 
            value={{
                handleChangeName,
                handleChangeMail,
                handleChangeAddress,
                handleChangeFloor,
                handleToggleBbq,
                handleToggleSalon,
                handleToggleJuegos,
                handleBlur,
                bbq,
                salon,
                juegos,
                name,
                mail,
                address,
                floor,
                isValidEmail,
                isValidNumber,
                isNotEmpty,
                touched,
                summaryData
             

            }}
        >
            {children}
        </InputsContext.Provider>
    )
}

export {InputsProvider}

export default InputsContext
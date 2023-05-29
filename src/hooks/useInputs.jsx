import { useContext } from "react";
import InputsContext from "../context/InputsProvider";

const useInputs = () =>{
    return useContext(InputsContext)
}

export default useInputs
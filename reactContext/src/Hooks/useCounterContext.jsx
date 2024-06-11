import { useContext } from "react"
import { CounterContext } from "../context/ConterContext"


const useCounterContext = () => {

    const context=useContext(CounterContext)

    if(!context){
        console.log("Contexto nao encontrado");
    }



  return (
   context
  )
}

export default useCounterContext

import useCounterContext from "../Hooks/useCounterContext"

export const ChangeContext = () => {
    const {counter,setCounter}=useCounterContext()
    const Change=()=>{
        setCounter(counter+1)
    }
  return (

    <>
    <button onClick={Change}>Trocar</button>
    
    </>
    
  )
}
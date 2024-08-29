import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {
  const numberRef = useRef(0)

  const [counter, setConter] = useState(0)
  const [counterB, setConterB] = useState(0)

  
  useEffect(() => {
    numberRef.current = numberRef.current + 1
  })
  
  
  //useRef no Dom
  const [text, setText]=useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setText("")

    inputRef.current.focus()
    
  }

  const inputRef = useRef()
  return (
    <div>
      <h2>UseRef</h2>
      <p>O componente renderizou {numberRef.current} vezes</p>
      <p>Counter: {counter} </p>
      <button onClick={() => setConter(counter + 1)}></button>
      <p>CounterB: {counterB} </p>
      <button onClick={() => setConterB(counterB + 1)}></button>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} onChange={(e)=>setText(e.target.value)}/>
        <input type="submit" value="Enviar" />
      </form>


    </div>
  )
}

export default HookUseRef

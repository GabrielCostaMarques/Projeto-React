import { useRef } from "react"
import SomeComponent from "./SomeComponentv2"

const HookImperativeHandle = () => {

    const inputRef=useRef()
  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref={inputRef}/>
      <button onClick={()=>inputRef.current.validate()}>Validate</button>
    </div>
  )
}

export default HookImperativeHandle

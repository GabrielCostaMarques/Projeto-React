import { useCallback } from "react"
import { useState } from "react"

import List from "./List"

const HookUseCallback = () => {

    const [counter,setCounter]=useState(0)

    const getItemsFromDatabase = useCallback(()=>{ return ["s","b","cv"];},[])
    

    
   
  return (
    <div>
        <h2>UseCallback</h2>
        <List getItems={getItemsFromDatabase}></List>
        <button onClick={()=>setCounter(counter+1)}>Alterar</button>
        <p>{counter}</p>
    </div>
  )
}

export default HookUseCallback

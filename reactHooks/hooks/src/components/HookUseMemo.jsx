import { useState,useEffect,useMemo } from "react"

const HookUseMemo = () => {

    const [number,setNumber]=useState(0)

    const premiumNumbers=useMemo(()=>{
        return ["0","1000","100"]
    },[])


    useEffect(()=>{
        console.log("premiumNumbers foram aalterados");
        
    },[premiumNumbers])
  return (
    <div>
      <h2>UseMemo</h2>
      <input type="text" onChange={(e)=>setNumber(e.target.value)} />
      {premiumNumbers.includes(number)?<p>Acertou!</p>:<p></p>}
    </div>
  )
}

export default HookUseMemo


import useCounterContext from "../Hooks/useCounterContext"
import { ChangeContext } from "../components/ChangeContext"

import useTitleColorContext from "../Hooks/useTitleColorContext"
const Home = () => {
  const {color,dispatch}=useTitleColorContext()
  const {counter}=useCounterContext()

  const setTitleColor=(color)=>{
    dispatch({type:color});
  }
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor Contador {counter}</p>
      <ChangeContext/>

      <div>
        <button onClick={()=>setTitleColor("RED")}>RED</button>
        <button onClick={()=>setTitleColor("BLUE")}>BLUE</button>
        <button onClick={()=>setTitleColor("GREEN")}>GREEN</button>
      </div>
    </div>
  )
}

export default Home


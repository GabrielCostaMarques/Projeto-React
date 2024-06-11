
import useCounterContext from "../Hooks/useCounterContext"
import { ChangeContext } from "../components/ChangeContext"

import useTitleColorContext from "../Hooks/useTitleColorContext"
const Home = () => {
  const {color}=useTitleColorContext()
  const {counter}=useCounterContext()
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor Contador {counter}</p>
      <ChangeContext/>
    </div>
  )
}

export default Home


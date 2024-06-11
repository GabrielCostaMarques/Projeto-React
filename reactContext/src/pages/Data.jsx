
import useCounterContext from "../Hooks/useCounterContext"
const Data = () => {
  const {counter}=useCounterContext()
  return (
    <div>
        DATA SECTION
        <p>{counter}</p>
    </div>
  )
}

export default Data


import { useContext } from 'react'
import { SomeContext } from '../components/HookuseContext'


const About = () => {
  const {contextValue}=useContext(SomeContext)
  return (
    <div>
      <h2>About</h2>
      <p>Valor do Contexto: {contextValue}</p>
    </div>
  )
}

export default About

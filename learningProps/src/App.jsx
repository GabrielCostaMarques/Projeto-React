
import './App.css'
import CarDetails from './components/CarDetails'
import ShowUserName from './components/ShowUserName'

function App() {
    const name = "Teste"

  return (
    <>
      <h2>Learning Props - I</h2>
      <div></div>
      <ShowUserName name={name}/>
      <CarDetails brand="VW" km={100000} color="blue" newCar={true}/>
      <CarDetails brand="GOL" km={990320} color="PRETO" newCar={false}/>
      <CarDetails brand="BMW" km={100} color="laranja" newCar={true}/>
    </>
  )
}

export default App

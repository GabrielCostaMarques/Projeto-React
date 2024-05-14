
import './App.css'
import CarDetails from './components/CarDetails'
import ShowUserName from './components/ShowUserName'

function App() {
    const name = "Teste"

    const cars=[
      {id:1, brand:"Ferrari", color: "Amarela", newCar:true, km:0},
      {id:1, brand:"KIA", color: "Branco", newCar:false, km:235},
      {id:1, brand:"Renault", color: "Azul", newCar:false, km:3456},
    ]

  return (
    <>
      <h2>Learning Props - I</h2>
      <div></div>
      <ShowUserName name={name}/>

      {/* loop em array de objetos */}

      {cars.map((car)=>(
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        newCar={car.newCar} 
        km={car.km}/>
      )

      )}
    </>
  )
}

export default App

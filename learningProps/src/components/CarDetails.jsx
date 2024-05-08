
const CarDetails = ({brand, km,color,newCar}) => {
  return (
    <div>
      <h2>Destructuring Props</h2>

      <ul>
        <li>Marca: {brand}</li>
        <li>Kilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <div>Carro Novo</div>}
    </div>
  )
}

export default CarDetails

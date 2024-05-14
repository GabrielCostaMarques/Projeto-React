

const Container = ({children, myValue}) => {
    {/* children serve para mostrar o que tem dentro de um componente, quanod estamos querendo envolver nossso código dentro de um container */}
  return (
    
    <div>
      <h2>Titulo do container (props Children)</h2>
      {children}
      <p>O valor é {myValue}</p>
    </div>
  )
}

export default Container

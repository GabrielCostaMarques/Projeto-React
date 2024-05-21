import "./GameOver.css"

const GameOver = ({retryGame}) => {
  return (
    <div>
      <h1>Tela end</h1>
      <button onClick={retryGame}>Clique para voltar</button>
    </div>
  )
}

export default GameOver

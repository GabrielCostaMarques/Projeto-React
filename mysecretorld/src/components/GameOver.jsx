import "./GameOver.css"

const GameOver = ({retryGame,score}) => {
  return (
    <div>
      <h1>Você perdeu!</h1>
      <h3>Sua pontuação foi: {score}</h3>
      <button onClick={retryGame}>Clique para voltar</button>
    </div>
  )
}

export default GameOver

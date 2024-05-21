import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="startBody">
        <h1>Secret Word</h1>
        <p>Clique no botão para começar</p>
        <button onClick={startGame}>Começar jogo</button>
    </div>
  )
}

export default StartScreen

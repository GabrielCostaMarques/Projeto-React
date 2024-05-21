import { useState,useRef } from "react"
import "./GameScreen.css"

const GameScreen = ({ verify, pickedWord, pickedcategory, letterGame, guessedLetter, wrongLetter, guesses, score }) => {

  const [letterInput, setLetterInput]=useState("")

  //usando o useRef para que sempre o usuário submeter o form, ele nao precise clicar novamente, e sim o campo ja ficar com o foco 
  const letterInputRef=useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    verify(letterInput)
    setLetterInput("")

    // definindo o que eu quero que o ref faça
    letterInputRef.current.focus()

  }
  

  return (
    <div>
      <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavras</h1>
        <h3 className="tip">dica Sobre a palava: <span>Dica: {pickedcategory}</span></h3>
        <p>Você ainda tem {guesses} tentativas</p>

        <div className="wordContainer">
          {letterGame.map((letter,i)=>
            guessedLetter.includes(letter)?(
              <span key={i} className="letter">{letter}</span>
            ):(
              <span key={i} className="blackSquare"></span>
            )
          )}
        </div>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhas uam letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="letter"
          maxLength="1" 
          required 
          onChange={(e)=>{setLetterInput(e.target.value)}} 
          value={letterInput}

          // setando a referencia de onde quero que fiquei o focus
          ref={letterInputRef}/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras Ja utilizadas</p>
        {wrongLetter.map((letter,i)=>(
            <span key={i}>{letter},</span>
        ))}
      </div>
    </div>
  )
}

export default GameScreen

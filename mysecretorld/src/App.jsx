// css
import './App.css'

// components
import StartScreen from './components/StartScreen'

// hooks
import { useCallback, useState, useEffect } from 'react'
import datawords from './data/wordsList'
import GameScreen from './components/GameScreen'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words, setwords] = useState(datawords)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetter, setGuessedLetters]=useState([])
  const [wrongLetter, setWrongLetters]=useState([])
  const [guesses, setGuesses]=useState(3)
  const [score, setScore]=useState(0)


  const pickWordAndCategory = () => {

    // Pegando uma categoria aleatória

    //Acessando a chave de cada categoria do arquivo data
    const categories = Object.keys(words)

    // pegando o numero de categorias com Math.random e arredondando para baixa com Math.floor
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // ====================================================================================

    // pegando uma palavra aleatória da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  const startGame = () => {
    const {word,category}=pickWordAndCategory()
    //separando as palavras em lista e letras e mapeando cada letra para tornar ela minúscula
    let letterGame=word.split("");
    letterGame=letterGame.map((l)=>l.toLowerCase())
    console.log(letterGame);
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letterGame)
    setGameStage(stages[1].name)
  }

  const verifyLetter = (letter) => {
    // padronizando a letra
    const normalizedLetter=letter.toLowerCase()

    // checando se a letra ja foi usada
    if(guessedLetter.includes(normalizedLetter)|| wrongLetter.includes(normalizedLetter)){
      return;
    }

    // mandando a letra adivinhada ou removendo as chances
    if(letters.includes(normalizedLetter)){
      //obj é o "actualGuessedLetters" entao eu seto a setGuessedLetters para esse obj. e assim usando o "..." eu pego toda a lista e complemento com o normalizedLetter
      setGuessedLetters((actualGuessedLetters)=>[
        ...actualGuessedLetters,normalizedLetter
      ])
    }else{
      //obj é o "actualWrongLetters" entao eu seto a setGuessedLetters para esse obj. e assim usando o "..." eu pego toda a lista e complemento com o normalizedLetter
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters,normalizedLetter
      ])
    }

    console.log(guessedLetter);
    console.log(wrongLetter);



  }
  const retryGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <GameScreen 
      verify={verifyLetter} 
      pickedWord={pickedWord}
      pickedcategory={pickedCategory}
      letterGame={letters}
      guessedLetter={guessedLetter}
      wrongLetter={wrongLetter}
      guesses={guesses}
      score={score}
      
      />}
      {gameStage === 'end' && <GameOver retryGame={retryGame} />}
    </div>
  )
}

export default App

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

const QtdGuesses=3

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words, setwords] = useState(datawords)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetter, setGuessedLetters] = useState([])
  const [wrongLetter, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(QtdGuesses)
  const [score, setScore] = useState(0)


  // tivemos o mesmo problema aqui colocando essa função no useCallback, entao vamos implementar o useCallback aqui tbm e colocar a "words" por conta dela ser fundamental a função
  const pickWordAndCategory =useCallback( () => {

    // Pegando uma categoria aleatória

    //Acessando a chave de cada categoria do arquivo data
    const categories = Object.keys(words)

    // pegando o numero de categorias com Math.random e arredondando para baixa com Math.floor
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // ====================================================================================

    // pegando uma palavra aleatória da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  },[words])

  // usamos o useCallback por conta que a função startGame está dependente/monitorado de um useEffect e isso nao é permitido
  //teremos um erro no useCallback por conta de falta de dependencias, entao vamos colocar uma função fundamental nela usando o [pickWordAndCategory]
  const startGame =useCallback( () => {
    const { word, category } = pickWordAndCategory()
    //separando as palavras em lista e letras e mapeando cada letra para tornar ela minúscula
    clearLetterStates()
    let letterGame = word.split("");
    letterGame = letterGame.map((l) => l.toLowerCase())
    console.log(letterGame);

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letterGame)
    setGameStage(stages[1].name)
  },[pickWordAndCategory])

  const verifyLetter = (letter) => {
    // padronizando a letra
    const normalizedLetter = letter.toLowerCase()

    // checando se a letra ja foi usada e retornando ela mesma
    if (guessedLetter.includes(normalizedLetter) || wrongLetter.includes(normalizedLetter)) {
      return;
    }

    // mandando a letra adivinhada ou removendo as chances
    if (letters.includes(normalizedLetter)) {
      //obj é o "actualGuessedLetters" entao eu seto a setGuessedLetters para esse obj. e assim usando o "..." eu pego toda a lista e complemento com o normalizedLetter
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      //obj é o "actualWrongLetters" entao eu seto a setGuessedLetters para esse obj. e assim usando o "..." eu pego toda a lista e complemento com o normalizedLetter
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])

      // diminuindo as tentativas
      setGuesses((actualGuesses)=>actualGuesses-1)
    }
  }

  const clearLetterStates=()=>{
    setGuessedLetters([])
    setWrongLetters([])
  }
// usando o useEffect para monitoriar o dado de guesses  em condição de derrota
  useEffect(()=>{
    if (guesses<=0) {
      // reset all states

      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // checkar a condição de vitória
useEffect(()=>{

  //varivale de letras unicas para fazer a verificação se oque o usuário digitou foi igual a palavra, sem precisar verificar a mesma letra duas vezes

  const uniqueLetters=[... new Set(letters)]

  if (guessedLetter.length===uniqueLetters.length) {
      setScore((actualScore)=>(actualScore+=100))

      //adicionando pontos e começando o jogo de novo
      startGame();
  }

  console.log(uniqueLetters); //verificação ['g', 'a', 'b', 'i', 'n', 'e', 't']
  console.log(guessedLetter);// oq exatamente o usuário digitou ['g', 'a', 'b', 'i', 'n', 'e', 't']

}, [guessedLetter,letters,startGame])

  const retryGame = () => {
    setScore(0)
    setGuesses(QtdGuesses)

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
      {gameStage === 'end' && <GameOver retryGame={retryGame} score={score}/>}
    </div>
  )
}

export default App

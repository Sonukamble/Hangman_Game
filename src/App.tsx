
import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import './stylesheets/App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import KeyBoard from './components/KeyBoard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]

}

function App() {
  const [wordGuess, setWordGuess] = useState(getWord())

  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  const inCorrectLetters = guessedLetter.filter(
    letter => !wordGuess.includes(letter)
  )
  console.log(wordGuess);

  const isLoser = guessedLetter.length >= 6
  const isWinner = wordGuess.split("").every(letter => guessedLetter.includes(letter))


  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isLoser || isWinner) return

      setGuessedLetter(currentLetters => [...currentLetters, letter])
    }, [guessedLetter, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key != "Enter") return

      e.preventDefault()

      setGuessedLetter([])
      setWordGuess(getWord())
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [])

  return (
    <div className='app'>

      <div className='winHeading'>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetter={guessedLetter} wordGuess={wordGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          disabled={isLoser || isWinner}
          activeLetter={guessedLetter.filter(letter =>
            wordGuess.includes(letter)
          )}
          inactiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />

      </div>
    </div>
  )
}

export default App;

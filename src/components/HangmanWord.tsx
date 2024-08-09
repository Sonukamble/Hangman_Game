import '../stylesheets/HangmanWord.css';

type HangManWordPropd={
  reveal?: boolean
  guessedLetter: string[],
  wordGuess: string
}

const HangmanWord = ({ reveal, guessedLetter, wordGuess }:HangManWordPropd) => {

  // const word = "test"
  // const guessedLetters = ["t","e","g"]

  return (
    <div className="hangmanWordborder">
      {wordGuess.split("").map((letter,index)=>(
        <span style={{borderBottom: ".1rem solid black"}} key={index}>
          <span style={{
            visibility: guessedLetter.includes(letter) || reveal
              ? "visible" : "hidden",
            color: !guessedLetter.includes(letter) && reveal ? "red":"black",
          }}>
            {letter}
          </span>
        </span>  
      )
      )}
    </div>
  )
}

export default HangmanWord;

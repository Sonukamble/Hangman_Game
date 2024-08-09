import '../stylesheets/KeyBoard.css';

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled: boolean
  activeLetter: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const KeyBoard = ({
  disabled = false,
  activeLetter,
  inactiveLetters,
  addGuessedLetter }: KeyboardProps) => {
  return (
    <div className="keyBoardBorder">
      {KEYS.map(key => {
        const isActive = activeLetter.includes(key)
        const isInActive = inactiveLetters.includes(key)

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`btn ${isActive ? "active" : ""} ${isInActive ? "inactive" : ""}`}
            disabled={isActive || isInActive || disabled}
            key={key}>{key}
          </button>)
      })}
    </div>
  )
}

export default KeyBoard;

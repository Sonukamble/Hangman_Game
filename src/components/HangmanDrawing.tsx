import "../stylesheets/HangmanPerson.css";


const BodyParts = [
    <div className="scrollFace"></div>,
    <div className="hangmanBody"></div>,
    <div className="bodyRightArm"></div>,
    <div className="bodyLeftArm"></div>,
    <div className="rightLeg"></div>,
    <div className="leftLeg"></div>
]
type HangManDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
    return (
        <div className="hangmanBodyPosition">
            {BodyParts.slice(0, numberOfGuesses)}
            <div className="verticalLeftLine"></div>
            <div className="horizontalLeftLine"></div>
            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
        </div>
    )
}

export default HangmanDrawing;

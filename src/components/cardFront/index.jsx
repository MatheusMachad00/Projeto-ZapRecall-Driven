import { useState } from "react";
import arrow from "../../assets/setinha.png"
import { Question } from "./style"

export default function CardFront(props) {
    const [turnCard, setTurnCard] = useState(false);

    const {
        question,
        answer,
        keyGame,
        setRespostas,
        number
    } = props;

    return (
        <> {!turnCard ?
            <Question key={keyGame}>
                <p>{question}</p>
                <img src={arrow} alt="setinha" onClick={() => setTurnCard(true)} />
            </Question> : 'teste'
            }
        </>
    );

}

{/* 

https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/

<CardBack keyGame={keyGame} answer={answer} setRespostas={setRespostas} number={number} /> */}
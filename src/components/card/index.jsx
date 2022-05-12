import { useState } from "react";
import arrow from "../../assets/setinha.png"
import { Question, CardStart } from "./style"

export default function Card({ index, data }) {
    const [turnCard, setTurnCard] = useState(false);

    console.log()

    return (
        <>
            <CardStart key={index} onClick={setTurnCard(true)}>
                <p >Pergunta {index + 1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </CardStart>
        </>
    );

}

{/* 

https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/

<CardBack keyGame={keyGame} answer={answer} setRespostas={setRespostas} number={number} /> 




<CardStart key={index}>
                        <p >Pergunta {index + 1}</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </CardStart>


{!turnCard ?
            <Question key={keyGame}>
                <p>{question}</p>
                <img src={arrow} alt="setinha" onClick={() => setTurnCard(true)} />
            </Question> : 'teste'
            }


*/}
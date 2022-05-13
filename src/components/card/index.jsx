import { useState } from "react";
import { Question, CardStart } from "./style"
import CardFront from "../cardFront";
import Icon from "../icons/index"


export default function Card({ index, data, setAnswers }) {
    const [turnCard, setTurnCard] = useState(false);


    return (
        <> {!turnCard ? <CardStart key={index} onClick={() => setTurnCard(true)}>
            <p >Pergunta {index + 1}</p>
            {/* <ion-icon name="play-outline"></ion-icon> */}
            <Icon icon="party"/>
        </CardStart> : <CardFront data={data} index={index} setAnswers={setAnswers} />}
        </>
    );

}
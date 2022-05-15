import { useState } from "react";
import { CardStart } from "./style"
import CardFront from "../cardFront";
import Icon from "../icons/index"


export default function Card({ index, data, setAnswers }) {
    const [turnCard, setTurnCard] = useState(false);


    return (
        <> {!turnCard ? <CardStart key={index} onClick={() => setTurnCard(true)}>
            <p >Pergunta {index + 1}</p>
            <Icon icon="play"/>
        </CardStart> : <CardFront data={data} index={index} setAnswers={setAnswers} />}
        </>
    );

}
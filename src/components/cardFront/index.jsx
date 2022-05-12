import { useState } from "react";
import arrow from "../../assets/setinha.png"
import { Question } from "./style"
import CardBack from "../cardBack";

export default function CardFront({ data, index }) {
    const [turnCard, setTurnCard] = useState(false);

    return (
        <>
            {!turnCard ?
                <Question key={index} className="question">
                    <p>{data[index].question}</p>
                    <img src={arrow} alt="setinha" onClick={() => setTurnCard(true)} />
                </Question> :
                <CardBack data={data} index={index} />}
        </>
    );

}
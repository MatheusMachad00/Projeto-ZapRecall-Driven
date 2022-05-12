import { useState } from "react";
import arrow from "../../assets/setinha.png"
import { Question } from "./style"

export default function CardFront({data}) {
    const [turnCard, setTurnCard] = useState(false);

    let deck = data;
    console.log(deck.question);
    return (
        <> <p>{data[0].question}</p>
        
        </>
    );

}
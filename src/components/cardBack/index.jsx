import { useState } from "react";
import { Answer, CardStart } from "./style"
import Card from "../card";

export default function CardBack({ data, index, setAnswers }) {
    const [isAnswered, setIsAnswered] = useState(false)

    function answered(type) {
        setAnswers(a => [...a, type]);
        setIsAnswered(true);
    }

    return (
        <>
            {!isAnswered ?
                <Answer>
                    <div className="answerText">{data[index].answer}</div>
                    <div className="OptionsContainer">
                        <div className="redBox" onClick={() => (answered("wrong"))}><p>Não lembrei</p></div>
                        <div className="yellowBox" onClick={() => answered("doubt")}><p>Quase não lembrei</p></div>
                        <div className="greenBox" onClick={() => answered("right")}><p>Zap!</p></div>
                    </div>
                </Answer> :
                <CardStart key={index} >
                    <p >Pergunta {index + 1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </CardStart>}
        </>
    );
}           
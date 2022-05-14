import { useState } from "react";
import { Answer, CardStart } from "./style"
import Icon from "../icons/index"

export default function CardBack({ data, index, setAnswers }) {
    const [isAnswered, setIsAnswered] = useState(false);
    const [symbol, setSymbol] = useState("");
    const [textColor, setTextColor] = useState("");

    function answered(type) {
        setAnswers(a => [...a, type]);
        setIsAnswered(true);
        setSymbol(type);
        setTextColor(type);
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
                    <p className={textColor}>Pergunta {index + 1}</p>
                    <Icon icon={symbol}/>
                </CardStart>}
        </>
    );
}           
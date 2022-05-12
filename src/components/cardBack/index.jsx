import { useState } from "react";
import { Answer } from "./style"

export default function CardBack({ data, index }) {


    return (
        <Answer>
            <div className="answerText">{data[index].answer}</div>
            <div className="OptionsContainer">
                <div className="redBox" ><p>Não lembrei</p></div>
                <div className="yellowBox" ><p>Quase não lembrei</p></div>
                <div className="greenBox" ><p>Zap!</p></div>
            </div>
        </Answer>
    );
}
import { useState } from "react";
import { Baseboard, FinalMessage } from "./style"
import Icon from "../icons/index"


export default function Footer({ data, answers, questions }) {


    function messageFooter() {
        let msg = <></>;
    
        if (answers.length === questions.length && questions.length > 0) {
            if (!answers.includes("wrong")) {
                msg = (
                    <FinalMessage>
                        <span><Icon icon="party" /><p> Parabéns!</p></span>
                        <p>Você não esqueceu de<br></br>nenhum flashcard!</p>
                    </FinalMessage>
                )
            } else {
                msg = (
                    <FinalMessage>
                        <span><Icon icon="sad" /><p>Putz...</p></span>
                        <p>Ainda faltam alguns...<br></br>Mas não desanime!</p>
                    </FinalMessage>
                )
            }
        }
    
    
        return (
            <>
                {msg}
            </>
        )
    }

    const msgFooter = messageFooter();

    return (
        <Baseboard>
            {msgFooter}
            <p>{answers.length}/{data.length} concluídos</p>
            <div className="footerIcons">
                {answers.length !== 0 ?
                    answers.map((answer, index) => <Icon key={index} icon={answer} />) : <></>}
            </div>
        </Baseboard>
    );
}

import { useState } from "react";
import { Baseboard, FinalMessage } from "./style"
import Icon from "../icons/index"


export default function Footer({ data, answers, questions }) {
    const [msg, setMsg] = useState(false);

    function messageFooter() {
        let msg = <></>;
    
        if (answers.length === questions.length && questions.length > 0) {
            if (!answers.includes("wrong")) {
                msg = (
                    <FinalMessage>
                        <span><Icon icon="party" /> Parabéns!</span>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </FinalMessage>
                )
            } else {
                msg = (
                    <FinalMessage>
                        <span><Icon icon="sad" /> Putz!</span>
                        <p>Ainda faltam alguns...Mas não desanime!</p>
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

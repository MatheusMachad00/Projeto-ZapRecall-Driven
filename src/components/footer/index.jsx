import { useState } from "react"
import { Baseboard } from "./style"
import Icon from "../icons/index"

export default function Footer({ data, answers }) {

    return (
        <Baseboard>
            <p>{answers.length}/{data.length} concluídos</p>
            <div className="footerIcons">
            {answers.length !== 0 ? 
            answers.map((answer, index) => <Icon key={index}icon={answer}/>) : <></>}
            </div>
        </Baseboard>
    );
}
import { useState } from "react"                                   
import { Baseboard } from "./style"

export default function Footer({data, answers}){
    return(
        <Baseboard>
        <p>{answers.length}/{data.length} concluídos</p>
        </Baseboard>
    );
}
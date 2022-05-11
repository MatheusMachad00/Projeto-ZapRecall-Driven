import { useState } from "react"
import Header from "../header/index"
import { CardStart, MainSection } from "./style"
import data from "../../data";


export default function Cards() {

    return (
        <>
            <Header />
            <MainSection>
            <CardStart className="card" >
                <p >Pergunta </p>
                <ion-icon name="play-outline"></ion-icon>
            </CardStart>
            </MainSection>

        </>
    );
}





function randomizer() {
    return Math.random() - 0.5;
}

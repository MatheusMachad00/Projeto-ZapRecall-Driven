import { useState } from "react"
import Header from "../header/index"
import Footer from "../footer";
import Card from "../card";
import { MainSection } from "./style"
import data from "../../data";


export default function Game() {
    let deck = data.sort(randomizer);
    const [questions, setQuestions] = useState([]);

    function createCards(){
        if (questions.length === 0) {
            deck.sort(randomizer);
            setQuestions([...data]);
            return <></>;
        }else {
            return(
                deck.map((card, index) => (
                    <Card
                    key = {index}
                    index = {index}
                    data = {questions}/>
                ))
            )
        }
    }

    const cardsGenerated = createCards()

    return (
        <>
            <Header />

            <MainSection>
                {cardsGenerated}
            </MainSection>

            <Footer />
        </>
    );
}

function randomizer() {
    return Math.random() - 0.5;
}


/* 

                {deck.map((d, index) => (
                    <CardStart key={index}>
                        <p >Pergunta {index + 1}</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </CardStart>
                ))}

*/


import { useState } from "react"
import { MainSection } from "./style"
import Header from "../header/index"
import Footer from "../footer";
import Card from "../card";
import data from "../../data";


export default function Game() {
    let deck = data.sort(randomizer);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

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
                    data = {questions}
                    setAnswers={setAnswers}/>
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

            <Footer data={data} answers={answers} questions={questions}/>
        </>
    );
}

function randomizer() {
    return Math.random() - 0.5;
}
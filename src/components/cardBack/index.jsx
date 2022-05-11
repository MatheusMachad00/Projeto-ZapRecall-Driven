import { useState } from "react";

export default function CardBack(props) {
    const { keyGame, answer, setRespostas, number } = props;
    const [cardState, setCardState] = useState([]);
    const [answered, setAnswered] = useState(false)

    function changeState(color) {
        setCardState(color);
        setRespostas(r => [...r,color]); //o "r" pega os estados anteriores
        setAnswered(true);
    }



    return (!answered ? <div key={keyGame} className="answer">
        <div className="answerText">{answer}</div>
        <div className="OptionsContainer">
            <div className="redBox" onClick={() => changeState("redIcon")}><p>Não lembrei</p></div>
            <div className="yellowBox" onClick={() => changeState("yellowIcon")}><p>Quase não lembrei</p></div>
            <div className="greenBox" onClick={() => changeState("greenIcon")}><p>Zap!</p></div>
        </div>
    </div> : <div key={keyGame} className="card">
        <p >Pergunta {number}</p>
        <ion-icon name="play-outline"></ion-icon> </div>);
}
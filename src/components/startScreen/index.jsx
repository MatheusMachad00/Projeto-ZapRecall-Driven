import img from "../../assets/logo.png"
import { useState } from "react";
import { FirstScreen } from "./style"
import Cards from "../cards";

export default function StartScreen() {
    const [game, setGame] = useState(false);

    function startGame() {
        setGame(true);
    };

    return (
        <>{!game ? <FirstScreen>
            <img src={img} alt="logo" />
            <p>ZapRecall</p>
            <button onClick={startGame}>Iniciar Recall!</button>
        </FirstScreen> : <Cards />}</>
    );
}

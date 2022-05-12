import img from "../../assets/logo.png"
import { useState } from "react";
import { FirstScreen } from "./style"
import Game from "../game";

export default function StartScreen() {
    const [game, setGame] = useState(false);

    return (
        <>{!game ? <FirstScreen>
            <img src={img} alt="logo" />
            <p>ZapRecall</p>
            <button onClick={() => setGame(true)}>Iniciar Recall!</button>
        </FirstScreen> : <Game />}</>
    );
}

import ReactDOM from "react-dom";
import StartScreen from "./components/startScreen";



function App() {
    return (
        <>
            <StartScreen />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
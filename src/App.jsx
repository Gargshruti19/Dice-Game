import StartGame from "./Components/StartGame";
import "./App.css";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

const App = () => {
	const [isGameStarted, setIsGameStarted] = useState(true);

	const toggleGamePlay = () => {
		setIsGameStarted((prev) => !prev);
	};
	return (
		<>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
	);
};

export default App;

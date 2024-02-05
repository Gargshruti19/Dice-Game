import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
	const [score, setScore] = useState(0);
	const [selectedNumber, setSelectedNumber] = useState();
	const [currentDice, setCurrentDice] = useState(1);
	const [error, setError] = useState("");
	const [showRules, setShowRules] = useState(false);
	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const rollDice = () => {
		if (!selectedNumber) {
			setError("You have not selected any number.");
			return;
		}

		const randomNumber = generateRandomNumber(1, 7);
		setCurrentDice(randomNumber);
		if (selectedNumber === randomNumber) {
			setScore((prev) => prev + randomNumber);
		} else {
			setScore((prev) => prev - 2);
		}

		setSelectedNumber(undefined);
	};

	const resetScore = () => {
		setScore(0);
	};
	return (
		<MainContainer>
			<div className="top-section">
				<TotalScore score={score} />
				<NumberSelector
					error={error}
					setError={setError}
					selectedNumber={selectedNumber}
					setSelectedNumber={setSelectedNumber}
				/>
			</div>
			<RollDice currentDice={currentDice} rollDice={rollDice} />
			<div className="btns">
				<OutlineButton onClick={resetScore}>Reset Game</OutlineButton>
				<Button onClick={() => setShowRules((prev) => !prev)}>
					{showRules ? "Hide " : "Show "}Rules
				</Button>
			</div>
			{showRules && <Rules />}
		</MainContainer>
	);
};

export default GamePlay;

const MainContainer = styled.div`
	max-width: 1180px;
	margin: 0 auto;
	height: 100vh;
	padding-top: 30px;
	.top-section {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
	.btns {
		display: flex;
		justify-content: center;
		gap: 20px;
		align-items: center;
		margin-top: 20px;
	}
	@media (max-width: 431px) {
		max-width: 300px;

		padding-top: 10px;
		.top-section {
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}
		.btns {
			flex-direction: column;
			gap: 15px;
			margin-top: 15px;
		}
	}
	@media (max-width: 476px) and (min-width: 431px) {
		padding-top: 10px;
		.top-section {
			flex-direction: column;
			gap: 20px;
		}
		.btns {
			flex-direction: column;
			gap: 16px;
		}
	}
	@media (max-width: 769px) and (min-width: 431px) {
		max-width: 475px;
		.top-section {
			align-items: center;
			gap: 20px;
		}
		.btns {
			gap: 18px;
			margin-top: 15px;
		}
	}
	@media (max-width: 1030px) and (min-width: 769px) {
		max-width: 700px;
		.top-section {
			align-items: center;
			gap: 30px;
		}
		.btns {
			gap: 16px;
		}
	}
	@media (max-width: 1200px) and (min-width: 1030px) {
		max-width: 900px;

		padding-top: 20px;
		.top-section {
			align-items: center;
			gap: 40px;
		}
		.btns {
			gap: 18px;
			margin-top: 15px;
		}
	}
`;

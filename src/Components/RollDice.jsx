/* eslint-disable react/prop-types */

import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
	return (
		<DiceContainer>
			<div className="dice" onClick={rollDice}>
				<img src={`/images/dice_${currentDice}.png`} alt="dice1" />
			</div>
			<p>Click on Dice to Roll</p>
		</DiceContainer>
	);
};

export default RollDice;

const DiceContainer = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	.dice {
		cursor: pointer;
	}
	p {
		font-size: 20px;
	}
	.dice img {
		height: 200px;
		width: 200px;
	}
	@media (max-width: 400px) {
		margin-top: 10px;
		.dice img {
			height: 150px;
			width: 150px;
		}
		p {
			font-size: 15px;
		}
	}
`;

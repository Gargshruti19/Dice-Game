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
	@media (max-width: 431px) {
		.dice img {
			height: 150px;
			width: 150px;
		}
		p {
			font-size: 15px;
		}
	}
	@media (max-width: 769px) and (min-width: 431px) {
		.dice img {
			height: 170px;
			width: 170px;
		}
		p {
			font-size: 18px;
		}
	}
	@media (max-width: 1030px) and (min-width: 769px) {
		.dice img {
			height: 190px;
			width: 190px;
		}
		p {
			font-size: 19px;
		}
	}

`;

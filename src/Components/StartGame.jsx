/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
	return (
		<Container>
			<div>
				<img src="images/dices.png" alt="dice-img" />
			</div>
			<div className="content">
				<h1>DICE GAME</h1>
				<Button onClick={toggle}>Play Now</Button>
			</div>
		</Container>
	);
};

export default StartGame;

const Container = styled.div`
	max-width: 1180px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	height: 100vh;
	.content {
		h1 {
			font-size: 96px;
			white-space: nowrap;
		}
	}
	@media (max-width: 431px) {
		flex-direction: column;
		max-width: 300px;
		gap: 40px;
		justify-content: center;
		overflow: hidden;
		div img {
			width: 280px;
			height: 240px;
			padding-top: 20px;
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 40px;

			h1 {
				font-size: 50px;
				white-space: nowrap;
			}
		}
	}
`;

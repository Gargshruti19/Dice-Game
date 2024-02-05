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
	justify-content: center;
	height: 100vh;
	gap: 10px;
	.content {
		h1 {
			font-size: 96px;
			white-space: nowrap;
		}
	}
	@media (max-width: 431px) {
		flex-direction: column;
		max-width: 300px;
		gap: 20px;
		justify-content: center;
		align-items: center;
		div img {
			width: 280px;
			height: 240px;
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;

			h1 {
				font-size: 50px;
			}
		}
	}
	@media (max-width: 769px) and (min-width: 431px) {
		flex-direction: column;
		max-width: 475px;
		gap: 20px;
		justify-content: center;
		align-items: center;
		div img {
			width: 340px;
			height: 260px;
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;

			h1 {
				font-size: 70px;
			}
		}
	}
	@media (max-width: 1030px) and (min-width: 769px) {
		max-width: 700px;
		div img {
			width: 380px;
			height: 300px;
		}
		.content {
			h1 {
				font-size: 80px;
			}
		}
	}
	@media (max-width: 1200px) and (min-width: 1030px) {
		max-width: 900px;
		div img {
			width: 500px;
			height: 400px;
		}
		.content {
			h1 {
				font-size: 85px;
			}
		}
	}
`;

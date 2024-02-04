/* eslint-disable react/prop-types */
import styled from "styled-components";

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
`;
const Button = styled.button`
	padding: 10px 18px;
	background: #000;
	border-radius: 5px;
	color: #fff;
	min-width: 220px;
	border: none;
	font-size: 16px;
	border: 1px solid transparent;
	transition: 0.4s background ease-in;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #000;
		border: 1px solid black;
		transition: 0.3s background ease-in;
	}
`;

import styled from "styled-components";

const Rules = () => {
	return (
		<RulesContainer>
			<h2>How to play dice game</h2>
			<div className="text">
				<p>1. Select any number</p>
				<p>2. Click on dice image</p>
				<p>
					3. after click on dice if selected number is equal to dice number you
					will get same point as dice{" "}
				</p>
				<p>4. if you get wrong guess then 2 point will be dedcuted </p>
			</div>
		</RulesContainer>
	);
};

export default Rules;

const RulesContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	height: 300px;
	margin-top: 40px;
	background-color: #fbf1f1;
	padding: 20px;
	h2 {
		font-size: 24px;
		font-weight: bold;
	}
	.text {
		margin-top: 20px;
	}
	@media (max-width: 431px) {
		width: 250px;
		height: 230px;
		h2 {
			font-size: 20px;
		}
		.text {
			margin-top: 18px;
			display: flex;
			flex-direction: column;
			gap: 5px;
		}
	}
	@media (max-width: 476px) and (min-width: 431px) {
		width: 320px;
		height: 230px;
	}
	@media (max-width: 769px) and (min-width: 431px) {
		width: 375px;
		height: 240px;
		h2 {
			font-size: 28px;
		}
		.text {
			margin-top: 18px;
			display: flex;
			flex-direction: column;
			gap: 6px;
		}
	}
`;

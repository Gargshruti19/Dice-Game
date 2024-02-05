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
	@media (max-width: 400px) {
		max-width: 300px;
		h2 {
			font-size: 20px;
		}
		.text {
			margin-top: 18px;
		}
	}
`;

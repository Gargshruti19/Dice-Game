/* eslint-disable react/prop-types */
import styled from "styled-components";

const TotalScore = ({ score }) => {
	return (
		<ScoreContainer>
			<h1>{score}</h1>
			<p>Total Score</p>
		</ScoreContainer>
	);
};

export default TotalScore;

const ScoreContainer = styled.div`
	max-width: 200px;
	text-align: center;
	h1 {
		font-size: 90px;
		line-height: 90px;
	}
	p {
		font-size: 22px;
		font-weight: 500;
	}
	@media (max-width: 400px) {
		h1 {
			font-size: 40px;
			line-height: 40px;
		}
		p {
			font-size: 15px;
			font-weight: 500;
		}
	}
`;

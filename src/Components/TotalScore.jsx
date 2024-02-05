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
	@media (max-width: 431px) {
		h1 {
			font-size: 50px;
			line-height: 50px;
		}
		p {
			font-size: 18px;
			font-weight: 500;
		}
	}
	@media (max-width: 769px) and (min-width: 431px) {
		h1 {
			font-size: 60px;
			line-height: 60px;
		}
		p {
			font-size: 18px;
			font-weight: 500;
		}
	}
	@media (max-width: 1030px) and (min-width: 769px) {
		h1 {
			font-size: 70px;
			line-height: 70px;
		}
		p {
			font-size: 19px;
			font-weight: 500;
		}
	}
	@media (max-width: 1200px) and (min-width: 1030px) {
		h1 {
			font-size: 80px;
			line-height: 80px;
		}
		p {
			font-size: 20px;
			font-weight: 500;
		}
	}
`;

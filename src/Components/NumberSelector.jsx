/* eslint-disable react/prop-types */

import styled from "styled-components";

const NumberSelector = ({
	selectedNumber,
	setSelectedNumber,
	error,
	setError,
}) => {
	const arrayNumbers = [1, 2, 3, 4, 5, 6];
	const numberSelectorHandler = (number) => {
		setSelectedNumber(number);
		setError("");
	};
	return (
		<NumberSelectorContainer>
			<p className="error">{error}</p>
			<div className="flex">
				{arrayNumbers.map((number, index) => (
					<Box
						isSelected={number === selectedNumber}
						key={index}
						onClick={() => numberSelectorHandler(number)}
					>
						{number}
					</Box>
				))}
			</div>
			<p>Select Number</p>
		</NumberSelectorContainer>
	);
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	.flex {
		display: flex;
		gap: 24px;
	}
	p {
		font-size: 24px;
		font-weight: 500;
	}
	.error {
		color: red;
		font-size: 15px;
		padding-bottom: 5px;
	}
	@media (max-width: 431px) {
		gap: 10px;

		.flex {
			gap: 18px;
		}
		p {
			font-size: 17px;
		}
		.error {
			font-size: 12px;
		}
	}
	@media (max-width: 769px) and (min-width: 431px) {
		gap: 14px;

		.flex {
			gap: 20px;
		}
		p {
			font-size: 18px;
		}
	}
	@media (max-width: 1030px) and (min-width: 769px) {
		gap: 14px;

		.flex {
			gap: 22px;
		}
	}
	@media (max-width: 1200px) and (min-width: 1030px) {
		gap: 15px;

		.flex {
			gap: 24px;
		}
		p {
			font-size: 19px;
		}
		.error {
			font-size: 14px;
		}
	}
`;

const Box = styled.div`
	height: 72px;
	width: 72px;
	border: 1px solid black;
	display: grid;
	place-items: center;
	font-size: 24px;
	font-weight: 700;
	cursor: pointer;
	background-color: ${(props) => (props.isSelected ? "black" : "white")};
	color: ${(props) => (props.isSelected ? "white" : "black")};

	@media (max-width: 431px) {
		height: 28px;
		width: 28px;
		font-size: 17px;
	}
	@media (max-width: 769px) and (min-width: 431px) {
		height: 40px;
		width: 40px;
		font-size: 19px;
	}
	@media (max-width: 1030px) and (min-width: 769px) {
		height: 55px;
		width: 55px;
		font-size: 20px;
	}
	@media (max-width: 1200px) and (min-width: 1030px) {
		height: 62px;
		width: 62px;
		font-size: 22px;
	}
`;

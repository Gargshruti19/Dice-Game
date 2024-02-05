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
	@media (max-width: 400px) {
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

	@media (max-width: 400px) {
		height: 28px;
		width: 28px;
		font-size: 17px;
	}
`;

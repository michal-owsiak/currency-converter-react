import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
  background-color: white;
  border: solid white;
  border-radius: 10px;
  padding: 16px 13% 10px;

	@media (max-width: 767px) {
    padding: 16px 40px 10px;
	}
`;

export const Container = styled.div`
	padding: 34px 0 24px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 50px;

	@media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const CurrenciesContainer = styled(Container)`
	padding: 8px 0;
`;

export const LabelText = styled.span`
	font-size: 13px;
  font-weight: 500;
  color: #5e5e5e;
  display: flex;
  flex-direction: column;
  justify-content: center;

	@media (max-width: 767px) {
  	text-align: center;
  }
`;

export const Input = styled.input`
	color: #366bff;
  background-color: white;
  border: 0;
  border-bottom: 2px solid hsl(224, 100%, 61%);
  padding: 13px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  text-align: center;

	&:hover {
		background-color: #f3f7ff;
  	transition: background-color 0.5s ease;
	}
`;

export const Select = styled.select`
	border: 1.5px solid #cccaca;
  border-radius: 6px;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #4c4c4c;
  background-color: white;
  outline-color: #0051ff;
  text-align: center;

	&:hover {
		background-color: #f3f7ff;
  	border: 1.5px solid #0051ff;
  	transition: all 0.5s ease;
	}

	@media (max-width: 767px) {
    padding: 12px 12px 12px 24px;
  }
`;

export const ButtonsContainer = styled.div`
	padding: 0 0 18px;
`;

export const Button = styled.button`
	display: block;
  cursor: pointer;
  width: 90%;
  height: 55px;
  color: white;
  border: 1.5px solid #0051ff;
  border-radius: 50px;
  background-color: #0051ff;
  padding: 12px 36px;
  font-weight: 600;
  font-size: 15px;
  margin: 12px auto;
	
	&:hover {
		background-color: #003cbd;
  	transition: all 0.5s ease;
  	border: 1.5px solid #003cbd;
	}

	${({ reset }) => reset && css`
		color: #266bff;
		background-color: white;
		font-weight: 700;
		transition: all 0.5s ease;

		&:hover {
			color: white;
		}
	`}

	@media (max-width: 767px) {
    width: 100%;
  }
`;
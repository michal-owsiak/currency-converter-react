import styled from "styled-components";
import Swap from "../assets/swap.png";

export const Fieldset = styled.fieldset`
  background: ${({ theme }) => theme.color.white};
  border: solid ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 16px 13% 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px 30px 10px;
  }
`;

export const Container = styled.div`
  padding: 24px 0 24px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 34px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const CurrenciesContainer = styled(Container)`
  padding: 8px 0;
`;

export const LabelText = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.scorpion};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.dodgerBlue};
  background: ${({ theme }) => theme.color.white};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.dodgerBlue};
  padding: 13px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.color.zircon};
    transition: background-color 0.5s ease;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.color.silver};
  border-radius: 6px;
  transition: 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.zircon};
    border: 1.5px solid ${({ theme }) => theme.color.dodgerBlue};
  }
`;

export const Select = styled.select`
  border: none;
  padding: 10px 0;
  width: 85%;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.tundora};
  background: ${({ theme }) => theme.color.white};
  outline: ${({ theme }) => theme.color.dodgerBlue};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.color.zircon};
    transition: all 0.5s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px 12px 12px 24px;
  }
`;

export const FlagIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;

export const SwapButtonContainer = styled.div`
  padding-left: 210px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`

export const SwapButton = styled.div`
  background: url(${Swap});
  background-size: contain;
  width: 26px;
  height: 26px;
  margin: 8px 0;
  cursor: pointer;
  transition: 0.5s;
  transform: rotate(
    ${props => (props.isRotated ? "180deg" : "0")}
  );

  &:hover {
    opacity: 0.91;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
    height: 32px;
    margin: 12px 0;
  }
`;

export const ButtonsContainer = styled.div`
  padding: 0 0 18px;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 100%;
  height: 55px;
  color: ${({ theme }) => theme.color.white};
  border: 1.5px solid ${({ theme }) => theme.color.blueRibbon};
  border-radius: 50px;
  background: ${({ theme }) => theme.color.blueRibbon};
  font-weight: 600;
  font-size: 13px;
  margin: 12px auto;
  height: 48px;
	
  &:hover {
    background: ${({ theme }) => theme.color.cobalt};
    transition: all 0.5s ease;
    border: 1.5px solid ${({ theme }) => theme.color.cobalt};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;

export const ResetButton = styled(Button)`
  color: ${({ theme }) => theme.color.dodgerBlue};
  background: ${({ theme }) => theme.color.white};
  font-weight: 700;
  transition: all 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
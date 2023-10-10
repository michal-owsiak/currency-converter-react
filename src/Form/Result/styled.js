import styled from "styled-components";

export const StyledResult = styled.p`
  padding: 10px 0 15px;
  text-align: center;
  font-size: 22px;
	font-weight: 700;
  color: ${({ theme }) => theme.color.dodgerBlue};
  margin: 10px auto 16px;
  line-height: 1.4;
`;

export const ResultFrom = styled.span`
	font-weight: 300;
  color: ${({ theme }) => theme.color.scorpion};
`;

export const BreakingCaption = styled.span`
	word-break: break-word;
`;
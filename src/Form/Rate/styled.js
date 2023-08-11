import styled from "styled-components";

export const StyledRate = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 28px 0 8px;
  margin: 0;
  color: ${({ theme }) => theme.color.dodgerBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
		text-align: center;
	}
`;
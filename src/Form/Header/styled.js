import styled from "styled-components";

export const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  margin: 40px 0 10px;
  ;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 30px 0 10px;
  }
`;
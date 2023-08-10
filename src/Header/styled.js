import styled from "styled-components";

export const StyledHeader = styled.h1`
  max-width: 400px;
  font-size: 44px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  margin: 8px auto;
  line-height: 0.88;
`;
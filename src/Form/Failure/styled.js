import styled from "styled-components";

export const StyledFailure = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh
`;

export const ErrorImage = styled.img`
  margin: 0 0 20px;
  width: 130px;
  height: 130px;
  opacity: 0.95;
`;
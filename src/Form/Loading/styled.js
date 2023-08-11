import styled from "styled-components";

export const StyledLoading = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: center;
  height: 90vh
`;

export const LoadingImage = styled.img`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  animation: spin 5s infinite linear;
`;
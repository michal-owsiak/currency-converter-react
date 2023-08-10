import styled from "styled-components";

export const StyledClock = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  line-height: 1.4;
`;
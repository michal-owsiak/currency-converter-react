import styled from "styled-components";

export const StyledClock = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0 18px;
  line-height: 1.4;
`;
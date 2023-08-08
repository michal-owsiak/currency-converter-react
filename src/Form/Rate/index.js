import { StyledRate } from "./styled";

const Rate = ({ currencyFrom, currencyTo, rate }) => (
  <StyledRate>
    1 {currencyFrom} = {rate.toFixed(2)} {currencyTo}
  </StyledRate>
);

export default Rate;
import "./style.css"

const Rate = ({ currencyFrom, currencyTo, rate }) => (
  <p className="rate">
    1 {currencyFrom} = {rate.toFixed(2)} {currencyTo}
  </p>
);

export default Rate;
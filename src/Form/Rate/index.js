import "./style.css"

const Rate = ({ currencyFrom, currencyTo, rate }) => (
  <p className="rate">
    <span>
      1 {currencyFrom}
    </span> =
    <span>
      {rate} {currencyTo}
    </span>
  </p>
);

export default Rate;
import "./style.css"

const Result = ({ result }) => (
  <p className="result">
    {result === undefined ? (
      <span className="result--from">
        0.00
      </span>
    ) : (
      <>
        <span className="result--from">
          {result.sourceAmount.toFixed(2)} {result.currencyFrom} = {""}
        </span>
        <span className="result--to">
          {result.calculatedAmount.toFixed(2)} {result.currencyTo}
        </span>
      </>
    )}
  </p>
);

export default Result;
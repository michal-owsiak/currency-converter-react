import "./style.css"

const Result = ({ result }) => (
  <p className="result">
    {!result ? (
      <span className="result--from">
        0.00
      </span>
    ) : (
      <>
        <span className="result--from">
          <span className="result--nonbreaking">
            {result.sourceAmount.toFixed(2)}
          </span>
          &nbsp;{result.currencyFrom}&nbsp;= {""}
        </span>
        <span className="result--to">
          <span className="result--nonbreaking">
            {result.calculatedAmount.toFixed(2)}
          </span>
          &nbsp;{result.currencyTo}
        </span>
      </>
    )}
  </p>
);

export default Result;
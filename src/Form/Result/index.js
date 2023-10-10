import { StyledResult, ResultFrom, BreakingCaption } from "./styled";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const Result = ({ result }) => (
  <>
    {!result ? (
      <StyledResult>
        <ResultFrom>
          <BreakingCaption>
            0.00
          </BreakingCaption>
          &nbsp;EUR = {""}
        </ResultFrom>
        <BreakingCaption>
          0.00
        </BreakingCaption>
        &nbsp;PLN
      </StyledResult>
    ) : (
      <StyledResult>
        <ResultFrom>
          <BreakingCaption>
            {formatNumber(result.sourceAmount.toFixed(2))}
          </BreakingCaption>
          &nbsp;{result.currencyFrom}&nbsp;= {""}
        </ResultFrom>
        <BreakingCaption>
          {formatNumber(result.calculatedAmount.toFixed(2))}
        </BreakingCaption>
        &nbsp;{result.currencyTo}
      </StyledResult>
    )}
  </>
);

export default Result;
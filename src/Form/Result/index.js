import { StyledResult, ResultFrom, BreakingCaption } from "./styled";

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
            {result.sourceAmount.toFixed(2)}
          </BreakingCaption>
          &nbsp;{result.currencyFrom}&nbsp;= {""}
        </ResultFrom>
        <BreakingCaption>
          {result.calculatedAmount.toFixed(2)}
        </BreakingCaption>
        &nbsp;{result.currencyTo}
      </StyledResult>
    )}
  </>
);

export default Result;
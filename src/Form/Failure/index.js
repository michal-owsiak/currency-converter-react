import { StyledFailure, ErrorImage } from "./styled";

const Failure = () => (
  <StyledFailure>
    <ErrorImage
      src="https://github.com/michal-owsiak/currency-converter-react/blob/main/src/assets/error.png?raw=true"
      alt="Error"
      width="160"
      height="160"
    />
    <p>
      Something went wrong fetching the data.<br />
      Please check your internet connection and try again.
    </p>
  </StyledFailure>
);

export default Failure;
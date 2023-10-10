import { StyledFailure, ErrorImage } from "./styled";
import error from "../../assets/error.png";

const Failure = () => (
  <StyledFailure>
    <ErrorImage
      src={error}
      alt="Error"
    />
    <p>
      Oops! Something went wrong fetching the data.<br />
      Please try again later.
    </p>
  </StyledFailure>
);

export default Failure;
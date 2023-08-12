import { StyledFailure, ErrorImage } from "./styled";

const Failure = () => (
  <StyledFailure>
    <ErrorImage
      src="https://i.postimg.cc/Z5DL9xzB/error.png"
      alt="Error"
      width="160"
      height="160"
    />
    <p>
      Something went wrong fetching the data.<br />
      Please check your internet connection and try reloading the page.
    </p>
  </StyledFailure>
);

export default Failure;
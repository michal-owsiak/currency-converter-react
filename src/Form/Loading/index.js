import { StyledLoading, LoadingImage } from "./styled"
import loading from "../../assets/loading.png";

const Loading = () => (
  <StyledLoading>
    <LoadingImage
      src={loading}
      alt="Loading..."
    />
    Loading exchange rates...
  </StyledLoading>
);

export default Loading;
import { StyledLoading, LoadingImage } from "./styled"

const Loading = () => (
  <StyledLoading>
    <LoadingImage
      src="https://i.postimg.cc/FzwZmVqg/loading.png" 
      alt="Loading..."
      width="220"
      height="220"
    />
    Loading exchange rates...
  </StyledLoading>
);

export default Loading;
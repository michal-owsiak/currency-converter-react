import { StyledLoading, LoadingImage } from "./styled"

const Loading = () => (
  <StyledLoading>
    <LoadingImage
      src="https://github.com/michal-owsiak/currency-converter-react/blob/main/src/assets/loading.png?raw=true" 
      alt="Loading..."
      width="220"
      height="220"
    />
    Loading exchange rates...
  </StyledLoading>
);

export default Loading;
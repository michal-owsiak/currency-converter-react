import { StyledHeader } from "./styled";
import logo from "../../assets/logo.svg"

const Header = () => (
  <StyledHeader>
      <img src={logo} alt="Currency Converter" />
  </StyledHeader>
);

export default Header;
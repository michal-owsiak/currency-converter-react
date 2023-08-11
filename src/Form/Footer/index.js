import { StyledFooter } from "./styled";

const Footer = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <StyledFooter>
      <p>
        The exchange rates are sourced from financial data providers and banks,
        including&nbsp;the&nbsp;European&nbsp;Central&nbsp;Bank.<br />
        Data are current as of {formattedDate}.
      </p>
    </StyledFooter>
  );
};


export default Footer;
import {
  Fieldset,
  Container,
  CurrenciesContainer,
  ButtonsContainer,
  LabelText,
  Input,
  FlagIcon,
  SelectContainer,
  Select,
  Button,
  ResetButton
} from "./styled";
import { useState } from "react";
import Result from "./Result";
import Rate from "./Rate";
import Loading from "./Loading";
import Failure from "./Failure";
import Header from "./Header";
import Clock from "./Clock";
import Footer from "./Footer"
import { useAPIRates } from "./useAPIRates";
import { currencyLabels } from "./currencyLabels"
import { currencyFlags } from "./currencyFlags";

const Form = () => {
  const { APIRates, error } = useAPIRates();

  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("PLN");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculateRate = (currencyFrom, currencyTo) => {
    if (!APIRates.data) {
      return 0;
    }

    const rateFrom = 1 / APIRates.data[currencyFrom];
    const rateTo = 1 / APIRates.data[currencyTo];

    return rateFrom / rateTo;
  };

  const calculateResult = (currencyFrom, currencyTo, amount) => {
    const rate = calculateRate(currencyFrom, currencyTo);

    setResult({
      sourceAmount: +amount,
      calculatedAmount: rate * amount,
      currencyFrom,
      currencyTo,
    });
  };

  const rate = calculateRate(currencyFrom, currencyTo);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyFrom, currencyTo, amount)
  };

  const onReset = () => {
    setCurrencyFrom("EUR");
    setCurrencyTo("PLN");
    setAmount("");
  };

  if (error) {
    return <Failure />;
  }

  if (!APIRates.data) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Clock />
      <form onSubmit={onSubmit}>
        <Fieldset>
          <label>
            <Container>
              <LabelText>Amount</LabelText>
              <Input
                value={amount}
                onChange={({ target }) =>
                  setAmount(target.value)}
                type="number"
                name="amount"
                step="0.01"
                min="0"
                placeholder="0.00"
              />
            </Container>
          </label>
          <label>
            <CurrenciesContainer>
              <LabelText>From</LabelText>
              <SelectContainer>
                <FlagIcon
                  src={currencyFlags[currencyFrom]}
                  alt={`${currencyFrom} flag`}
                  className="currency-flag"
                />
                <Select
                  name="currencyFrom"
                  value={currencyFrom}
                  onChange={({ target }) =>
                    setCurrencyFrom(target.value)}
                >
                  {!!APIRates.data &&
                    Object.keys(APIRates.data).map((currency => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currencyLabels[currency]}
                      </option>
                    )))}
                </Select>
              </SelectContainer>
            </CurrenciesContainer>
          </label>
          <label>
            <CurrenciesContainer>
              <LabelText>To</LabelText>
              <SelectContainer>
                <FlagIcon
                  src={currencyFlags[currencyTo]}
                  alt={`${currencyTo} flag`}
                  className="currency-flag"
                />
                <Select
                  name="currencyTo"
                  value={currencyTo}
                  onChange={({ target }) => setCurrencyTo(target.value)}
                >
                  {!!APIRates.data &&
                    Object.keys(APIRates.data).map((currency => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currencyLabels[currency]}
                      </option>
                    )))}
                </Select>
              </SelectContainer>
            </CurrenciesContainer>
          </label>
          <Rate
            currencyFrom={currencyFrom}
            currencyTo={currencyTo}
            rate={rate}
          />
          <Result result={result} />
          <ButtonsContainer>
            <Button>
              Convert
            </Button>
            <ResetButton onClick={onReset}>
              Reset
            </ResetButton>
          </ButtonsContainer>
        </Fieldset>
      </form>
      <Footer />
    </>
  );
};

export default Form;
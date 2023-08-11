import {
  Fieldset,
  Container,
  CurrenciesContainer,
  ButtonsContainer,
  LabelText,
  Input,
  Select,
  Button,
  ResetButton
} from "./styled";
import { useState } from 'react';
import Result from "./Result";
import Rate from "./Rate";
import { useAPIRates } from './useAPIRates';
import Loading from "./Loading";
import Header from './Header';
import Clock from './Clock';


const Form = () => {
  const APIRates = useAPIRates();

  const [currencyFrom, setCurrencyFrom] = useState("PLN");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [amount, setAmount] = useState("");

  const [result, setResult] = useState(null);

  const calculateRate = (currencyFrom, currencyTo) => {
    if (!APIRates.rates) {
      return 0;
    }

    const rateFrom = APIRates.rates[currencyFrom];
    const rateTo = APIRates.rates[currencyTo];

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

  // const initResult = () => {
  //   setResult(undefined);
  // };

  // const initialState = {
  //   currencyFrom: ratesData.rates[currencyFrom],
  //   currencyTo: ratesData.rates[currencyFrom],
  //   amount: ""
  // };

  const rate = calculateRate(currencyFrom, currencyTo);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyFrom, currencyTo, amount)
  };

  // const onReset = () => {
  //   setCurrencyFrom(initialState.currencyFrom);
  //   setCurrencyTo(initialState.currencyTo);
  //   setAmount(initialState.amount);
  //   initResult();
  // };

  if (!APIRates.rates) {
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
                required
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
              <Select
                name="currencyFrom"
                value={currencyFrom}
                onChange={({ target }) =>
                  setCurrencyFrom(target.value)}
              >
                {!!APIRates.rates && Object.keys(APIRates.rates).map((currency => (
                  <option
                    key={currency}
                    value={currency}
                  >
                    {currency}
                  </option>
                )))}
              </Select>
            </CurrenciesContainer>
          </label>
          <label>
            <CurrenciesContainer>
              <LabelText>To</LabelText>
              <Select
                name="currencyTo"
                defaultValue="EUR"
                onChange={({ target }) => setCurrencyTo(target.value)}
              >
                {!!APIRates.rates && Object.keys(APIRates.rates).map((currency => (
                  <option
                    key={currency}
                    value={currency}
                  >
                    {currency}
                  </option>
                )))}
              </Select>
            </CurrenciesContainer>
          </label>
          <Rate
            currencyFrom={currencyFrom}
            currencyTo={currencyTo}
            rate={rate}
          />
          <Result
            result={result}
          />
          <ButtonsContainer>
            <Button>
              Convert
            </Button>
            <ResetButton>
              Reset
            </ResetButton>
          </ButtonsContainer>
        </Fieldset>
      </form>
      {/* <Footer/> */}
    </>
  );
};

export default Form;
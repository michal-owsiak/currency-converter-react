import { 
  Fieldset, 
  Container, 
  CurrenciesContainer, 
  ButtonsContainer, 
  LabelText, 
  Input, 
  Select, 
  Button 
} from "./styled";
import { useState } from 'react';
import { currencies } from "./currencies.js";
import Result from "./Result";
import Rate from "./Rate";

const Form = ({ calculateRate, calculateResult, initResult, result }) => {
  const initialState = {
    currencyFrom: currencies[0].name,
    currencyTo: currencies[1].name,
    amount: ""
  };

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].name);
  const [currencyTo, setCurrencyTo] = useState(currencies[1].name);
  const [amount, setAmount] = useState("");

  const rate = calculateRate(currencyFrom, currencyTo);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyFrom, currencyTo, amount)
  };

  const onReset = () => {
    setCurrencyFrom(initialState.currencyFrom);
    setCurrencyTo(initialState.currencyTo);
    setAmount(initialState.amount);
    initResult();
  };

  return (
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
            <Select
              name="currencyFrom"
              value={currencyFrom}
              onChange={({ target }) => 
                setCurrencyFrom(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.name}
                  value={currency.name}
                >
                  {currency.name}
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
              {currencies.map((currency => (
                <option
                  key={currency.name}
                  value={currency.name}
                >
                  {currency.name}
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
          <Button type="submit">
            Convert
          </Button>
          <Button
            reset
            type="reset"
            className="form__button form__button--reset"
            onClick={onReset}
          >
            Reset
          </Button>
        </ButtonsContainer>
      </Fieldset>
    </form>
  );
};

export default Form;
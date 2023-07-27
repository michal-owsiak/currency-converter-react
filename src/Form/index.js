import "./style.css";
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
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <p>
          <label>
            <div className="form__amountContainer">
              <span className="form__labelText">
                Amount
              </span>
              <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                className="form__amountField"
                type="number"
                name="amount"
                step="0.01"
                min="0"
                placeholder="0.00"
              />
            </div>
          </label>
        </p>
        <p>
          <label>
            <div className="form__currenciesContainer">
              <span className="form__labelText form__labelText--currencies">
                From
              </span>
              <select
                className="form__currencyField"
                name="currencyFrom"
                value={currencyFrom}
                onChange={({ target }) => setCurrencyFrom(target.value)}
              >
                {currencies.map((currency => (
                  <option
                    key={currency.name}
                    value={currency.name}
                  >
                    {currency.name}
                  </option>
                )))}
              </select>
            </div>
          </label>
        </p>
        <p>
          <label>
            <div className="form__currenciesContainer">
              <span className="form__labelText form__labelText--currencies">
                To
              </span>
              <select
                className="form__currencyField"
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
              </select>
            </div>
          </label>
        </p>
        <Rate
          currencyFrom={currencyFrom}
          currencyTo={currencyTo}
          rate={rate}
        />
        <Result 
          result={result}
        />
        <div className="form__buttonsContainer">
          <p>
            <button
              className="form__button"
              type="submit"
            >
              Convert
            </button>
          </p>
          <p>
            <button
              type="reset"
              className="form__button form__button--reset"
              onClick={onReset}
            >
              Reset
            </button>
          </p>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
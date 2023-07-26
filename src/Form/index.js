import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <p>
        <label>
          <div className="form__amountContainer">
            <span className="form__labelText">
              Kwota:
            </span>
            <input
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
              Przelicz z:
            </span>
            <select className="form__currencyField"
              name="currencyFrom"
            >
              <option selected>PLN</option>
              <option>EUR</option>
              <option>USD</option>
              <option>CHF</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </div>
        </label>
      </p>
      <p>
        <label>
          <div className="form__currenciesContainer">
            <span className="form__labelText form__labelText--currencies">
              Przelicz na:
            </span>
            <select className="form__currencyField"
              name="currencyTo"
            >
              <option>PLN</option>
              <option selected>EUR</option>
              <option>USD</option>
              <option>CHF</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </div>
        </label>
      </p>
      <p className="form__currencyRate">
        <span>
          1 PLN
        </span> =
        <span>
          0.22 EUR
        </span>
      </p>
      <div className="form__result">
        <p>
          <span className="form__result--from">
            0.00
          </span>
          <span className="form__result--to" />
        </p>
      </div>
      <div className="form__buttonsContainer">
        <p>
          <button className="form__button">
            Oblicz
          </button>
        </p>
        <p>
          <button
            type="reset"
            className="form__button form__button--reset"
          >
            Resetuj
          </button>
        </p>
      </div>
    </fieldset>
  </form>
);

export default Form;
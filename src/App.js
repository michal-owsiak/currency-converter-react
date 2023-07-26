import './App.css';

function App() {
  return (
    <main>
      <header class="header">
        <h1 class="header__title">
          kalkulator walutowy
        </h1>
      </header>
      <div class="formContainer">
        <form class="form form js-form">
          <fieldset class="form__fieldset">
            <p>
              <label>
                <div class="amountContainer">
                  <span class="form__labelText">
                    Kwota:
                  </span>
                  <input
                    class="form__amountField js-amountElement"
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
                <div class="currenciesContainer">
                  <span class="form__labelText form__labelText--currencies">
                    Przelicz z:
                  </span>
                  <select class="form__currencyField js-currencyFrom"
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
                <div class="currenciesContainer">
                  <span class="form__labelText form__labelText--currencies">
                    Przelicz na:
                  </span>
                  <select class="form__currencyField js-currencyTo"
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
            <p class="form__currencyRate">
              <span class="js-currencyFixed">
                1 PLN
              </span> =
              <span class="js-currencyExchanged">
                0.22 EUR
              </span>
            </p>
            <div class="form__result">
              <p>
                <span class="form__result--from js-resultFrom">
                  0.00
                </span>
                <span class="form__result--to js-resultTo" />
              </p>
            </div>
            <div class="form__buttonsContainer">
              <p>
                <button class="form__button">
                  Oblicz
                </button>
              </p>
              <p>
                <button
                  type="reset"
                  class="form__button form__button--reset"
                >
                  Resetuj
                </button>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
      <footer class="footer">
        Kursy obliczane na podstawie danych z dnia 14.04.2023
      </footer>
    </main>
  );
}

export default App;

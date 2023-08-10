import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { currencies } from './Form/currencies';
import Clock from './Clock';
import { Container } from "./Container/styled";

function App() {
  const [result, setResult] = useState(null);

  const calculateRate = (currencyFrom, currencyTo) => {
    const rateFrom = currencies.find(({ name }) => name === currencyFrom).rate;
    const rateTo = currencies.find(({ name }) => name === currencyTo).rate;

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

  const initResult = () => {
    setResult(undefined);
  };

  return (
    <>
      <Header />
      <Clock />
      <Container>
          <Form 
            result={result}
            calculateResult={calculateResult}
            calculateRate={calculateRate}
            initResult={initResult}
          />
      </Container>
      <Footer/>
    </>
  );
};

export default App;
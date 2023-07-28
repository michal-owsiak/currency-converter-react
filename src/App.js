import './App.css';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import { useState } from 'react';
import { currencies } from './Form/currencies';

function App() {
  const [result, setResult] = useState();

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
    <main>
      <Header />
      <Container 
        content={
          <Form 
            result={result}
            calculateResult={calculateResult}
            calculateRate={calculateRate}
            initResult={initResult}
          />
        } 
      />
      <Footer/>
    </main>
  );
};

export default App;
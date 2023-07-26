import './App.css';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import { useState } from 'react';
import { currencies } from './Form/currencies';



function App() {
  const [result, setResult] = useState({});

  const calculateResult = (currencyFrom, currencyTo, amount) => {
    const rateFrom = currencies.find(({ name }) => name === currencyFrom).rate
    const rateTo = currencies.find(({ name }) => name === currencyTo).rate

    setResult({
      sourceAmount: +amount,
      calculatedAmount: (rateFrom / rateTo) * amount,
      currencyFrom,
      currencyTo,
    });
  };

  return (
    <main>
      <Header 
        title="currency converter" 
      />
      <Container 
        content={
          <Form 
            result={result}
            calculateResult={calculateResult}
          />
        } 
      />
      <Footer
        info="Rates calculated based on data as of 26.07.2023" 
      />
    </main>
  );
};

export default App;
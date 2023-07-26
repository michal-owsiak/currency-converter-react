import './App.css';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

function App() {
  return (
    <main>
      <Header
        title="currency converter"
      />
      <Container
        content={<Form />}
      />
      <Footer
        info="Rates calculated based on data as of 14.04.2023"
      />
    </main>
  );
}

export default App;
import './App.css';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import FormContainer from './FormContainer';

function App() {
  return (
    <main>
      <Header title="kalkulator walutowy" />
      <FormContainer content={<Form />}/>  
      <Footer />
    </main>
  );
}

export default App;

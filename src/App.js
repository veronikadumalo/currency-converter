import './App.css';
import 'currency-flags/dist/currency-flags.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator';
import PageContent from './components/PageContent';
import style from 'styled-components';

function App() {
  return (
    <AppWrapp>
      <PageContent />
      <Calculator />
    </AppWrapp>
  );
}

const AppWrapp = style.div`
    color: #000d33;
    background: rgba(255,255,255,0.2);
    width: 70%;
    margin: 10rem auto;
    text-align: center;
    padding: 5rem 0;
`
export default App;

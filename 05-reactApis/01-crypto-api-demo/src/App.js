import logo from './logo.svg';
import './App.css';
import CoinGenerator from './components/CoinGenerator';
import CoinGeneratorWithAxios from './components/CoinGeneratorWithAxios';

function App() {
  return (
    <div className="App">
      <h1>Crypto Coin Viewer</h1>
      {/* <CoinGenerator></CoinGenerator> */}
      <CoinGeneratorWithAxios></CoinGeneratorWithAxios>

    </div>
  );
}

export default App;

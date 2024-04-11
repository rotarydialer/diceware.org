import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Generate randomized <a href="https://theworld.com/~reinhold/diceware.html" target="_blank">Diceware</a> passphrases (as made famous in <a href="https://xkcd.com/936/">xkcd #936</a>).
        </p>
      </header>

      <Wrapper />
    </div>
  );
}

export default App;

import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='siteTitle'>
          Generate randomized <a href="https://theworld.com/~reinhold/diceware.html" target="_blank" rel="noreferrer">Diceware</a> passphrases.
        </div>
        <div className='siteTagline'>
          <i>(as made famous in <a href="https://xkcd.com/936/"  target="_blank" rel="noreferrer">xkcd #936</a>)</i>
        </div>
      </header>

      <Wrapper />
    </div>
  );
}

export default App;

import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='siteTitle'>
          Generate randomized <a href="https://theworld.com/~reinhold/diceware.html" target="_blank" rel="noreferrer">Diceware</a> passphrases.<sup>*</sup>
        </h1>
      </header>

      <div className='content'>
        <Wrapper />
      </div>

      <footer className="App-footer">
        <><sub><sup>*</sup>As made famous in <a href="https://xkcd.com/936/"  target="_blank" rel="noreferrer">xkcd #936</a></sub></>
        <div>© 2024, Christopher Drew / rooftree.io. The code for this site is open source, and can be found <a href="https://github.com/rotarydialer/diceware.org" target="_blank" rel="noreferrer">on GitHub here.</a></div>
      </footer>
    </div>
  );
}

export default App;

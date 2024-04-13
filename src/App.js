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
        <>
          <sub><sup>*</sup>
          
          As made famous by <a href="https://xkcd.com/936/"  target="_blank" rel="noreferrer">xkcd #936</a>.
          For more info on Diceware, see <a href="https://theintercept.com/2015/03/26/passphrases-can-memorize-attackers-cant-guess/" target="_blank" rel="noreferrer">this article</a>, and the <a href="https://en.wikipedia.org/wiki/Diceware" target="_blank" rel="noreferrer">Wikipedia entry</a>.</sub></>

        <div className="copyright">© 2024, Christopher Drew / rooftree.io. The code for this site is open source, and can be found <a href="https://github.com/rotarydialer/diceware.org" target="_blank" rel="noreferrer">here on GitHub</a>.</div>    
      </footer>
    </div>
  );
}

export default App;

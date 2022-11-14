// WDGTR
// NCWH

import logo from './logo.svg';
import './App.css';
import Sets from './components/sets'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Howdy!
        </p>
      </header>
      <body>
        <Sets/>
      </body>
    </div>
  );
}

export default App;

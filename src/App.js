import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <header className="App-header">
      <h1 data-testId="testId-1">Hello</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </header>
    </div>
  );
}

export default App;

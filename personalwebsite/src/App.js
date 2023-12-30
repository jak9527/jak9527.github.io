import logo from './logo.svg';
import './App.css';
function MyButton(){
  function handleclick(){
    alert('You\'ve clicked me! You bastard!')
  }
  return (
    <button className="testButton" onClick={handleclick}>
      I'm a button
      <br />
      It's important that your component function be named with CamelCase
    </button>
  )
}
function App() {
  return (
    <div className="App">
      <MyButton />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

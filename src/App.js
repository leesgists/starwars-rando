import logo from './new_logo.svg';
import './App.css';
// import Item from './MyItem';
import StarWars from './StarWars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Item name="Lee" /> */}
        {/* <Item name="Sunny" /> */}
        <StarWars/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a> */}
      </header>
    </div>
  );
}

export default App;

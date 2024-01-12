import logo from './logo.svg';
import './App.css';

function App() {
  const blueTextStyle = {
    color: 'blue',
  };
  const greenTextStyle = {
    color: 'green',
  };
  const greyTextStyle = {
    color: 'grey',
    fontSize: '10px'
  };
  const blackTextStyle = {
    color: 'black',
    fontSize: '10px'
  };

  return (
    <div className="App">
      <header className="App-header">
      <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Search</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
        <p>
          hello <b style={blueTextStyle}>React</b>
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <i style={greenTextStyle}>
          This is React logo!
        </i>
        <i style={greyTextStyle}>
          (i don't know why it is here either)
        </i>
        <p style={blackTextStyle}>The library for web and native user interfaces</p>
      </header>
    </div>
  );
}

export default App;

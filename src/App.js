import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const handleClick = () => {
    console.log('true to redirect')
  };
  const handledoLater = () => {
    console.log("handledoLater")
  };
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Turn on push notification
        </p>
      </div>
      <div className="App-body">
        <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          What updates will I receive
        </a>
      </div>
      <div className="App-footer">
        <button onClick={handleClick}>Turn it on</button>
        <button onClick={handledoLater}>I'll do it later</button>
      </div>
    </div>
  );
}

export default App;

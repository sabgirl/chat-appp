import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./Components/Contact";


const Contact1 = {
  image : "https://randomuser.me/api/portraits/women/50.jpg",
  name : "Priscilla Foster",
  online : "online",
};

function App() {
  return (
    <div className="App">
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
        <Contact {...Contact1}/>
      </header>
    </div>
  );
}

export default App;

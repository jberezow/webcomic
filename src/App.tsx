import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Comic } from './comic';
import yellowBuckets from '../comics/images/yellowBuckets.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Comic image={yellowBuckets} alt="Weber Smash" caption="The Predators incite controversy by electing to swap navy blue helmets for golden." />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [paramValue, setParamValue] = useState('');

  useEffect(() => {
    // Parse the query string from the current URL
    const queryParams = new URLSearchParams(window.location.search);
    const param = queryParams.get('code');
    if (param) {
      setParamValue(param);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        {paramValue && (
          <p>Query parameter value is: {paramValue}</p>
        )}
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

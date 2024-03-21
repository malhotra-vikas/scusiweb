import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    // Parse the query string from the current URL
    const params = new URLSearchParams(window.location.search);
    const allParams = {};
    for (const [key, value] of params) {
      allParams[key] = value;
    }
    console.log("All query parameters:", allParams);
    setQueryParams(allParams);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        {Object.keys(queryParams).length > 0 && (
          <div>
            <h3>Query Parameters:</h3>
            {Object.entries(queryParams).map(([key, value]) => (
              <p key={key}>{key}: {value}</p>
            ))}
          </div>
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

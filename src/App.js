import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [text, setText] = useState('');

  async function getText() {
    await axios({
      method: 'get',
      url: 'http://localhost:3001/express1',
      headers: {
        'Allow-Control-Access-Origin': 'http://localhost:3000',
      },
      responseType: 'stream'
    })
      .then((res) => {
        console.log(res);
        setText(res.data.body);
      })
      .catch(e => {console.log(e)})
  }

  useEffect(() => {
    getText();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         
            <h1>{text}</h1>
        
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

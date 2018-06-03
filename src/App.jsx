import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './modules/post';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Post />
  </div>
);

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeaderContainer from './container/Header'
import NavigationContainer from './container/Navigation'
import MainView from './container/MainView';

function App() {
  return (
    <div className= "App container">
      <HeaderContainer/>
      <NavigationContainer/>
      <div className="navUnderLine"/>
      <MainView/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;

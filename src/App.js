import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HeaderContainer from './container/Header'
import NavigationContainer from './container/Navigation'
import MainView from './container/MainView';

function App() {
  return (
    <Router>
      <div className= "App container">
        <HeaderContainer/>
        <div>
          <Switch>
            <Route exact path="/">
              <NavigationContainer/>
              <div className="navUnderLine"/>
              <MainView/>
            </Route>
            <Route path="/account">
              
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;

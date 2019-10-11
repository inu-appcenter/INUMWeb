import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Account from './container/Account';
import Home from './container/Home';

function App() {
  return (
    <Router>
      <div className= "App">
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/account">
              <Account/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;

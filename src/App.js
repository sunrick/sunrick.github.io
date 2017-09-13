import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home.js';
import Ruby from './Ruby.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/ruby" exact component={Ruby}/>
        </Switch>
      </div>
    );
  }
}

export default App;

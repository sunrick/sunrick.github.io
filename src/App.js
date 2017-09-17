import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home.js';

import Ruby from './Ruby.js';
import Javascript from './Javascript.js';
import Elixir from './Elixir.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/ruby" exact component={Ruby}/>
          <Route path="/javascript" exact component={Javascript}/>
          <Route path="/elixir" exact component={Elixir}/>
        </Switch>
      </div>
    );
  }
}

export default App;

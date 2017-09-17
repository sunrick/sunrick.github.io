import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home.js';

import Ruby from './Ruby.js';
import Javascript from './Javascript.js';
import Elixir from './Elixir.js';
import RubyOnRails from './RubyOnRails.js';
import ReactJS from './ReactJS.js';
import Phoenix from './Phoenix.js';

import FormsExpress from './FormsExpress.js';
import Accord from './Accord.js';

import Journey from './Journey.js';
import Download from './Download.js';

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
          <Route path="/ruby-on-rails" exact component={RubyOnRails}/>
          <Route path="/react" exact component={ReactJS}/>
          <Route path="/phoenix" exact component={Phoenix}/>

          <Route path="/forms-express" exact component={FormsExpress}/>
          <Route path="/accord-aca" exact component={Accord}/>

          <Route path="/resume-fun" exact component={Journey}/>
          <Route path="/resume" exact component={Download}/>

        </Switch>
      </div>
    );
  }
}

export default App;

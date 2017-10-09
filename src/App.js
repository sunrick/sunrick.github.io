import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home.js';

import Ruby from './writings/Ruby.js';
import Javascript from './writings/Javascript.js';
import Elixir from './writings/Elixir.js';
import RubyOnRails from './writings/RubyOnRails.js';
import ReactJS from './writings/ReactJS.js';
import Phoenix from './writings/Phoenix.js';

import Portfolio from './portfolio/Portfolio.js';
import FormsExpress from './portfolio/FormsExpress.js';
import Accord from './portfolio/Accord.js';

import Resume from './resume/Resume.js';

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

          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/portfolio/forms-express" exact component={FormsExpress}/>
          <Route path="/portfolio/accord-aca" exact component={Accord}/>

          <Route path="/resume" exact component={Resume}/>

        </Switch>
      </div>
    );
  }
}

export default App;

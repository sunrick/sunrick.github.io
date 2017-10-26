import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from './Home.js'
import Portfolio from './portfolio/Portfolio.js'
import About from './About.js'

class App extends Component {
  render() {
    return (
      <div className="App" style={{overflow: "hidden", position: "relative"}}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Portfolio}/>
          <Route path="/about-me" exact component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;

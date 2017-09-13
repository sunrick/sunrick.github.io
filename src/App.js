import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Button from './Button.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="fluid-container">
          <div className="grid">
            <div className="column">
              <h1 className="title"> software:developer </h1>
              <h3 className="subtitle"> rickard sundén </h3>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <p> i develop software out of atlanta, ga, usa. </p>
              <div className="buttons">
                <Button text="github"/>
                <Button text="email"/>
                <Button text="phone"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my languages </h2>
              <div className="buttons">
                <Button text="ruby"/>
                <Button text="javascript"/>
                <Button text="elixir"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my frameworks </h2>
              <div className="buttons">
                <Button text="ruby on rails"/>
                <Button text="react.js"/>
                <Button text="phoenix"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my history </h2>
              <div className="buttons">
                <Button text="let's go on a journey"/>
                <p> or </p>
                <Button text="nah, download résumé"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

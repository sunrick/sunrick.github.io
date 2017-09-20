import React, { Component } from 'react';
import Button from './Button.js';
import FixedNavbar from './FixedNavbar.js';

import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <FixedNavbar/>
        <div className="fluid-container">
          <div className="grid">
            <div className="column">
              <h1 className="title"> software:developer </h1>
              <h3 className="subtitle"> rickard sundén </h3>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <p>
                Hello. My name is Rickard.
              </p>
              <p>
                I develop software out of Atlanta, GA, USA.
              </p>
              <p>
                I create web and mobile apps but also fiddle around with robots.
              </p>
              <p>
                Need something built? <a href="#"> Contact me. </a>
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> coding skills </h2>
              <h4> languages </h4>
              <div className="buttons">
                <Button to="/ruby" text="ruby"/>
                <Button to="/javascript" text="javascript"/>
                <Button to="/elixir" text="elixir"/>
              </div>
              <h4> frameworks </h4>
              <div className="buttons">
                <Button to="/ruby-on-rails" text="ruby on rails"/>
                <Button to="/react" text="react"/>
                <Button to="/phoenix" text="phoenix"/>
              </div>
            </div>

          </div>
          <div className="grid">
            <div className="column">
              <h2> portfolio </h2>
              <div className="buttons">
                <Button to="forms-express" text="forms express 2.0"/>
                <Button to="accord-aca" text="accord aca"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> résumé </h2>
              <div className="buttons">
                <Button to="resume-fun" text="let's go on a journey"/>
                <p> or </p>
                <Button to="resume" text="nah, download résumé"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> contact </h2>
              <div className="buttons">
                <Button text="email"/>
                <Button to="https://github.com/sunrick" text="github"/>
                <Button to="https://www.linkedin.com/in/rsunden/" text="linkedin"/>
                <Button text="blog"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

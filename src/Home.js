import React, { Component } from 'react';
import Button from './Button.js';
import FixedNavbar from './FixedNavbar.js';

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
            <div className="column">
              <p> i develop software out of atlanta, ga, usa. </p>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my languages </h2>
              <div className="buttons">
                <Button to="/ruby" text="ruby"/>
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
          <div className="grid">
            <div className="column">
              <h2> my portfolio </h2>
              <div className="buttons">
                <Button text="forms express 2.0"/>
                <Button text="accord aca"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my programming philosophy </h2>
              <div className="buttons">
                <Button text="k.i.s.s."/>
                <Button text="iterate"/>
                <Button text="pride"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my passions </h2>
              <div className="buttons">
                <Button text="coding"/>
                <Button text="learning"/>
                <Button text="fun"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my contact information </h2>
              <div className="buttons">
                <Button text="github"/>
                <Button text="email"/>
                <Button text="linkedin"/>
                <Button text="blog"/>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> my site </h2>
              <div className="buttons">
                <Button text="about logo"/>
                <Button text="about design"/>
                <Button text="about tech stack"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

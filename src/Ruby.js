import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';
import './css/Ruby.css';

class Ruby extends Component {
  render() {
    return (
      <div className="Ruby">
        <FixedNavbar/>
        <div className="fluid-container">
          <div className="grid">
            <div className="column">
              <h1> ruby </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> experience </h2>
              <p> 2 years </p>
              <p> ruby on rails </p>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> what i like </h2>
              <p> simplicity </p>
              <p> ecosystem </p>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> what i don't like </h2>
              <p> (technically) not thread safe. bad for web development. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ruby;

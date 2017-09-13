import React, { Component } from 'react';
import logo from './img/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="fluid-container">
          <div className="grid">
            <div className="column">
              <img className="logo" src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import Button from './Button.js';

import './css/Navbar.css';
import logo from './img/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="left">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="right">
          <Button text="download pdf version of site"/>
        </div>
      </div>
    );
  }
}

export default Navbar;

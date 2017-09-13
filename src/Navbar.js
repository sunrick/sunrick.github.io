import React, { Component } from 'react';
import Logo from './Logo.js';

import './css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="left">
          <Logo/>
        </div>
        <div className="right">
          <p> placeholder </p>
        </div>
      </div>
    );
  }
}

export default Navbar;

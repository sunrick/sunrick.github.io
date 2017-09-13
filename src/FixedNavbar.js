import React, { Component } from 'react';
import Logo from './Logo.js';

import './css/Navbar.css';

class FixedNavbar extends Component {
  render() {
    return (
      <div className="Fixed Navbar">
        <div className="left">
        </div>
        <div className="right">
          <Logo/>
        </div>
      </div>
    );
  }
}

export default FixedNavbar;

import React, { Component } from 'react';
import Logo from './Logo.js';
import {
  Link
} from 'react-router-dom';

import './css/Navbar.css';

class FixedNavbar extends Component {
  render() {
    return (
      <div className="Fixed Navbar">
        <div className="left">
        </div>
        <div className="right">
          <Link to="/">
            <Logo/>
          </Link>
        </div>
      </div>
    );
  }
}

export default FixedNavbar;

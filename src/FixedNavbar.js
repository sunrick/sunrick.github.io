import React, { Component } from 'react';
import Logo from './Logo.js';
import {
  Link
} from 'react-router-dom';
import { FixedNav, NavLeft, NavRight } from './components.js'

class FixedNavbar extends Component {
  render() {
    return (
      <FixedNav>
        <NavLeft/>
        <NavRight>
          <Link to="/">
            <Logo/>
          </Link>
        </NavRight>
      </FixedNav>
    );
  }
}

export default FixedNavbar;

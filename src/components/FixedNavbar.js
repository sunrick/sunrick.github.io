import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logo, FixedNav, NavLeft, NavRight } from '../components.js'

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

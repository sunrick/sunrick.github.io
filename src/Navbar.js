import React, { Component } from 'react'
import Logo from './Logo.js'
import { Nav, NavLeft, NavRight } from './component.js'

import './css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavLeft>
          <Logo/>
        </NavLeft>
        <NavRight>
          <p> placeholder </p>
        </NavRight>
      </Nav>
    );
  }
}



export default Navbar


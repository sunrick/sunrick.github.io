import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logo, FixedNav, NavLeft, NavRight, Buttons, Button } from '../components.js'

class FixedNavbar extends Component {
  render() {
    return (
      <FixedNav>
        <Buttons>
          <Button to="/" text="home"/>
          <Button to="/portfolio" text="skills"/>
          <Button to="/portfolio" text="projects"/>
          <Button to="/portfolio" text="contact"/>
          <Button to="/portfolio" text="résumé"/>
        </Buttons>
      </FixedNav>
    );
  }
}

export default FixedNavbar;

import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class Phoenix extends Component {
  render() {
    return (
      <div className="Phoenix">
        <FixedNavbar/>
        <div className="fluid-container">
        </div>
      </div>
    );
  }
}

export default Phoenix;

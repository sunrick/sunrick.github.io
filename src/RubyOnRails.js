import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class RubyOnRails extends Component {
  render() {
    return (
      <div className="RubyOnRails">
        <FixedNavbar/>
        <div className="fluid-container">
        </div>
      </div>
    );
  }
}

export default RubyOnRails;

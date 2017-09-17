import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class ReactJS extends Component {
  render() {
    return (
      <div className="ReactJS">
        <FixedNavbar/>
        <div className="fluid-container">
        </div>
      </div>
    );
  }
}

export default ReactJS;

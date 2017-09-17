import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class Elixir extends Component {
  render() {
    return (
      <div className="Elixir">
        <FixedNavbar/>
        <div className="fluid-container">
        </div>
      </div>
    );
  }
}

export default Elixir;

import React, { Component } from 'react';
import './css/Button.css';

class Button extends Component {
  render() {
    return (
      <button className="Button">
        {this.props.text}
      </button>
    );
  }
}

export default Button;

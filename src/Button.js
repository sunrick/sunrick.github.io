import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './css/Button.css';

class Button extends Component {
  render() {
    const to = this.props.to || "#";
    const text = this.props.text;
    return (
      to.includes("https")
      ? <a href={to} className="Button"> {text} </a>
      : <Link to={to || "#"} className="Button"> {text}</Link>
    );
  }
}

export default Button;

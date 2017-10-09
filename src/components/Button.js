import React, { Component } from 'react'
import { StyledButton, StyledLink } from '../components.js'

class Button extends Component {
  render() {
    const to = this.props.to || "#";
    const text = this.props.text;
    return (
      to.includes("https")
      ? <StyledButton href={to} className="Button"> {text} </StyledButton>
      : <StyledLink to={to || "#"}> {text}</StyledLink>
    );
  }
}

export default Button



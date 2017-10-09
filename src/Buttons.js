import React, { Component } from 'react';
import styled from 'styled-components'

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

const StyledButton = styled.a`
  border: 3px solid #000;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`

const StyledLink = styled(Link)`
  border: 3px solid #000;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`

export default Button;


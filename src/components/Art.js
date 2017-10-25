import React, { Component } from 'react'
import styled from 'styled-components'

class Art extends Component {
  render() {
    return (
      <Wrapper>
        <span> drawing by renée sundén </span>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  z-index: 1;
  font-size: 0.5em;
  background-color: #FFDC50;
`

export default Art

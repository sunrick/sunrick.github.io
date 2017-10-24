import React, { Component } from 'react'
import styled from 'styled-components'
import { RouterButton } from '../components.js'

class Back extends Component {
  render() {
    return (
      <Wrapper>
        <RouterButton to="/"> back </RouterButton>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 1rem;
  margin-top: 1rem;
`

export default Back

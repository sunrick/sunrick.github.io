import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo.js'
import { FixedNavbar, FluidContainer } from '../components.js'

class StandardPage extends Component {
  render() {
    return(
      <Wrapper {...this.props}>
        <FluidContainer>
          <Content>
            {this.props.children}
          </Content>
        </FluidContainer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 10rem;
  background-color: ${props => props.bgColor || "#FFDC50"};
  color: ${props => props.color || "#000"};
`
const Content = styled.div``

const TitleContainer = styled.div`
  margin-bottom: 0;
  overflow: auto;
`

const Title = styled.h1`
  font-size: 4em;
  margin-top: 0.85rem;
  margin-bottom: 0.85rem;
`

export default StandardPage


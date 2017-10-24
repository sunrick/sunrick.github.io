import React, { Component } from 'react'
import styled from 'styled-components'
import { FluidContainer, Column, Buttons, RouterButton, Button, Logo } from './components.js'
import resume from './img/rickard_sunden_resume.pdf'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Logo/>
        <FluidContainer>
          <Column w={[1, 1, 1/2]}>
            <p style={{marginTop: "3rem"}}>
              Hello. My name is Rickard Sundén.
            </p>
            <p>
              I develop software out of Atlanta, GA, USA.
            </p>
            <Buttons style={{marginTop: "2.5rem", marginBottom: "2.75rem"}}>
              <RouterButton to="/about-me" children="about me"/>
              <RouterButton to="/projects" children="projects"/>
              <Button href={resume} target="_blank"children="pdf résumé"/>
            </Buttons>
            <p> Want to get in touch? </p>
            <ul>
              <li> <a href="mailto:rickard@sunden.io">rickard@sunden.io</a> </li>
              <li> <a href="github.com/sunrick">github.com/sunrick</a> </li>
              <li> <a href="linkedin.com/in/rsunden">linkedin.com/in/rsunden</a> </li>
            </ul>
          </Column>
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
  overflow: auto;
`

export default Home;

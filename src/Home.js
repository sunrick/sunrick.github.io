import React, { Component } from 'react'
import styled from 'styled-components'
import { FluidContainer, Column, Buttons, RouterButton, Button, Logo, Box, media } from './components.js'
import resume from './img/rickard_sunden_resume.pdf'
import { logEvent } from './logger.js'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <FluidContainer style={{zIndex: 1, position: "relative"}}>
          <Column>
            <Box style={{marginTop: "3rem"}}>
              <p>
                Hello. My name is Rickard Sundén.
              </p>
              <p>
                I develop software out of Atlanta, GA, USA.
              </p>
            </Box>
            <Buttons style={{marginTop: "2.5rem", marginBottom: "2.75rem"}}>
              <RB to="/about-me" children="about me"/>
              <RB to="/projects" children="projects"/>
              <B onClick={() => logEvent("resume")} href={resume} target="_blank"children="pdf résumé"/>
            </Buttons>
            <Box>
              <p> Want to get in touch? </p>
              <ul>
                <li> <a onClick={() => logEvent("email")} href="mailto:rickard@sunden.io">rickard@sunden.io</a> </li>
                <li> <a onClick={() => logEvent("github")} href="https://github.com/sunrick">github.com/sunrick</a> </li>
                <li> <a onClick={() => logEvent("linkedin")} href="https://linkedin.com/in/rsunden">linkedin.com/in/rsunden</a> </li>
              </ul>
            </Box>
          </Column>
        </FluidContainer>
        <Logo/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #FFDC50;
  color: #000;
  overflow: auto;
  a {
    color: #272727;
    background-color: #FFDC50;
    &:hover {
      text-decoration: underline;
    }
  }
`

const RB = RouterButton.extend`
  ${media.tablet`
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  `}
`

const B = Button.extend`
  ${media.tablet`
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  `}
`

export default Home;

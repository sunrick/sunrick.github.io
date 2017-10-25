import React, { Component } from 'react'
import styled from 'styled-components'
import { FluidContainer, Columns, Column, Back, Box } from  './components.js'
import drawing from './img/rickard-bjorn.svg'

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Back/>
        <FluidContainer style={{marginTop: "2rem"}}>
          <Columns>
            <Column>
              <img style={{width: "100%"}} src={drawing} alt={"my dog Björn and I"}/>
            </Column>
            <Column>
              <Box style={{marginTop: "2rem"}}>
              <h3> a little about me </h3>
              <p>
                I'm half Swedish half American and I've been really fortunate to grow up all over the world.
              </p>
              <p>
                On any given day, you can catch me walking my dog Björn, saying something really stupid to my friends, kicking a soccer ball or playing video games.
              </p>
              </Box>
              <Box style={{marginTop: "2rem"}}>
              <h3> my programming history </h3>
              <p>
                I've been a professional software developer since 2015.
              </p>
              <p>
                Before that I programmed Excel VBA scripts and web scrapers for fun and work.
              </p>
              <p>
                Today, I develop React JS and Native apps. I build backend APIs with Express.js, Elixir (Phoenix) and Rails.
              </p>
              </Box>
            </Column>
          </Columns>
        </FluidContainer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 10rem;
  background-color: ${props => props.bgColor || "#FFDC50"};
  color: ${props => props.color || "#272727"};
  overflow: auto;
`

export default About;

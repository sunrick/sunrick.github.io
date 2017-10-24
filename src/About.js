import React, { Component } from 'react'
import styled from 'styled-components'
import { FluidContainer, Columns, Column, Back } from  './components.js'
import drawing from './img/rickard-bjorn.png'

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Back/>
        <FluidContainer style={{marginTop: "2rem"}}>
          <Columns wrap>
            <Column w={[1,1,1/2]}>
              <img style={{width: "100%"}} src={drawing}/>
            </Column>
            <Column w={[1, 1, 1/2]}>
              <h3> a little about me </h3>
              <p>
                I'm half Swedish half American and I've been really fortunate to grow up all over the world.
              </p>
              <p>
                On any given day, you can catch me walking my dog Björn, saying something really stupid to my friends, kicking a soccer ball or playing video games.
              </p>
              <h3> why I get up in the morning </h3>
              <p>
                I want to build software that helps people.
              </p>
              <p>
                I like to learn something new everyday. It doesn't really matter about what it is. It could be about programming and technology, languages, or about how a toilet works.
              </p>
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
  color: ${props => props.color || "#000"};
  overflow: auto;
`

export default About;

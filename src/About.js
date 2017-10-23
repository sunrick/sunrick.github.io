import React, { Component } from 'react'
import { Buttons, Button } from './components.js'
import { StandardWritingPage } from  './components.js'

class About extends Component {
  render() {
    return (
      <StandardWritingPage>
        <h3 style={{marginTop: "3rem"}}> a little about me </h3>
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
          I like to learn something new everyday. It doesn't really matter about what. It could be about programming and technology, languages, or about how a toilet works.
        </p>
        <h3> my programming history </h3>
        <p>
          I've been a professional software developer since 2015.
        </p>
        <p>
          Before that I programmed Excel VBA scripts and web scrapers for fun and work.
        </p>
        <p>
          Today, I develop React JS and Native apps. I build backend APIs in Express.js, Elixir (Phoenix) and Rails.
        </p>
      </StandardWritingPage>
    )
  }
}

export default About;

import React, { Component } from 'react'
import { Buttons, Button } from './components.js'
import { StandardWritingPage } from  './components.js'

class Home extends Component {
  render() {
    return (
      <StandardWritingPage>
        <p style={{marginTop: "3rem"}}>
          Hello. My name is Rickard Sundén.
        </p>
        <p>
          I develop software out of Atlanta, GA, USA.
        </p>
        <Buttons style={{marginTop: "2.5rem", marginBottom: "2.75rem"}}>
          <Button to="/about-me" text="about me"/>
          <Button to="/projects" text="projects"/>
          <Button to="/resume" text="pdf résumé"/>
        </Buttons>
        <p> Want to get in touch? </p>
        <ul>
          <li> <a href="mailto:rickard@sunden.io">rickard@sunden.io</a> </li>
          <li> <a href="github.com/sunrick">github.com/sunrick</a> </li>
          <li> <a href="linkedin.com/in/rsunden">linkedin.com/in/rsunden</a> </li>
        </ul>
      </StandardWritingPage>
    )
  }
}

export default Home;

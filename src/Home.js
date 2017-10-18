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
        <p>
          I'm half Swedish half American and I've lived in 9 countries. I enjoy making a difference in the world through code.
        </p>
        <Buttons style={{marginTop: "2.25rem"}}>
          <Button to="/portfolio" text="projects"/>
          <Button to="/portfolio" text="contact"/>
          <Button to="/portfolio" text="résumé"/>
        </Buttons>
      </StandardWritingPage>
    )
  }
}

export default Home;

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
        <Buttons style={{marginTop: "3rem"}}>
          <Button to="/portfolio" text="projects"/>
          <Button to="/portfolio" text="contact"/>
          <Button to="/portfolio" text="résumé"/>
        </Buttons>
      </StandardWritingPage>
    )
  }
}

export default Home;

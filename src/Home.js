import React, { Component } from 'react'
import { Buttons, Button } from './components.js'
import { StandardWritingPage } from  './components.js'

class Home extends Component {
  render() {
    return (
      <StandardWritingPage>
        <h1 className="title"> software:developer </h1>
        <h3 className="subtitle"> rickard sundén </h3>
        <p>
          Hello. My name is Rickard.
        </p>
        <p>
          I develop software out of Atlanta, GA, USA.
        </p>
        <p>
          Need something built? <a href="/"> Contact me. </a>
        </p>
        <h2> coding skills </h2>
        <h4> languages </h4>
        <Buttons>
          <Button to="/ruby" text="ruby"/>
          <Button to="/javascript" text="javascript"/>
          <Button to="/elixir" text="elixir"/>
        </Buttons>
        <h4> frameworks </h4>
        <Buttons>
          <Button to="/ruby-on-rails" text="ruby on rails"/>
          <Button to="/react" text="react"/>
          <Button to="/phoenix" text="phoenix"/>
        </Buttons>
        <h2> portfolio </h2>
        <Buttons>
          <Button to="/portfolio" text="check out some projects i've built"/>
        </Buttons>
        <h2> résumé </h2>
        <Buttons>
          <Button to="resume" text="show me the résumé"/>
        </Buttons>
        <h2> contact </h2>
        <Buttons>
          <Button text="email"/>
          <Button to="https://github.com/sunrick" text="github"/>
          <Button to="https://www.linkedin.com/in/rsunden/" text="linkedin"/>
          <Button text="blog"/>
        </Buttons>
      </StandardWritingPage>
    )
  }
}

export default Home;

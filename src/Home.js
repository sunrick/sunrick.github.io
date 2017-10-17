import React, { Component } from 'react'
import { Buttons, Button } from './components.js'
import { StandardWritingPage } from  './components.js'

class Home extends Component {
  render() {
    return (
      <StandardWritingPage>
        <h1 className="title">rickard sundén</h1>
        <h3 className="subtitle">software developer</h3>
        <p>
          Hello.
        </p>
        <p>
          I develop software out of Atlanta, GA, USA.
        </p>
        <p>
          Read more about me <a href="/">here</a> and <a href="/">here</a>.
        </p>
        <p>
          Need to get in touch? <a href="/"> Contact me. </a>
        </p>
        <h2> coding skills </h2>
        <h4> languages </h4>
        <Buttons>
          <Button to="/javascript" text="javascript"/>
          <Button to="/ruby" text="ruby"/>
          <Button to="/elixir" text="elixir"/>
        </Buttons>
        <h4> frameworks </h4>
        <Buttons>
          <Button to="/react" text="react"/>
          <Button to="/ruby-on-rails" text="ruby on rails"/>
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
          <Button to="https://" text="github"/>
          <Button to="https://www.linkedin.com/in/rsunden/" text="linkedin"/>
          <Button text="blog"/>
        </Buttons>
      </StandardWritingPage>
    )
  }
}

export default Home;

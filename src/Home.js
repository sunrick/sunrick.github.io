import React, { Component } from 'react'
import Button from './Button.js'
import FixedNavbar from './FixedNavbar.js'
import { Buttons } from './components.js'
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <FixedNavbar/>
        <div className="fluid-container">
          <div className="grid">
            <div className="column">
              <h1 className="title"> software:developer </h1>
              <h3 className="subtitle"> rickard sundén </h3>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <p>
                Hello. My name is Rickard.
              </p>
              <p>
                I develop software out of Atlanta, GA, USA.
              </p>
              <p>
                Need something built? <a href="/"> Contact me. </a>
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="column">
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
            </div>

          </div>
          <div className="grid">
            <div className="column">
              <h2> portfolio </h2>
              <Buttons>
                <Button to="/portfolio" text="check out some projects i've built"/>
              </Buttons>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> résumé </h2>
              <Buttons>
                <Button to="resume-fun" text="let's go on a journey"/>
                <p> or </p>
                <Button to="resume" text="nah, show me the résumé"/>
              </Buttons>
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <h2> contact </h2>
              <Buttons>
                <Button text="email"/>
                <Button to="https://github.com/sunrick" text="github"/>
                <Button to="https://www.linkedin.com/in/rsunden/" text="linkedin"/>
                <Button text="blog"/>
              </Buttons>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding-bottom: 10rem;
`

export default Home;

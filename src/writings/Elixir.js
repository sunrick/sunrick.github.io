import React, { Component } from 'react'
import { StandardWritingPage } from '../components.js'

class Elixir extends Component {
  render() {
    return (
      <StandardWritingPage title="elixir" bgColor="#4e2a8e" color="#fff">
        <h2> experience </h2>
        <p> 6 months, hobby </p>
        <h2> about </h2>
        <p>
          Elixir has been my introduction to functional programming.
        </p>
        <p>
          I mainly like Elixir because of its Ruby like syntax, its speed, and its concurrency.
          The OTP paradigm is really cool too.
        </p>
        <h2> how i use it </h2>
        <p>
          I mainly use Elixir for back-end API development and experimentation.
        </p>
        <h2> the future </h2>
        <p>
          I could see myself eventually using Elixir and Phoenix for all of my back-end development needs.
          Mainly for apps that require real time functionality, and high performance.
        </p>
      </StandardWritingPage>
    )
  }
}

export default Elixir

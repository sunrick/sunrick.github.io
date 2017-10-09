import React, { Component } from 'react'
import StandardPage from '../StandardPage.js'

class Phoenix extends Component {
  render() {
    return (
      <StandardPage title="phoenix" bgColor="#F67938" color="#fff">
        <h2> experience </h2>
        <p> 6 months, hobby </p>
        <h2> about </h2>
        <p>
          Hooray for high concurrency and performance.
          I'm really excited for Phoenix and Elixir to become part of my toolkit.
        </p>

        <h2> how i use it </h2>
        <p>
          Right now I mainly use Phoenix for personal projects as a learning experience.
        </p>
        <p>
          I deploy Phoenix apps on Heroku and use PostgresSQL as my database.
        </p>
        <h2> the future </h2>
        <p>
          I think eventually I will use Phoenix for all of my back-end development needs. I forsee using Phoenix
          for any app that requires high performance and real time functionality.
        </p>
      </StandardPage>
    )
  }
}

export default Phoenix

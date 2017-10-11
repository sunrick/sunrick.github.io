import React, { Component } from 'react'
import { StandardWritingPage } from '../components.js'

class Ruby extends Component {
  render() {
    return (
      <StandardWritingPage title="ruby" bgColor="#CC342D" color="#fff">
        <h2> experience </h2>
        <p> 2+ years, professional </p>
        <h2> about </h2>
        <p>
          Right now Ruby is probably my strongest language.
        </p>
        <p>
          I love the simple syntax, how productive I am developing in it, it's extensive ecosystem of gems, and abundance of learning materials.
        </p>
        <h2> how i use it </h2>
        <p>
          I primarily use Ruby for web development (Ruby on Rails, Sinatra) but I've also used it to write
          web scrapers and create fun gems. I've also hacked together Arduino projects using Ruby.
        </p>
        <h2> the future </h2>
        <p>
          I see Ruby as being my go to language for any kind back-end/non UI development.
          That means mostly building Rails APIs and hacking together personal projects.
        </p>
      </StandardWritingPage>
    )
  }
}

export default Ruby

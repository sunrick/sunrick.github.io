import React, { Component } from 'react'
import StandardPage from '../StandardPage.js'

class Ruby extends Component {
  render() {
    return (
      <StandardPage title="ruby" bgColor="#CC342D" color="#fff">
        <h2> experience </h2>
        <p> 2+ years, professional </p>
        <h2> about </h2>
        <p>
          Right now Ruby is probably my strongest language and the one I enjoy coding in the most.
        </p>
        <p>
           Ruby just makes sense.
        </p>
        <p>
          I love the simple syntax, how productive I am developing in it, it's extensive ecosystem of gems, abundance of learning materials and
          the great community.
        </p>
        <h2> how i use it </h2>
        <p>
          I primarily use Ruby for web development (Ruby on Rails, Sinatra) but I've also used it to write
          web scrapers, learn new programming concepts and create fun gems.
          I've also hacked together Arduino projects using Ruby.
        </p>
        <h2> the future </h2>
        <p>
          I see Ruby as being my go to language for any kind back-end/non UI development.
          That means mostly building Rails APIs and hacking together personal projects.
        </p>
      </StandardPage>
    )
  }
}

export default Ruby

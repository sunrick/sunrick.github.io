import React, { Component } from 'react'
import StandardPage from '../StandardPage.js'

class RubyOnRails extends Component {
  render() {
    return (
      <StandardPage title="ruby on rails" bgColor="#CC0000" color="#fff">
        <h2> experience </h2>
        <p> 2+ years, professional </p>
        <h2> about </h2>
        <p>
          Like Ruby, Rails just makes sense to me.
        </p>
        <p>
          I like how Rails stresses the idea of convention over configuration. I can
          get things done quickly and write well organized code. I don't have to worry about
          writing boring boilerplate code. It just works.
        </p>
        <h2> how i use it </h2>
        <p>
          I used to write full-stack apps with Rails because of how productive you could be.
          Overtime, I've realized that using Rails views, Turbolinks and jQuery can complicate front-end development.
        </p>
        <p>
          Every Rails project I start with now is API only. It helps de-couple back-end code from front-end code.
          I enjoy programming in Rails a lot more when controller actions are leaner and cleaner.
        </p>
        <p>
          My go to database is PostgresSQL, and my go to BaaS is either Heroku or AWS.
        </p>
        <h2> the future </h2>
        <p>
          Rails will remain my preferred back-end as an API for the foreseeable future.
          I'm also interested in using GraphQL in the near future.
        </p>
      </StandardPage>
    )
  }
}

export default RubyOnRails

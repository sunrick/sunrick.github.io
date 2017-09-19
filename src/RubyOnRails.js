import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class RubyOnRails extends Component {
  render() {
    return (
      <div className="RubyOnRails">
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }} className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> ruby on rails</h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RubyOnRails;

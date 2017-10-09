import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class Ruby extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "10rem", backgroundColor: "#CC342D", color: "#fff" }} className="Ruby">
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }}className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> ruby </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ruby;

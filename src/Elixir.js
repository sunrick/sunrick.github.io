import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class Elixir extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#4e2a8e", color: "#fff"}} className="Elixir">
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }} className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> elixir </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <h2> experience </h2>
              <p> 6 months, hobby </p>
              <h2> about </h2>
              <p>
                Elixir has been my introduction to functional programming. It hurt a lot at first
                but it has definitely given me a new perspective on programming.
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elixir;

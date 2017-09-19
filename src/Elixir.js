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
                elixir.
              </p>
              <h2> how i use it </h2>
              <p>
                hello.
              </p>
              <h2> the future </h2>
              <p>
                dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elixir;
